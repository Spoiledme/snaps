import { Image } from './Image';

describe('Image', () => {
  it('renders an image', () => {
    const result = <Image src="<svg />" alt="Foo" borderRadius="medium" />;

    expect(result).toStrictEqual({
      type: 'Image',
      key: null,
      props: {
        src: '<svg />',
        alt: 'Foo',
        borderRadius: 'medium',
      },
    });
  });
});
