var malan = {
  name: "马兰",
  code: "马兰",
  v: "110KV",
  label: "马兰",
  lpos: [400, 210],
  lsize: 40,
  powerToChild: false,
  children: [
    {
      code: "马兰-2#",
      color: 0,
      stationName: "马兰110kV站",
      powerFrom: ["马兰2#"],
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [280, 110],
          labelDirection: "vertical",
          label: "马兰2#\n引自邢家社220kV站 148",
          lpos: [280, 30],
          length: 100,
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [190, 170],
              length: 90,
              children: [
                {
                  name: "switch",
                  direction: "bottom",
                  pos: [182, 140],
                  label: "1874D",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "bottom",
                      pos: [190, 110]
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "right",
                  pos: [145, 170],
                  label: "1847",
                  state: 1,
                  children: [
                    {
                      name: "IPT",
                      direction: "right",
                      pos: [103, 167]
                    },
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [145, 140],
                      length: 30,
                      children: [
                        {
                          name: "capacitor",
                          direction: "left",
                          pos: [75, 140],
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [62, 132]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "line",
              direction: "horizontal",
              pos: [210, 210],
              length: 70,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [165, 210],
                  label: "1841D1",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [152, 202]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [263.5, 235],
              code: "1841",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [210, 250],
                  length: 70,
                  children: [
                    {
                      name: "switch",
                      direction: "right",
                      pos: [165, 250],
                      label: "1841D2",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "right",
                          pos: [152, 242]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [255, 282],
                  label: "184",
                  code: "184",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [263.5, 353.5],
                      label: "1843",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [120, 372],
                          length: 258,
                          children: [
                            {
                              name: "line",
                              pos: [136.5, 382],
                              length: 20,
                              direction: "vertical",
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [139, 385],
                                  length: 70,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [190, 412],
                                      label: "1845D",
                                      state: 0,
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [198, 424]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [120, 428],
                                      label: "1845",
                                      state: 1,
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [118, 447],
                                          length: 40,
                                          children: [
                                            {
                                              name: "IPT",
                                              direction: "top",
                                              pos: [113, 480],
                                              radius: 0.15,
                                              label: "IIPT"
                                            },
                                            {
                                              name: "capacitor",
                                              direction: "bottom",
                                              pos: [130, 478],
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "top",
                                                  pos: [146, 515]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "lineSwitch",
                              direction: "right",
                              pos: [377, 372],
                              label: "1802",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [392, 372],
                                  length: 54,
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "horizontal",
                                      pos: [424, 376],
                                      label: "180",
                                      noLine: true,
                                      state: 0,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [477, 372],
                                          length: 70,
                                          linkTo: ["linkTest01"]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [300, 408],
                              label: "1823",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [291.5, 455],
                                  label: "182",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [300, 526],
                                      label: "1821",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [318, 557],
                                          label: "2#"
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [308, 567],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "horizontal",
                                              pos: [208, 565],
                                              label: "602",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [148, 565],
                                                  label: "6021",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "vertical",
                                                      pos: [140, 535],
                                                      length: 100,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [150, 605],
                                                          length: 270,
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              direction: "horizontal",
                                                              pos: [420, 605],
                                                              label: "6002",
                                                              children: [
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  direction: "horizontal",
                                                                  pos: [470, 605],
                                                                  label: "600",
                                                                  state: 0,
                                                                  linkTo: ["马兰-右-蓝-6011"]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [324, 567],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [322, 576],
                                              length: 50,
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "vertical",
                                                  pos: [292, 650],
                                                  label: "5021",
                                                  children: [
                                                    {
                                                      name: "directionDoubleResistor",
                                                      direction: "vertical",
                                                      pos: [277, 724],
                                                      label: "502",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [50, 768],
                                                          length: 440,
                                                          children: [
                                                            {
                                                              name: "coilDouble",
                                                              direction: "horizontal",
                                                              pos: [390, 768],
                                                              label: "5002",
                                                              children: [
                                                                {
                                                                  name: "coilDoubleEmpty",
                                                                  direction: "horizontal",
                                                                  pos: [480, 768],
                                                                  label: "500",
                                                                  state: 0,
                                                                  code: "马兰站-500"
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [40, 823],
                                                              labelDirection: "vertical",
                                                              label: "506南二2#",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [65, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [48, 982],
                                                                      state: 0,
                                                                      label: "506D",
                                                                      lpos: [20, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [55, 992]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [85, 868],
                                                                  length: 450,
                                                                  linkTo: ["南二站-左-534入口"]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [110, 823],
                                                              label: "510北二2#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [135, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [118, 982],
                                                                      state: 0,
                                                                      label: "510D",
                                                                      lpos: [90, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [125, 992]
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [155, 868],
                                                                  length: 235,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [155, 1100],
                                                                      length: 240,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [395, 1100],
                                                                          length: 700,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [395, 1800],
                                                                              length: 540,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "vertical",
                                                                                  pos: [935, 1800],
                                                                                  length: 233,
                                                                                  label: "北二2#进线",
                                                                                  labelDirection: "vertical",
                                                                                  linkTo: ["北二站-左-524"]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [170, 823],
                                                              label: "514南一2#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [195, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [178, 982],
                                                                      state: 0,
                                                                      label: "514D",
                                                                      lpos: [154, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [185, 992]
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [215, 868],
                                                                  length: 220,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [215, 1085],
                                                                      length: 233,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [445, 1085],
                                                                          length: 233,
                                                                          linkTo: ["南一站-左-424入口"]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [230, 823],
                                                              label: "516煤气化2#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [255, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [238, 982],
                                                                      state: 0,
                                                                      label: "516D",
                                                                      lpos: [220, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [245, 992]
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [275, 868],
                                                                  length: 205,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [275, 1073],
                                                                      length: 853,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [1125, 1073],
                                                                          length: 187,
                                                                          linkTo: ["煤气化-右-3540入口"]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [290, 823],
                                                              label: "518马北线",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [335, 868],
                                                                  length: 195,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [315, 955],
                                                                      length: 20,
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          direction: "top",
                                                                          pos: [298, 982],
                                                                          state: 0,
                                                                          label: "518D",
                                                                          lpos: [278, 1036],
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              direction: "top",
                                                                              pos: [305, 992]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [335, 1063],
                                                                      length: 1330,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [1665, 1063],
                                                                          length: 854,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [1665, 1917],
                                                                              length: 240,
                                                                              linkTo: ["北三站-左-394"]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      code: "马兰-1#",
      color: 0,
      stationName: "马兰110kV站",
      powerFrom: ["马兰1#"],
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [638, 110],
          labelDirection: "vertical",
          label: "马兰1#\n引自古交220kV站 154",
          lpos: [638, 30],
          length: 100,
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [640, 170],
              length: 90,
              children: [
                {
                  name: "switch",
                  direction: "bottom",
                  pos: [642, 140],
                  label: "1837D",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "bottom",
                      pos: [650, 110]
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "right",
                  pos: [730, 170],
                  label: "1837",
                  state: 1,
                  children: [
                    {
                      name: "IPT",
                      direction: "left",
                      pos: [808, 167]
                    },
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [775, 140],
                      length: 30,
                      children: [
                        {
                          name: "capacitor",
                          direction: "right",
                          pos: [780, 123],
                          children: [
                            {
                              name: "entry",
                              direction: "left",
                              pos: [840, 132]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "line",
              direction: "horizontal",
              pos: [568, 200],
              length: 70,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [523, 200],
                  label: "1831D1",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [510, 192]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [621.5, 235],
              label: "1831",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [568, 250],
                  length: 70,
                  children: [
                    {
                      name: "switch",
                      direction: "right",
                      pos: [523, 250],
                      label: "1831D2",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "right",
                          pos: [520, 242]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [613, 282],
                  label: "183",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [621.5, 353.5],
                      label: "1833",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [558, 372],
                          length: 160,
                          children: [
                            {
                              name: "lineSwitch",
                              direction: "right",
                              pos: [544, 372],
                              label: "1801",
                              state: 1,
                              code: "1801",
                              linkId: "1801",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [537, 372],
                                  length: 10,
                                  code: "linkTest01"
                                }
                              ]
                            },
                            {
                              name: "line",
                              pos: [686.5, 382],
                              length: 20,
                              direction: "vertical",
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [689, 385],
                                  length: 80,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [750, 412],
                                      label: "1835D",
                                      state: 0,
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [758, 424]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [670, 428],
                                      label: "1835",
                                      state: 1,
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [668, 447],
                                          length: 40,
                                          children: [
                                            {
                                              name: "IPT",
                                              direction: "top",
                                              pos: [663, 480],
                                              radius: 0.15,
                                              label: "IIPT"
                                            },
                                            {
                                              name: "capacitor",
                                              direction: "bottom",
                                              pos: [680, 478],
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "top",
                                                  pos: [696, 515]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [578, 408],
                              label: "1813",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [569.5, 455],
                                  label: "181",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [578, 526],
                                      label: "1811",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [596, 557],
                                          label: "1#",
                                          labelDirection: 'left'
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [606, 567],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "horizontal",
                                              pos: [616, 565],
                                              label: "601",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [705, 565],
                                                  label: "6011",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "vertical",
                                                      pos: [765, 535],
                                                      length: 100,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [560, 605],
                                                          length: 205,
                                                          code: "马兰-右-蓝-6011"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [588, 567],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [586, 576],
                                              length: 50,
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "vertical",
                                                  pos: [556, 650],
                                                  label: "5011",
                                                  children: [
                                                    {
                                                      name: "directionDoubleResistor",
                                                      direction: "vertical",
                                                      pos: [541, 724],
                                                      label: "501",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [530, 768],
                                                          length: 420,
                                                          linkTo: ["马兰站-500"],
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [600, 823],
                                                              label: "505南二1#",
                                                              state: 1,
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [625, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [608, 982],
                                                                      state: 0,
                                                                      label: "505D",
                                                                      lpos: [580, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [615, 992]
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [645, 868],
                                                                  length: 185,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [320, 1050],
                                                                      length: 325,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [320, 1050],
                                                                          length: 270,
                                                                          linkTo: ["南二站-右-533入口"]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [675, 823],
                                                              label: "513南一1#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [700, 955],
                                                                  length: 20,
                                                                  linkId: "6-2-1",
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [683, 982],
                                                                      state: 0,
                                                                      label: "513D",
                                                                      lpos: [655, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [690, 992],
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [720, 868],
                                                                  length: 455,
                                                                  linkTo: ["南一站-右-423入口"]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [740, 823],
                                                              label: "509北二1#",
                                                              state: 1,
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [765, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [748, 982],
                                                                      state: 0,
                                                                      label: "509D",
                                                                      lpos: [720, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [755, 992],
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [785, 868],
                                                                  length: 185,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [785, 1053],
                                                                      length: 107,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [890, 1053],
                                                                          length: 712,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [890, 1762],
                                                                              length: 348,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "vertical",
                                                                                  pos: [1235, 1762],
                                                                                  length: 263,
                                                                                  label: "北二1#进线",
                                                                                  labelDirection: "vertical",
                                                                                  linkTo: ["北二站-右-523"]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [800, 823],
                                                              label: "515煤气化1#",
                                                              state: 1,
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [825, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [808, 982],
                                                                      state: 0,
                                                                      label: "515D",
                                                                      lpos: [790, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [815, 992],
                                                                        }
                                                                      ]
                                                                    },
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [845, 867],
                                                                  length: 180,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [845, 1045],
                                                                      length: 90,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [935, 1045],
                                                                          length: 227,
                                                                          linkTo: ["煤气化-左-3530入口"]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [870, 823],
                                                              label: "517屯马联络",
                                                              state: 0,
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [915, 868],
                                                                  length: 173,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [895, 955],
                                                                      length: 20,
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          direction: "top",
                                                                          pos: [878, 982],
                                                                          state: 0,
                                                                          label: "517D",
                                                                          lpos: [855, 1036],
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              direction: "top",
                                                                              pos: [885, 992]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [915, 1040],
                                                                      length: 250,
                                                                      linkTo: ["414-屯马联络"]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      label: "南二",
      stationName: "南二站",
      lpos: [170, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [0, 210],
          length: 0,
          code: "南二站-左-534入口"
        },
        {
          name: "line",
          direction: "vertical",
          pos: [40, 1362],
          length: 0,
          label: "南二2#进线",
          lpos: [60, 1162],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [40, 1362],
          label: "534",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [70, 1406],
              length: 90,
              enterCode: "534入口",
              enterLinkId: "530-母联-left",
              children: [
                {
                  name: "coilDoubleEmpty",
                  direction: "horizontal",
                  pos: [160, 1406],
                  label: "530",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [490, 1406],
                      length: 0,
                      linkTo: ["南二站-右-5301"]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [40, 1460],
                  label: "536",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [85, 1505],
                      length: 520,
                      linkId: "536麻家口2#",
                      label: "麻家口2#",
                      labelDirection: "vertical",
                      linkTo: ["麻家口-左-574"]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [105, 1460],
                  label: "532",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [152, 1512],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [152, 1520],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [105, 1570],
                              label: "672",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [100, 1610],
                                  length: 120,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [150, 1610],
                                      label: "6701",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [215, 1610],
                                          label: "670",
                                          state: 0,
                                          linkTo: ["南二站-左-670"]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      stationName: "南二站",
      code: "南二站-右-533入口",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [275, 1365],
          length: 0,
          label: "南二1#进线",
          lpos: [300, 1162],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [275, 1365],
          label: "533",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [210, 1406],
              length: 130,
              children: [
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [225, 1406],
                  label: "5301",
                  code: "南二站-右-5301"
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [225, 1460],
                  label: "531",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [272, 1512],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [272, 1520],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [225, 1570],
                              label: "671",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [255, 1610],
                                  length: 60,
                                  code: "南二站-左-670"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [290, 1460],
                  label: "537",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [335, 1505],
                      length: 400,
                      label: "常安1#",
                      labelDirection: "vertical",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [335, 1905],
                          length: 290,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [625, 1905],
                              length: 120,
                              linkTo: ["常安站-右-323"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "南一站-左-424入口",
      label: "南一",
      stationName: "南一站",
      lpos: [540, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [400, 1362],
          length: 0,
          label: "南一2#进线",
          lpos: [420, 1162],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [400, 1362],
          label: "424",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [430, 1406],
              length: 98,
              children: [
                {
                  name: "coilDoubleEmpty",
                  direction: "horizontal",
                  pos: [525, 1406],
                  label: "420",
                  children: [
                    {
                      name: "coilDouble",
                      direction: "horizontal",
                      pos: [595, 1406],
                      label: "4200",
                      code: "南一站-右-4200"
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [390, 1460],
                  label: "426",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [435, 1505],
                      length: 460,
                      label: "常安2#",
                      labelDirection: "vertical",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [385, 1965],
                          length: 53,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [385, 1965],
                              length: 60,
                              linkTo: ["常安站-左-324"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [460, 1460],
                  label: "422",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [507, 1512],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [507, 1520],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [460, 1570],
                              label: "636",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [460, 1610],
                                  length: 130,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [510, 1610],
                                      label: "6302",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [590, 1610],
                                          label: "630",
                                          state: 0,
                                          linkTo: ["南一站-右-633"]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "南一站-右-423入口",
      stationName: "南一站",
      children: [
        {
          name: "line",
          pos: [600, 1362],
          length: 0,
          label: "南一1#进线",
          lpos: [740, 1140],
          labelDirection: "vertical",
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [675, 1363],
              label: "423",
              state: 1,
              labelDirection: "vertical",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [575, 1406],
                  length: 260,
                  linkTo: ["南一站-右-4200"],
                  children: [
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [605, 1460],
                      label: "421",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [652, 1512],
                          label: "1#",
                          labelDirection: 'left',
                          children: [
                            {
                              name: "SZPoint",
                              pos: [652, 1520],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [605, 1570],
                                  label: "633",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [640, 1610],
                                      length: 55,
                                      code: "南一站-右-633"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [680, 1460],
                      label: "425",
                      state: 1,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [725, 1505],
                          length: 350,
                          label: "麻家口1#",
                          labelDirection: "vertical",
                          children: [
                            {
                              name: "line",
                              direction: "hovertical",
                              pos: [285, 1855],
                              length: 443,
                              children: [
                                {
                                  name: "line",
                                  direction: "vertical",
                                  pos: [285, 1855],
                                  length: 170,
                                  linkTo: ["麻家口-右-573"]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [760, 1460],
                      label: "427",
                      state: 1,
                      children: [
                        {
                          name: "switch",
                          direction: "right",
                          pos: [805, 1505],
                          label: "427D",
                          state: 1,
                          children: [
                            {
                              name: "entry",
                              direction: "left",
                              pos: [843, 1497]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [805, 1505],
                          length: 533,
                          label: "瓦斯发电",
                          labelDirection: "vertical",
                          linkTo: ["马兰瓦斯发电厂"]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "煤气化-左-3530入口",
      stationName: "煤气化一厂",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [60, 210],
          label: "煤气化",
          lpos: [990, 1222],
          lsize: 38,
          length: 0,
          children: [
            {
              name: "line",
              direction: "vertical",
              label: "一厂站",
              lsize: 38,
              lpos: [990, 1260],
              length: 0
            },
            {
              name: "line",
              pos: [905, 1290],
              length: 0,
              label: "煤气化1#进线",
              lpos: [910, 1162],
              labelDirection: "vertical"
            },
            {
              name: "directionDouble",
              direction: "vertical",
              pos: [905, 1290],
              label: "3530",
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [890, 1363],
                  label: "353",
                  state: 1,
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [920, 1406],
                      length: 140,
                      enterCode: "3530入口",
                      enterLinkId: "350-母联-left",
                      children: [
                        {
                          name: "coilDouble",
                          direction: "horizontal",
                          pos: [990, 1406],
                          label: "3502",
                          children: [
                            {
                              name: "coilDoubleEmpty",
                              direction: "horizontal",
                              pos: [1060, 1406],
                              label: "350",
                              code: "煤气化-350"
                            }
                          ]
                        },
                        {
                          name: "directionDoubleResistor",
                          direction: "vertical",
                          pos: [905, 1454],
                          label: "351",
                          state: 1,
                          children: [
                            {
                              name: "SZPoint",
                              pos: [952, 1506],
                              label: "1#",
                              children: [
                                {
                                  name: "SZPoint",
                                  pos: [952, 1513],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [905, 1566],
                                      label: "701",
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [920, 1612],
                                          length: 60,
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [980, 1612],
                                              label: "700",
                                              children: [
                                                {
                                                  name: "coilDouble",
                                                  direction: "horizontal",
                                                  pos: [1060, 1612],
                                                  label: "7002",
                                                  code: "煤气化-右-7002"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "煤气化-右-3540入口",
      stationName: "煤气化一厂站",
      children: [
        {
          name: "line",
          pos: [1095, 1290],
          length: 0,
          label: "煤气化2#进线",
          lpos: [1150, 1062],
          labelDirection: "vertical"
        },
        {
          name: "directionDouble",
          direction: "vertical",
          pos: [1095, 1290],
          label: "3540",
          lpos: [1130, 1315],
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [1080, 1363],
              label: "354",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [1110, 1406],
                  length: 40,
                  linkTo: ["煤气化-350"],
                  children: [
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [1075, 1454],
                      label: "352",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1122, 1506],
                          label: "2#",
                          labelDirection: 'left',
                          children: [
                            {
                              name: "SZPoint",
                              pos: [1122, 1513],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [1075, 1566],
                                  label: "702",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1030, 1612],
                                      length: 120,
                                      linkId: "3",
                                      linkTo: ["煤气化-右-7002"]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "麻家口-左-574",
      label: "麻家口",
      stationName: "麻家口站",
      lsize: 38,
      lpos: [130, 2040],
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [100, 2068],
          length: 0,
          label: "麻家口2#进线",
          lpos: [55, 1870],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [40, 2068],
          label: "574",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [65, 2110],
              length: 130,
              linkTo: ["麻家口站-5701"],
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [50, 2165],
                  label: "572",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [96, 2216],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [96, 2224],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [49, 2276],
                              state: 1,
                              label: "602",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [65, 2320],
                                  length: 130,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [125, 2320],
                                      label: "6002",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [195, 2320],
                                          label: "600",
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [225, 2320],
                                              length: 0,
                                              linkTo: ["麻家口-右-601"]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "麻家口-右-573",
      stationName: "麻家口站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [100, 2068],
          length: 0,
          label: "麻家\n口1#\n进线",
          lpos: [245, 1870],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [240, 2068],
          label: "573",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [245, 2110],
              length: 75,
              children: [
                {
                  name: "coilDoubleEmpty",
                  direction: "horizontal",
                  pos: [195, 2110],
                  label: "570",
                  children: [
                    {
                      name: "coilDouble",
                      direction: "horizontal",
                      pos: [125, 2110],
                      label: "5701",
                      code: "麻家口站-5701"
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [240, 2165],
                  label: "571",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [286, 2216],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [286, 2224],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [239, 2276],
                              label: "601",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [245, 2320],
                                  length: 85,
                                  code: "麻家口-右-601"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "常安站-左-324",
      label: "常安",
      stationName: "常安站",
      lsize: 38,
      lpos: [480, 2040],
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [0, 210],
          length: 0,
          label: "常安\n2#\n进线",
          lpos: [350, 1930],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [340, 2068],
          label: "324",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [365, 2110],
              length: 135,
              children: [
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [435, 2110],
                  label: "3202",
                  children: [
                    {
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [500, 2110],
                      label: "320",
                      code: "常安站-320"
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [350, 2165],
                  label: "322",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [396, 2216],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [396, 2228],
                          color: 2,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [394, 2235],
                              length: 17,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [369, 2275],
                                  label: "622",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [365, 2320],
                                      length: 160,
                                      children: [
                                        {
                                          name: "coilDouble",
                                          direction: "horizontal",
                                          pos: [435, 2320],
                                          label: "6002",
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [525, 2320],
                                              label: "600",
                                              code: "常安站-6002"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "常安站-右-323",
      stationName: "常安",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [180, 2068],
          length: 0,
          label: "常安\n1#\n进线",
          lpos: [655, 1920],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [580, 2068],
          label: "323",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [550, 2110],
              length: 100,
              linkTo: ["常安站-320"],
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [580, 2165],
                  label: "321",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [626, 2216],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [626, 2228],
                          color: 2,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [624, 2235],
                              length: 17,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [599, 2275],
                                  label: "621",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [575, 2320],
                                      length: 80,
                                      linkTo: ["常安站-6002"]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "马兰瓦斯发电厂",
      label: "马兰瓦斯发电厂",
      lsize: 38,
      lpos: [755, 2055],
      labelDirection: "vertical",
      stationName: "马兰瓦斯发电厂",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [775, 1625],
          length: 0,
          label: "瓦斯发电出线",
          labelDirection: "vertical",
          lpos: [785, 1815],
          lsize: 35,
          children: [
            {
              name: "resistor",
              direction: "vertical",
              pos: [780, 2063],
              label: "330",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [775, 2108],
                  length: 60,
                  children: [
                    {
                      name: "resistor",
                      direction: "vertical",
                      pos: [780, 2146],
                      label: "331",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [807, 2199],
                          children: [
                            {
                              name: "SZPoint",
                              pos: [807, 2210],
                              // label: "S11-10000",
                              color: 2,
                              children: [
                                {
                                  name: "line",
                                  pos: [805, 2218],
                                  direction: "vertical",
                                  length: 17,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [760, 2280],
                                      label: "2HA01",
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [745, 2323],
                                          length: 120
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "北二站-左-524",
      label: "北二",
      stationName: "北二站",
      lsize: 38,
      lpos: [1060, 2040],
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [100, 210],
          length: 0,
          label: "北二\n2#\n进线",
          lpos: [900, 1920],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [890, 2068],
          label: "524",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [915, 2108],
              length: 230,
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [960, 2068],
                  label: "528",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [1005, 1988],
                      length: 40,
                      label: "北义线",
                      lpos: [1010, 1980],
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [1005, 1988],
                          length: 400,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [1404, 1988],
                              length: 30,
                              linkTo: ["义里站-左-364"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [1070, 2108],
                  label: "520-0",
                  children: [
                    {
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [1145, 2108],
                      label: "520",
                      code: "北二站-520"
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [900, 2163],
                  label: "522",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [946, 2214],
                      label: "2#",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [946, 2224],
                          color: "2",
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [899, 2276],
                              label: "652",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [915, 2320],
                                  length: 100,
                                  linkTo: ["北二站-650"]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      color: 1,
      code: "北二站-右-523",
      stationName: "北二站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [280, 2068],
          length: 0,
          label: "北二\n1#\n进线",
          lpos: [1265, 1820],
          labelDirection: "vertical"
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [1190, 2068],
          label: "523",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [1195, 2108],
              length: 70,
              linkTo: ["北二站-520"],
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1180, 2163],
                  label: "521",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [1226, 2214],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1226, 2224],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [1179, 2276],
                              label: "651",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1065, 2320],
                                  length: 190,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [1140, 2320],
                                      label: "6501",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [1015, 2320],
                                          label: "650",
                                          code: "北二站-650"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
