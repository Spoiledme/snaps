var e={grey100:"#d6d9dc",grey200:"#bbc0c5",grey300:"#9fa6ae",grey400:"#848c96",grey500:"#6a737d",grey600:"#535a61",grey700:"#3b4046",grey800:"#24272a",grey900:"#141618",grey1000:"#000000",grey050:"#f2f4f6",grey000:"#ffffff",grey025:"#fafbfc",blue100:"#a7d9fe",blue200:"#75c4fd",blue300:"#43aefc",blue400:"#1098fc",blue500:"#0376c9",blue600:"#0260a4",blue700:"#024272",blue800:"#01253f",blue900:"#00080d",blue050:"#eaf6ff",blue025:"#eaf6ff",green100:"#afecbd",green200:"#5dd879",green300:"#28a745",green400:"#28a745",green500:"#1c8234",green600:"#145523",green700:"#145523",green800:"#0a2c12",green900:"#041007",green050:"#d6ffdf",green025:"#f3fcf5",red100:"#f7d5d8",red200:"#f1b9be",red300:"#e88f97",red400:"#e06470",red500:"#d73847",red600:"#8e1d28",red700:"#64141c",red800:"#3a0c10",red900:"#3a0c10",red050:"#fcf2f3",red025:"#fcf2f3",yellow100:"#ffdf70",yellow200:"#ffc70a",yellow300:"#f8883b",yellow400:"#f66a0a",yellow500:"#bf5208",yellow600:"#954005",yellow700:"#632b04",yellow800:"#321602",yellow900:"#321602",yellow050:"#fff2c5",yellow025:"#fefcde",orange100:"#fbc49d",orange200:"#faa66c",orange300:"#f8883b",orange400:"#f66a0a",orange500:"#bf5208",orange600:"#954005",orange700:"#632b04",orange800:"#321602",orange900:"#321602",orange050:"#fde2cf",orange025:"#fef5ef",purple100:"#efd2ff",purple200:"#cfb5f0",purple300:"#d27dff",purple400:"#b864f5",purple500:"#8b45b6",purple600:"#6c2ab2",purple700:"#4c1178",purple800:"#32054d",purple900:"#280a00",purple050:"#fbf2ff",purple025:"#fcf6ff",lime100:"#b8ef4a",lime200:"#95ca45",lime300:"#7ab040",lime400:"#64993d",lime500:"#457a39",lime600:"#275b35",lime700:"#093a31",lime800:"#022321",lime900:"#011515",lime025:"#effed9",lime050:"#e3febd",white:"#ffffff",black:"#000000"},n={background:{default:e.grey800,alternative:e.grey900,defaultHover:"#313235",defaultPressed:"#3f4145",alternativeHover:"#1f2123",alternativePressed:"#2e3033",hover:"#ffffff0a",pressed:"#ffffff14"},text:{default:e.grey000,alternative:e.grey200,muted:e.grey400},icon:{default:e.grey000,alternative:e.grey200,muted:e.grey400},border:{default:e.grey400,muted:"#848c9629"},overlay:{default:"#00000099",alternative:"#000000cc",inverse:e.grey000},primary:{default:e.blue300,alternative:e.blue200,muted:"#43aefc26",inverse:e.grey900,defaultHover:"#26a2fc",defaultPressed:"#3baafd"},error:{default:e.red300,alternative:e.red200,muted:"#e88f9726",inverse:e.grey900,defaultHover:"#e47782",defaultPressed:"#e78891"},warning:{default:e.yellow100,muted:"#ffdf7026",inverse:e.grey900,defaultHover:"#ffe485",defaultPressed:"#ffe899"},success:{default:e.green300,muted:"#28a74526",inverse:e.grey900,defaultHover:"#2cb94c",defaultPressed:"#30ca53"},info:{default:e.blue300,muted:"#43aefc26",inverse:e.grey900},flask:{default:e.purple300,inverse:e.grey900},shadow:{default:"#00000066",primary:"#43aefc33",error:"#ff758466"}},o={size:{xs:{shadowColor:n.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:4},sm:{shadowColor:n.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:8},md:{shadowColor:n.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:16},lg:{shadowColor:n.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40}}},i={euclidCircularB:"Euclid Circular B"},t={fontSize1:10,fontSize2:12,fontSize3:14,fontSize4:16,fontSize5:18,fontSize6:24,fontSize7:32,fontSize8:48},l={regular:"400",medium:"500",bold:"700"},a={letterSpacing0:0,letterSpacing1:.25},r={lineHeight1:16,lineHeight2:20,lineHeight3:22,lineHeight4:24,lineHeight5:32,lineHeight6:40,lineHeight7:56},d={sDisplayMD:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize7,lineHeight:r.lineHeight6,letterSpacing:a.letterSpacing0},sHeadingLG:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize6,lineHeight:r.lineHeight5,letterSpacing:a.letterSpacing0},sHeadingMD:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize5,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},sHeadingSM:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},sHeadingSMRegular:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},sBodyLGMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},sBodyMD:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},sBodyMDMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},sBodyMDBold:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},sBodySM:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize2,lineHeight:r.lineHeight2,letterSpacing:a.letterSpacing0},sBodySMMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize2,lineHeight:r.lineHeight2,letterSpacing:a.letterSpacing0},sBodySMBold:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize2,lineHeight:r.lineHeight2,letterSpacing:a.letterSpacing0},sBodyXS:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize1,lineHeight:r.lineHeight1,letterSpacing:a.letterSpacing1},sBodyXSMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize1,lineHeight:r.lineHeight1,letterSpacing:a.letterSpacing1},lDisplayMD:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize8,lineHeight:r.lineHeight7,letterSpacing:a.letterSpacing0},lHeadingLG:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize7,lineHeight:r.lineHeight6,letterSpacing:a.letterSpacing0},lHeadingMD:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize6,lineHeight:r.lineHeight5,letterSpacing:a.letterSpacing0},lHeadingSM:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize5,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lHeadingSMRegular:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize5,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lBodyLGMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize5,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lBodyMD:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lBodyMDMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lBodyMDBold:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize4,lineHeight:r.lineHeight4,letterSpacing:a.letterSpacing0},lBodySM:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},lBodySMMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},lBodySMBold:{fontFamily:i.euclidCircularB,fontWeight:l.bold,fontSize:t.fontSize3,lineHeight:r.lineHeight3,letterSpacing:a.letterSpacing0},lBodyXS:{fontFamily:i.euclidCircularB,fontWeight:l.regular,fontSize:t.fontSize2,lineHeight:r.lineHeight2,letterSpacing:a.letterSpacing1},lBodyXSMedium:{fontFamily:i.euclidCircularB,fontWeight:l.medium,fontSize:t.fontSize2,lineHeight:r.lineHeight2,letterSpacing:a.letterSpacing1}},u={colors:n,typography:d,shadows:o},f={background:{default:e.grey000,alternative:e.grey050,defaultHover:"#f5f5f5",defaultPressed:"#ebebeb",alternativeHover:"#e7ebee",alternativePressed:"#dbe0e6",hover:"#0000000a",pressed:"#00000014"},text:{default:e.grey900,alternative:e.grey500,muted:e.grey300},icon:{default:e.grey900,alternative:e.grey500,muted:e.grey300},border:{default:e.grey200,muted:"#bbc0c566"},overlay:{default:"#00000099",alternative:"#000000cc",inverse:e.grey000},primary:{default:e.blue500,alternative:e.blue600,muted:"#0376c91a",inverse:e.grey000,defaultHover:"#036ab5",defaultPressed:"#025ea1"},error:{default:e.red500,alternative:e.red600,muted:"#d738471a",inverse:e.grey000,defaultHover:"#d02a3a",defaultPressed:"#bf2635"},warning:{default:e.yellow500,muted:"#bf52081a",inverse:e.grey000,defaultHover:"#ac4a07",defaultPressed:"#984106"},success:{default:e.green500,muted:"#1c82341a",inverse:e.grey000,defaultHover:"#18712d",defaultPressed:"#156127"},info:{default:e.blue500,muted:"#0376c91a",inverse:e.grey000},flask:{default:e.purple500,inverse:e.grey000},shadow:{default:"#0000001a",primary:"#0376c933",error:"#ca354266"}},g={size:{xs:{shadowColor:f.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:4},sm:{shadowColor:f.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:8},md:{shadowColor:f.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:16},lg:{shadowColor:f.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40}}},c={colors:f,typography:d,shadows:g};export{u as d,c as l};
