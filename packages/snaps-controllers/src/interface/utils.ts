import type { InternalAccount } from '@metamask/keyring-internal-api';
import { assert } from '@metamask/snaps-sdk';
import type {
  FormState,
  InterfaceState,
  ComponentOrElement,
  InterfaceContext,
  State,
} from '@metamask/snaps-sdk';
import type {
  DropdownElement,
  InputElement,
  JSXElement,
  OptionElement,
  FileInputElement,
  CheckboxElement,
  RadioGroupElement,
  RadioElement,
  SelectorElement,
  SelectorOptionElement,
  AccountSelectorElement,
} from '@metamask/snaps-sdk/jsx';
import { isJSXElementUnsafe } from '@metamask/snaps-sdk/jsx';
import {
  getJsonSizeUnsafe,
  getJsxChildren,
  getJsxElementFromComponent,
  walkJsx,
} from '@metamask/snaps-utils';
import type { CaipAccountId, CaipChainId } from '@metamask/utils';
import {
  parseCaipChainId,
  toCaipAccountId,
  type CaipAccountAddress,
} from '@metamask/utils';

type GetSelectedAccount = () => InternalAccount | undefined;
type GetAccountByAddress = (
  address: CaipAccountAddress,
) => InternalAccount | undefined;

/**
 * Get a JSX element from a component or JSX element. If the component is a
 * JSX element, it is returned as is. Otherwise, the component is converted to
 * a JSX element.
 *
 * @param component - The component to convert.
 * @returns The JSX element.
 */
export function getJsxInterface(component: ComponentOrElement): JSXElement {
  if (isJSXElementUnsafe(component)) {
    return component;
  }

  return getJsxElementFromComponent(component);
}

/**
 * Assert that the component name is unique in state.
 *
 * @param state - The interface state to verify against.
 * @param name - The component name to verify.
 */
export function assertNameIsUnique(state: InterfaceState, name: string) {
  assert(
    state[name] === undefined,
    `Duplicate component names are not allowed, found multiple instances of: "${name}".`,
  );
}

/**
 * Create a list of CAIP account IDs from an address and a list of scopes.
 *
 * @param address - The address to create the account IDs from.
 * @param scopes - The scopes to create the account IDs from.
 * @returns The list of CAIP account IDs.
 */
export function createAddressList(
  address: string,
  scopes: CaipChainId[],
): CaipAccountId[] {
  return scopes.map((scope) => {
    const { namespace, reference } = parseCaipChainId(scope);
    return toCaipAccountId(namespace, reference, address);
  });
}

/**
 * Construct default state for a component.
 *
 * This function is meant to be used inside constructInputState to account
 * for component specific defaults and will not override the component value or existing form state.
 *
 * @param element - The input element.
 * @param getSelectedAccount - A function to get the selected account in the client.
 * @returns The default state for the specific component, if any.
 */
function constructComponentSpecificDefaultState(
  element:
    | InputElement
    | DropdownElement
    | RadioGroupElement
    | CheckboxElement
    | SelectorElement
    | AccountSelectorElement,
  getSelectedAccount: GetSelectedAccount,
) {
  switch (element.type) {
    case 'Dropdown': {
      const children = getJsxChildren(element) as OptionElement[];
      return children[0]?.props.value;
    }

    case 'RadioGroup': {
      const children = getJsxChildren(element) as RadioElement[];
      return children[0]?.props.value;
    }

    case 'Selector': {
      const children = getJsxChildren(element) as SelectorOptionElement[];
      return children[0]?.props.value;
    }

    case 'AccountSelector': {
      const account = getSelectedAccount();

      if (!account) {
        return null;
      }

      const { id, address, scopes } = account;

      const addresses = createAddressList(address, scopes);

      return { accountId: id, addresses };
    }

    case 'Checkbox':
      return false;

    default:
      return null;
  }
}

/**
 * Get the state value for a stateful component.
 *
 * Most components store the state value as a `value` prop.
 * This function exists to account for components where that isn't the case.
 *
 * @param element - The input element.
 * @param getAccountByAddress - A function to get an account by address.
 * @returns The state value for a given component.
 */
function getComponentStateValue(
  element:
    | AccountSelectorElement
    | InputElement
    | DropdownElement
    | RadioGroupElement
    | CheckboxElement
    | SelectorElement,
  getAccountByAddress: GetAccountByAddress,
) {
  switch (element.type) {
    case 'Checkbox':
      return element.props.checked;

    case 'AccountSelector': {
      if (!element.props.selectedAddress) {
        return undefined;
      }

      const account = getAccountByAddress(element.props.selectedAddress);

      if (!account) {
        return undefined;
      }

      const { id, address, scopes } = account;

      const addresses = createAddressList(address, scopes);

      return { accountId: id, addresses };
    }

    default:
      return element.props.value;
  }
}

/**
 * Construct the state for an input field.
 *
 * @param oldState - The previous state.
 * @param element - The input element.
 * @param getSelectedAccount - A function to get the selected account in the client.
 * @param getAccountByAddress - A function to get an account by address.
 * @param form - An optional form that the input is enclosed in.
 * @returns The input state.
 */
function constructInputState(
  oldState: InterfaceState,
  element:
    | AccountSelectorElement
    | InputElement
    | DropdownElement
    | RadioGroupElement
    | FileInputElement
    | CheckboxElement
    | SelectorElement,
  getSelectedAccount: GetSelectedAccount,
  getAccountByAddress: GetAccountByAddress,
  form?: string,
) {
  const oldStateUnwrapped = form ? (oldState[form] as FormState) : oldState;
  const oldInputState = oldStateUnwrapped?.[element.props.name] as State;

  if (element.type === 'FileInput') {
    return oldInputState ?? null;
  }

  return (
    getComponentStateValue(element, getAccountByAddress) ??
    oldInputState ??
    constructComponentSpecificDefaultState(element, getSelectedAccount) ??
    null
  );
}

/**
 * Construct the interface state for a given component tree.
 *
 * @param oldState - The previous state.
 * @param rootComponent - The UI component to construct state from.
 * @param getSelectedAccount - A function to get the selected account in the client.
 * @param getAccountByAddress - A function to get an account by address.
 * @returns The interface state of the passed component.
 */
export function constructState(
  oldState: InterfaceState,
  rootComponent: JSXElement,
  getSelectedAccount: GetSelectedAccount,
  getAccountByAddress: GetAccountByAddress,
): InterfaceState {
  const newState: InterfaceState = {};

  // Stack containing the forms we have visited and at which depth
  const formStack: { name: string; depth: number }[] = [];

  walkJsx(rootComponent, (component, depth) => {
    let currentForm = formStack[formStack.length - 1];

    // Pop the current form of the stack once we leave its depth.
    if (currentForm && depth <= currentForm.depth) {
      formStack.pop();
      currentForm = formStack[formStack.length - 1];
    }

    if (component.type === 'Form') {
      assertNameIsUnique(newState, component.props.name);
      formStack.push({ name: component.props.name, depth });
      newState[component.props.name] = {};
      return;
    }

    // Stateful components inside a form
    if (
      currentForm &&
      (component.type === 'Input' ||
        component.type === 'Dropdown' ||
        component.type === 'RadioGroup' ||
        component.type === 'FileInput' ||
        component.type === 'Checkbox' ||
        component.type === 'Selector' ||
        component.type === 'AccountSelector')
    ) {
      const formState = newState[currentForm.name] as FormState;
      assertNameIsUnique(formState, component.props.name);
      formState[component.props.name] = constructInputState(
        oldState,
        component,
        getSelectedAccount,
        getAccountByAddress,
        currentForm.name,
      );
      return;
    }

    // Stateful components outside a form
    if (
      component.type === 'Input' ||
      component.type === 'Dropdown' ||
      component.type === 'RadioGroup' ||
      component.type === 'FileInput' ||
      component.type === 'Checkbox' ||
      component.type === 'Selector' ||
      component.type === 'AccountSelector'
    ) {
      assertNameIsUnique(newState, component.props.name);
      newState[component.props.name] = constructInputState(
        oldState,
        component,
        getSelectedAccount,
        getAccountByAddress,
      );
    }
  });

  return newState;
}

const MAX_CONTEXT_SIZE = 1_000_000; // 1 mb

/**
 * Validate a JSON blob to be used as the interface context.
 *
 * @param context - The JSON blob.
 * @throws If the JSON blob is too large.
 */
export function validateInterfaceContext(context?: InterfaceContext) {
  if (!context) {
    return;
  }

  // We assume the validity of this JSON to be validated by the caller.
  // E.g., in the RPC method implementation.
  const size = getJsonSizeUnsafe(context);
  assert(
    size <= MAX_CONTEXT_SIZE,
    `A Snap interface context may not be larger than ${
      MAX_CONTEXT_SIZE / 1000000
    } MB.`,
  );
}
