var tunlan = {
  name: "屯兰",
  code: "屯兰",
  v: "110KV",
  label: "屯兰",
  lpos: [1960, 210],
  lsize: 40,
  powerToChild: false,
  children: [
    {
      code: "屯兰-2#",
      color: 0,
      powerFrom: ["屯兰2#"],
      stationName: "屯兰110kV站",
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [1730, 110],
          length: 100,
          label: "屯兰2#\n引自邢家社220kV站 149",
          labelDirection: "vertical",
          lpos: [1730, 30],
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [1610, 170],
              length: 120,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [1565, 170],
                  label: "1361P",
                  state: 1,
                  children: [
                    {
                      name: "IPT",
                      direction: "right",
                      pos: [1523, 167]
                    },
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [1565, 140],
                      length: 30,
                      children: [
                        {
                          name: "capacitor",
                          direction: "left",
                          pos: [1495, 140],
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [1482, 132]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "bottom",
                  pos: [1602, 140],
                  code: "1361PD",
                  label: "1361PD",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "bottom",
                      pos: [1610, 110]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [1713.5, 235],
              label: "1361",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [1660, 260],
                  length: 70,
                  children: [
                    {
                      name: "switch",
                      direction: "right",
                      pos: [1615, 260],
                      label: "1361D2",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "right",
                          pos: [1602, 252]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [1705, 282],
                  label: "136",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [1713.5, 353.5],
                      label: "1363",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [1650, 372],
                          length: 185,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [1656.5, 380],
                              length: 22,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [1640, 428],
                                  label: "IIPT",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [1638, 447],
                                      length: 40,
                                      children: [
                                        {
                                          name: "IPT",
                                          direction: "top",
                                          pos: [1633, 480],
                                          code: "IIPT"
                                        },
                                        {
                                          name: "capacitor",
                                          direction: "bottom",
                                          pos: [1650, 478],
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [1666, 515],
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
                                  pos: [1659, 385],
                                  length: 60,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [1700, 412],
                                      state: 0,
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [1708, 424],
                                          label: "II母地刀2MD",
                                          labelDirection: "vertical"
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
                              pos: [1750, 408],
                              label: "1323",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [1741.5, 455],
                                  code: "132",
                                  label: "132",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [1750, 526],
                                      label: "1321",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [1768, 557],
                                          label: '2#',
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [1758, 567],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDouble",
                                              direction: "horizontal",
                                              pos: [1688, 565],
                                              label: "6021",
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "horizontal",
                                                  pos: [1598, 565],
                                                  label: "602",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "vertical",
                                                      pos: [1590, 535],
                                                      length: 100,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "horizontal",
                                                          pos: [1500, 565],
                                                          label: "606屯屯联络",
                                                          lpos: [1400, 550],
                                                          state: 0,
                                                          children: [
                                                            {
                                                              name: 'directionSingle',
                                                              direction: "right",
                                                              pos: [1430, 565],
                                                              length: 50,
                                                              children: [
                                                                {
                                                                  name: 'line',
                                                                  pos: [1450, 565],
                                                                  length: 50,
                                                                  code: "屯兰-606屯屯联络",
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [1600, 605],
                                                          length: 20,
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              direction: "horizontal",
                                                              pos: [1620, 605],
                                                              label: "6233",
                                                              children: [
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  direction: "horizontal",
                                                                  pos: [1670, 605],
                                                                  label: "623",
                                                                  state: 1,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [1760, 605],
                                                                      length: 505,
                                                                      code: "屯兰-623"
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
                                          name: "SSZPoint",
                                          pos: [1774, 567],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [1772, 576],
                                              length: 103,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "vertical",
                                                  pos: [1727, 724],
                                                  label: "402",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [1500, 768],
                                                      length: 450,
                                                      children: [
                                                        {
                                                          name: "coilDouble",
                                                          direction: "horizontal",
                                                          pos: [1880, 768],
                                                          label: "4203",
                                                          children: [
                                                            {
                                                              name: "coilDoubleEmpty",
                                                              direction: "horizontal",
                                                              pos: [1950, 768],
                                                              label: "420",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "lineBold",
                                                                  direction: "horizontal",
                                                                  pos: [2000, 768],
                                                                  length: 30,
                                                                  linkTo: ["屯兰-右-410"],
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      direction: "horizontal",
                                                                      pos: [2000, 768],
                                                                      length: 0,
                                                                      linkTo: ["屯兰-403"]
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
                                                          pos: [1500, 823],
                                                          label: "414屯马联络",
                                                          labelDirection: "vertical",
                                                          state: 0,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1545, 868],
                                                              length: 173,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1525, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [1505, 982],
                                                                      state: 0,
                                                                      label: "414D",
                                                                      lpos: [1483, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [1515, 992]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1165, 1040],
                                                                  length: 383,
                                                                  code: "414-屯马联络"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [1570, 823],
                                                          label: "406屯镇2#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1615, 868],
                                                              length: 225,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1260, 1093],
                                                                  length: 358,
                                                                  code: "406-屯镇2#"
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [1595, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [1578, 982],
                                                                  state: 0,
                                                                  label: "406D",
                                                                  lpos: [1547, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [1588, 992]
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
                                                          pos: [1645, 823],
                                                          label: "422屯白2#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [1670, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [1653, 982],
                                                                  state: 0,
                                                                  label: "422D",
                                                                  lpos: [1619, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [1663, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1690, 868],
                                                              length: 225,
                                                              linkId: "5-2",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1690, 1093],
                                                                  length: 385,
                                                                  linkTo: ["白草塔站-436"]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [1710, 823],
                                                          label: "408屯屯2#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [1735, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [1718, 982],
                                                                  state: 0,
                                                                  label: "408D",
                                                                  lpos: [1690, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [1725, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1755, 868],
                                                              length: 450,
                                                              linkTo: ["屯兰工厂站-476"]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [1770, 823],
                                                          label: "416屯东2#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1815, 868],
                                                              length: 205,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1815, 1073],
                                                                  length: 840,
                                                                  linkTo: ["东曲广场站-454"]
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1795, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [1778, 982],
                                                                      state: 0,
                                                                      label: "416D",
                                                                      lpos: [1755, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [1785, 992]
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
                                                          pos: [1830, 823],
                                                          label: "418屯麻2#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [1875, 868],
                                                              length: 215,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1875, 1083],
                                                                  length: 510,
                                                                  code: "418-屯麻"
                                                                },
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1855, 955],
                                                                  length: 20,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      direction: "top",
                                                                      pos: [1838, 982],
                                                                      state: 0,
                                                                      label: "416D",
                                                                      lpos: [1817, 1036],
                                                                      children: [
                                                                        {
                                                                          name: "entry",
                                                                          direction: "top",
                                                                          pos: [1845, 992],
                                                                          linkId: "7-1-2"
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
                              name: "lineSwitch",
                              direction: "right",
                              pos: [1835, 372],
                              label: "1402",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1851, 372],
                                  length: 40,
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "horizontal",
                                      pos: [1871, 376],
                                      label: "140",
                                      length: 30,
                                      noLine: true,
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [1924, 372],
                                          length: 50,
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              direction: "right",
                                              pos: [1973, 372],
                                              label: "1403",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [1988, 372],
                                                  length: 80,
                                                  children: [
                                                    {
                                                      name: "switch",
                                                      direction: "bottom",
                                                      pos: [2010, 390],
                                                      label: "1333",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "resistor",
                                                          direction: "vertical",
                                                          pos: [2001.5, 426],
                                                          label: "133",
                                                          state: 0,
                                                          noLine: true,
                                                          children: [
                                                            {
                                                              name: "switch",
                                                              direction: "bottom",
                                                              pos: [2010, 465],
                                                              label: "1331",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "SSZPoint",
                                                                  pos: [2028, 504],
                                                                  label: '3#',
                                                                },
                                                                {
                                                                  name: "SSZPoint",
                                                                  pos: [2020, 517],
                                                                  color: 1,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [2018, 526],
                                                                      length: 155,
                                                                      children: [
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          direction: "vertical",
                                                                          pos: [1973, 724],
                                                                          label: "403",
                                                                          state: 0,
                                                                          code: "屯兰-403"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "SSZPoint",
                                                                  pos: [2035, 515],
                                                                  color: 2,
                                                                  children: [
                                                                    {
                                                                      name: "directionDoubleResistor",
                                                                      direction: "vertical",
                                                                      pos: [1996, 564],
                                                                      label: "603",
                                                                      length: 25,
                                                                      linkTo: ["屯兰-623"]
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
                                                      pos: [2068, 372],
                                                      label: "1303",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [2083, 372],
                                                          length: 65,
                                                          children: [
                                                            {
                                                              name: "resistor",
                                                              direction: "horizontal",
                                                              pos: [2127, 376],
                                                              label: "130",
                                                              length: 30,
                                                              noLine: true,
                                                              children: [
                                                                {
                                                                  name: "lineBold",
                                                                  direction: "horizontal",
                                                                  pos: [2180, 372],
                                                                  length: 45,
                                                                  children: [
                                                                    {
                                                                      name: "lineSwitch",
                                                                      direction: "right",
                                                                      pos: [2223, 372],
                                                                      label: "1301",
                                                                      state: 1,
                                                                      linkTo: ["屯兰-1353-bold"]
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
      code: "屯兰-1#",
      color: 0,
      powerFrom: ["屯兰1#"],
      stationName: "屯兰110kV站",
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [2288, 110],
          length: 110,
          labelDirection: "vertical",
          label: "屯兰1#\n引自古交220kV站 156",
          lpos: [2288, 30],
          isPowerToParent: false,
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [2290, 170],
              length: 90,
              linkId: "3",
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [2380, 170],
                  label: "1351P",
                  state: 1,
                  children: [
                    {
                      name: "IPT",
                      direction: "left",
                      pos: [2458, 167]
                    },
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [2425, 140],
                      length: 30,
                      linkId: "3-2",
                      children: [
                        {
                          name: "capacitor",
                          direction: "right",
                          pos: [2430, 123],
                          children: [
                            {
                              name: "entry",
                              direction: "left",
                              pos: [2490, 132]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "bottom",
                  pos: [2292, 140],
                  label: "1351PD",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "bottom",
                      pos: [2300, 110],
                      linkId: "1"
                    }
                  ]
                }
              ]
            },
            {
              name: "line",
              direction: "horizontal",
              pos: [2239, 200],
              length: 50,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [2193, 200],
                  label: "1351D1",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2180, 192]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [2271.5, 235],
              label: "1351",
              state: 1,
              linkId: "5",
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2239, 250],
                  length: 50,
                  children: [
                    {
                      name: "switch",
                      direction: "right",
                      pos: [2193, 250],
                      label: "1351D2",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "right",
                          pos: [2180, 242]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [2263, 282],
                  label: "135",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [2271.5, 353.5],
                      label: "1353",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [2238, 372],
                          length: 160,
                          code: "屯兰-1353-bold",
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2350, 408],
                              state: 1,
                              label: "IPT",
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [2348, 427],
                                  length: 40,
                                  linkId: "8-2",
                                  children: [
                                    {
                                      name: "IPT",
                                      direction: "top",
                                      pos: [2343, 460],
                                      radius: 0.15,
                                      code: "IPT"
                                    },
                                    {
                                      name: "capacitor",
                                      direction: "bottom",
                                      pos: [2360, 458],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [2376, 495]
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
                              pos: [2369, 385],
                              length: 70,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [2420, 412],
                                  label: "I母地刀1MD",
                                  state: 0,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [2428, 424],
                                      labelDirection: "vertical"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2228, 408],
                              label: "1813",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2219.5, 455],
                                  label: "131",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [2228, 526],
                                      label: "1311",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [2246, 557],
                                          label: '1#',
                                          labelDirection: 'left'
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [2256, 567],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDouble",
                                              direction: "horizontal",
                                              pos: [2266, 565],
                                              label: "6011",
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "horizontal",
                                                  pos: [2325, 565],
                                                  label: "601",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "vertical",
                                                      pos: [2415, 535],
                                                      length: 100,
                                                      children: [
                                                        {
                                                          name: "directionDouble",
                                                          direction: "horizontal",
                                                          pos: [2355, 605],
                                                          label: "6133",
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "horizontal",
                                                              pos: [2265, 605],
                                                              label: "613",
                                                              state: 0,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [300, 60],
                                                                  length: 0,
                                                                  linkTo: ["屯兰-623"]
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
                                          pos: [2238, 567],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [2236, 576],
                                              length: 120,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "vertical",
                                                  pos: [2191, 724],
                                                  label: "401",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [2080, 768],
                                                      length: 500,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [2120, 823],
                                                          code: "405 屯镇1#",
                                                          label: "405屯镇1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2145, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2128, 982],
                                                                  state: 0,
                                                                  label: "405D",
                                                                  lpos: [2100, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2135, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2165, 868],
                                                              length: 268,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  length: 665,
                                                                  pos: [1503, 1133],
                                                                  code: "405-屯镇1#"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [2190, 823],
                                                          label: "421屯白1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2215, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2198, 982],
                                                                  state: 0,
                                                                  label: "421D",
                                                                  lpos: [2168, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2205, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2235, 868],
                                                              length: 450,
                                                              label: "屯白1#进线",
                                                              labelDirection: "vertical",
                                                              linkTo: ["白草塔站-435"]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [2260, 823],
                                                          label: "407屯屯1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2285, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2268, 982],
                                                                  state: 0,
                                                                  label: "407D",
                                                                  lpos: [2235, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2275, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2305, 868],
                                                              length: 300,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [1925, 1165],
                                                                  length: 380,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [1925, 1165],
                                                                      length: 155,
                                                                      linkTo: ["屯兰工厂站-475"]
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
                                                          pos: [2320, 823],
                                                          label: "413屯八1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2345, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2328, 982],
                                                                  state: 0,
                                                                  label: "413D",
                                                                  lpos: [2305, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2335, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2365, 868],
                                                              length: 927,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [2365, 1794],
                                                                  length: 60,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [2425, 1794],
                                                                      length: 225,
                                                                      linkTo: ["八字山站-493"]
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
                                                          pos: [2400, 823],
                                                          label: "415屯东1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2425, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2408, 982],
                                                                  state: 0,
                                                                  label: "415D",
                                                                  lpos: [2388, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2415, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2445, 868],
                                                              length: 195,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "horizontal",
                                                                  pos: [2445, 1060],
                                                                  length: 523,
                                                                  linkTo: ["东曲广场站-453"]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [2490, 823],
                                                          label: "417屯麻1#",
                                                          labelDirection: "vertical",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [2515, 955],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "switch",
                                                                  direction: "top",
                                                                  pos: [2498, 982],
                                                                  state: 0,
                                                                  label: "415D",
                                                                  lpos: [2475, 1036],
                                                                  children: [
                                                                    {
                                                                      name: "entry",
                                                                      direction: "top",
                                                                      pos: [2505, 992]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [2535, 868],
                                                              length: 305,
                                                              code: "417-屯麻"
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "coilDouble",
                                                          direction: "horizontal",
                                                          pos: [2090, 768],
                                                          label: "4103",
                                                          children: [
                                                            {
                                                              name: "coilDoubleEmpty",
                                                              direction: "horizontal",
                                                              pos: [2030, 768],
                                                              label: "410",
                                                              code: "屯兰-右-410"
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
      label: "镇城底",
      stationName: "镇城底站",
      lpos: [1348, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [1258, 1093],
          length: 121,
          label: "屯镇2#进线",
          labelDirection: "vertical",
          lpos: [1235, 1093],
          linkTo: ["406-屯镇2#"],
          children: [
            {
              name: "switch",
              direction: "right",
              pos: [1258, 1194],
              state: 1,
              label: "4441D",
              children: [
                {
                  name: "entry",
                  direction: "left",
                  pos: [1297, 1185]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [1241, 1243],
              state: 1,
              label: "4441",
              children: [
                {
                  name: "switch",
                  direction: "top",
                  pos: [1241, 1285],
                  state: 1,
                  label: "4442",
                  children: [
                    {
                      name: "resistor",
                      direction: "vertical",
                      pos: [1232, 1325],
                      label: "444",
                      state: 1,
                      children: [
                        {
                          name: "switch",
                          direction: "top",
                          pos: [1241, 1387],
                          state: 1,
                          label: "4443",
                          lpos: [1261, 1376],
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [1231, 1406],
                              length: 90,
                              children: [
                                {
                                  name: "lineSwitch",
                                  direction: "right",
                                  pos: [1320, 1405],
                                  label: "4402",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1334, 1406],
                                      length: 50,
                                      children: [
                                        {
                                          name: "resistor",
                                          direction: "horizontal",
                                          pos: [1363, 1410],
                                          label: "440",
                                          noLine: true,
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [1416, 1406],
                                              length: 40,
                                              children: [
                                                {
                                                  name: "lineSwitch",
                                                  direction: "right",
                                                  pos: [1453, 1405],
                                                  label: "4401",
                                                  state: 1,
                                                  code: "镇城底站-4401"
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
                                  pos: [1241, 1443],
                                  state: 1,
                                  label: "4423",
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "vertical",
                                      pos: [1232, 1485],
                                      label: "442",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SZPoint",
                                          pos: [1258, 1536],
                                          label: "2#",
                                          children: [
                                            {
                                              name: "SZPoint",
                                              pos: [1258, 1544],
                                              color: 2,
                                              children: [
                                                {
                                                  name: "switch",
                                                  direction: "top",
                                                  pos: [1240, 1579],
                                                  state: 1,
                                                  label: "6021",
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      direction: "vertical",
                                                      pos: [1231, 1621],
                                                      label: "602",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "switch",
                                                          direction: "top",
                                                          pos: [1239, 1691],
                                                          state: 1,
                                                          label: "6023",
                                                          lpos: [1261, 1683],
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [1231, 1711],
                                                              length: 90,
                                                              children: [
                                                                {
                                                                  name: "lineSwitch",
                                                                  direction: "right",
                                                                  pos: [1320, 1711],
                                                                  state: 1,
                                                                  label: "6002",
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      direction: "horizontal",
                                                                      pos: [1334, 1711],
                                                                      length: 50,
                                                                      children: [
                                                                        {
                                                                          name: "resistor",
                                                                          direction: "horizontal",
                                                                          pos: [1363, 1715],
                                                                          label: "600",
                                                                          noLine: true,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              pos: [110, 210],
                                                                              length: 0,
                                                                              children: [
                                                                                {
                                                                                  name: "lineBold",
                                                                                  direction: "horizontal",
                                                                                  pos: [1416, 1711],
                                                                                  length: 40,
                                                                                  children: [
                                                                                    {
                                                                                      name: "lineSwitch",
                                                                                      direction: "right",
                                                                                      pos: [1453, 1711],
                                                                                      state: 1,
                                                                                      label: "6001",
                                                                                      code: "镇城底站-6001"
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
            }
          ]
        }
      ]
    },
    {
      color: 1,
      stationName: "镇城底站",
      children: [
        {
          name: "line",
          pos: [1503, 1133],
          direction: "vertical",
          length: 81,
          label: "屯镇\n1#进线",
          labelDirection: "vertical",
          lpos: [1455, 1113],
          linkTo: ["405-屯镇1#"],
          children: [
            {
              name: "line",
              length: 40,
              pos: [1466, 1214],
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [1419, 1214],
                  state: 1,
                  label: "4431D",
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [1406, 1205]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [1486, 1243],
              state: 1,
              label: "4431",
              children: [
                {
                  name: "switch",
                  direction: "top",
                  pos: [1486, 1285],
                  state: 1,
                  label: "4432",
                  children: [
                    {
                      name: "resistor",
                      direction: "vertical",
                      pos: [1477, 1325],
                      label: "443",
                      state: 1,
                      children: [
                        {
                          name: "switch",
                          direction: "top",
                          pos: [1486, 1387],
                          state: 1,
                          label: "4433",
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [1470, 1406],
                              length: 130,
                              linkTo: ["镇城底站-4401"],
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [1556, 1387],
                                  state: 1,
                                  label: "4453",
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "vertical",
                                      pos: [1548, 1325],
                                      label: "445",
                                      state: 1,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [1557, 1285],
                                          state: 1,
                                          label: "4452",
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [1557, 1243],
                                              state: 1,
                                              label: "4451",
                                              children: [
                                                {
                                                  name: "switch",
                                                  direction: "right",
                                                  pos: [1574, 1194],
                                                  state: 1,
                                                  label: "4451D",
                                                  children: [
                                                    {
                                                      name: "entry",
                                                      direction: "left",
                                                      pos: [1612, 1185]
                                                    }
                                                  ]
                                                },
                                                {
                                                  name: "line",
                                                  direction: "vertical",
                                                  pos: [1574, 1170],
                                                  length: 45,
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "horizontal",
                                                      pos: [1574, 1170],
                                                      length: 80,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "vertical",
                                                          pos: [1654, 1170],
                                                          length: 848,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [1594, 2015],
                                                              length: 60,
                                                              linkTo: ["义里站-右-363"]
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
                                  name: "switch",
                                  direction: "top",
                                  pos: [1486, 1443],
                                  state: 1,
                                  label: "4413",
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "vertical",
                                      pos: [1477, 1485],
                                      label: "441",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SZPoint",
                                          pos: [1503, 1536],
                                          label: "1#",
                                          labelDirection: 'left',
                                          children: [
                                            {
                                              name: "SZPoint",
                                              pos: [1503, 1544],
                                              color: 2,
                                              children: [
                                                {
                                                  name: "switch",
                                                  direction: "top",
                                                  pos: [1485, 1579],
                                                  state: 1,
                                                  label: "6011",
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      direction: "vertical",
                                                      pos: [1476, 1621],
                                                      label: "601",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "switch",
                                                          direction: "top",
                                                          pos: [1484, 1691],
                                                          state: 1,
                                                          label: "6013",
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [1470, 1711],
                                                              length: 80,
                                                              linkTo: ["镇城底站-6001"]
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
      label: "义里",
      lpos: [1470, 2040],
      lsize: 38,
      stationName: "义里站",
      children: [
        {
          name: "line",
          pos: [120, 60],
          length: 0,
          label: "北义2#进线",
          lpos: [1285, 1980]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [1359, 2063],
          label: "364",
          code: "义里站-左-364",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [1385, 2108],
              length: 60,
              children: [
                {
                  name: "coilDoubleEmpty",
                  direction: "horizontal",
                  pos: [1440, 2108],
                  label: "360",
                  linkTo: ["义里站-3601"]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1359, 2163],
                  label: "362",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [1405, 2213],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1405, 2222],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [1359, 2275],
                              label: "602",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1385, 2320],
                                  length: 60,
                                  children: [
                                    {
                                      name: "coilDoubleEmpty",
                                      direction: "horizontal",
                                      pos: [1445, 2320],
                                      label: "600",
                                      linkTo: ["义里站-6001"]
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
      stationName: "义里站",
      children: [
        {
          name: "line",
          pos: [190, 60],
          length: 0,
          label: "镇义1#进线",
          labelDirection: "vertical",
          lpos: [1630, 1780]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [1549, 2063],
          label: "363",
          state: 1,
          code: "义里站-右-363",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [1490, 2108],
              length: 120,
              children: [
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [1525, 2108],
                  label: "3601",
                  code: "义里站-3601"
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1549, 2163],
                  label: "361",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [1595, 2213],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1595, 2222],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [1549, 2275],
                              label: "601",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1495, 2320],
                                  length: 120,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [1535, 2320],
                                      label: "6001",
                                      code: "义里站-6001"
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
      stationName: "屯兰工广站",
      label: "屯兰工广",
      lpos: [1775, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [200, 60],
          length: 0,
          label: "屯屯2#进线",
          labelDirection: "vertical",
          lpos: [1735, 1141]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [1710, 1361],
          label: "476",
          code: "屯兰工厂站-476",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [1690, 1406],
              length: 180,
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1650, 1461],
                  label: "482",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [1695, 1505],
                      length: 460,
                      linkTo: ["屯兰瓦斯电厂-4801"]
                    }
                  ]
                },
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [1800, 1406],
                  label: "4702",
                  children: [
                    {
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [1870, 1406],
                      label: "470",
                      linkTo: ["屯兰工厂站-475-bold"]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1650, 1361],
                  label: "484",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [1675, 1313],
                      length: 23,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [1675, 1313],
                          length: 550,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [1675, 1863],
                              length: 570,
                              children: [
                                {
                                  name: "line",
                                  direction: "vertical",
                                  pos: [2245, 1863],
                                  length: 160,
                                  linkTo: ["八字山站-494"]
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
                  pos: [1730, 1461],
                  label: "472",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [1777, 1512],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1777, 1522],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [1735, 1570],
                              label: "602",
                              length: 20,
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1726, 1610],
                                  length: 140,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [1795, 1610],
                                      label: "6002",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [1865, 1610],
                                          label: "600",
                                          children: [
                                            {
                                              name: "line",
                                              pos: [200, 210],
                                              length: 0,
                                              linkTo: ["屯兰工厂站-502"]
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
      stationName: "屯兰工广站",
      children: [
        {
          name: "line",
          pos: [200, 60],
          length: 0,
          label: "屯屯\n1#进线",
          labelDirection: "vertical",
          lpos: [1875, 1161]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [1880, 1361],
          label: "475",
          code: "屯兰工厂站-475",
          state: 1,
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [1920, 1406],
              length: 120,
              code: "屯兰工厂站-475-bold",
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1910, 1461],
                  label: "471",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [1956, 1511],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1956, 1521],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [1916, 1570],
                              label: "502",
                              length: 20,
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1907, 1610],
                                  length: 100,
                                  code: "屯兰工厂站-502",
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [1910, 1665],
                                      label: "657屯屯联络",
                                      state: 0,
                                      code: "屯兰工厂站-657屯屯联络",
                                      labelDirection: "vertical",
                                      children: [
                                        {
                                          name: 'directionSingle',
                                          direction: "bottom",
                                          pos: [1943, 1725],
                                          linkTo: ['屯兰-606屯屯联络']
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
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [1940, 1361],
                  label: "483",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [1985, 1316],
                      length: 60,
                      label: "北三1#",
                      lpos: [1970, 1310],
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [2045, 1316],
                          length: 718,
                          linkTo: ["北三站-右-393"]
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
      label: "北三",
      lsize: 38,
      stationName: "北三站",
      lpos: [1950, 2040],
      children: [
        {
          name: "line",
          pos: [200, 60],
          length: 0,
          label: "马北2#进线",
          lpos: [1775, 1910]
        },
        {
          name: "line",
          direction: "vertical",
          pos: [1905, 1917],
          label: "马北2#进线",
          labelDirection: "vertical",
          length: 110,
          code: "北三站-左-394",
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [1860, 2063],
              label: "394",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [1895, 2108],
                  length: 102,
                  children: [
                    {
                      name: "coilDouble",
                      direction: "horizontal",
                      pos: [1922, 2108],
                      label: "3902",
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          direction: "horizontal",
                          pos: [1985, 2108],
                          label: "390",
                          code: "北三站-390"
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [1870, 2163],
                      label: "392",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1916, 2213],
                          label: "2#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [1916, 2221],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [1870, 2273],
                                  label: "602",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1895, 2315],
                                      length: 40,
                                      enterCode: "北三站-蓝-左",
                                      enterLinkId: "600-控",
                                      children: [
                                        {
                                          name: "coilDoubleEmpty",
                                          direction: "horizontal",
                                          pos: [1925, 2315],
                                          label: "600",
                                          linkTo: ["北三站-6001"]
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
      stationName: "北三站",
      children: [
        {
          name: "line",
          pos: [200, 60],
          length: 0,
          label: "北三\n1#进线",
          labelDirection: "vertical",
          lpos: [1995, 1880]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [2000, 2063],
          label: "393",
          state: 1,
          code: "北三站-右-393",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [2035, 2108],
              length: 30,
              linkTo: ["北三站-390"],
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [2000, 2163],
                  label: "391",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [2046, 2213],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2046, 2221],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              direction: "vertical",
                              pos: [2000, 2273],
                              label: "601",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [1975, 2315],
                                  length: 80,
                                  enterCode: "北三站-蓝-左",
                                  enterLinkId: "600-控",
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [2000, 2315],
                                      label: "6001",
                                      code: "北三站-6001"
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
      label: "屯兰瓦斯电厂",
      lpos: [1695, 2040],
      stationName: "屯兰瓦斯电厂",
      lsize: 38,
      children: [
        {
          name: "directionDouble",
          direction: "vertical",
          pos: [1665, 1995],
          lpos: [1705, 1985],
          label: "出线隔离4801",
          lsize: 33,
          state: 1,
          code: "屯兰瓦斯电厂-4801",
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [1650, 2063],
              label: "出线联络480",
              lsize: 33,
              lpos: [1705, 2095],
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [1660, 2108],
                  length: 180,
                  children: [
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [1615, 2163],
                      label: "487",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1661, 2213],
                          label: "1#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [1661, 2222],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [1615, 2275],
                                  label: "AH11",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1635, 2320],
                                      length: 50
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
                      pos: [1700, 2163],
                      label: "486",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1746, 2213],
                          label: "2#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [1746, 2222],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [1700, 2275],
                                  label: "AH21",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1720, 2320],
                                      length: 60
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
                      pos: [1785, 2163],
                      label: "489",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [1831, 2213],
                          label: "3#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [1831, 2222],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [1785, 2275],
                                  label: "AH31",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [1815, 2320],
                                      length: 40
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
      label: "白草塔",
      lpos: [2090, 1322],
      stationName: "白草塔站",
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [2075, 1093],
          length: 234,
          label: "屯白\n2#进线",
          lpos: [2120, 1182],
          labelDirection: "vertical",
          code: "白草塔站-436",
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [2030, 1362],
              label: "436",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [2060, 1406],
                  length: 40,
                  children: [
                    {
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [2100, 1406],
                      label: "430",
                      children: [
                        {
                          name: "line",
                          pos: [200, 210],
                          length: 0,
                          linkTo: ["白草塔站-4302"]
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [2030, 1460],
                      label: "432",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2077, 1514],
                          label: "2#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [2077, 1522],
                              color: 2,
                              children: [
                                {
                                  name: "directionDouble",
                                  direction: "vertical",
                                  pos: [2050, 1556],
                                  label: "6023",
                                  length: 50,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [2035, 1619],
                                      label: "602",
                                      state: 1,
                                      length: 20,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2055, 1659],
                                          length: 40,
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [2093, 1659],
                                              label: "600",
                                              code: '白草塔-600'
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
      stationName: "白草塔站",
      label: "屯白\n1#进线",
      lpos: [2280, 1182],
      labelDirection: "vertical",
      children: [
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [2190, 1362],
          label: '435',
          state: 1,
          code: "白草塔站-435",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [2147, 1406],
              length: 170,
              children: [
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [2168, 1406],
                  label: "4302",
                  code: "白草塔站-4302"
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [2260, 1460],
                  label: "439",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [2305, 1504],
                      length: 300,
                      label: "瓦斯发电",
                      labelDirection: "vertical",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [2115, 1804],
                          length: 190,
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [2115, 1806],
                              length: 173,
                              label: "白草塔瓦斯发电厂",
                              lpos: [2200, 2033],
                              lsize: 38,
                              labelDirection: "vertical",
                              children: [
                                {
                                  name: "directionDouble",
                                  direction: "vertical",
                                  pos: [2085, 1988],
                                  labelDirection: "vertical",
                                  label: "进线联络\n柜3801",
                                  labelDirection: "vertical",
                                  lpos: [2175, 1940],
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [2070, 2063],
                                      label: "主变压器柜380",
                                      state: 1,
                                      labelDirection: "vertical",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2095, 2108],
                                          length: 40,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [2115, 2113],
                                              length: 95,
                                              children: [
                                                {
                                                  name: "SZPoint",
                                                  pos: [2116, 2213],
                                                  children: [
                                                    {
                                                      name: "SZPoint",
                                                      pos: [2116, 2221],
                                                      color: 2,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [2070, 2270],
                                                          label: "AH11",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [2090, 2315],
                                                              length: 60,
                                                              children: []
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
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [2180, 1460],
                  label: "431",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [2227, 1514],
                      label: "1#",
                      labelDirection: 'left',
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2227, 1522],
                          color: 2,
                          children: [
                            {
                              name: "directionDouble",
                              direction: "vertical",
                              pos: [2200, 1556],
                              label: "6013",
                              length: 50,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [2185, 1619],
                                  label: "601",
                                  length: 20,
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [2140, 1659],
                                      length: 100,
                                      children: [
                                        {
                                          name: "coilDouble",
                                          direction: "horizontal",
                                          pos: [2161, 1659],
                                          label: "6001",
                                          linkTo: ["白草塔-600"]
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
      stationName: "八字山站",
      label: "八字山",
      lpos: [2290, 2030],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [170, 60],
          length: 0,
          label: "屯八\n2#\n进线",
          labelDirection: "vertical",
          lpos: [2280, 1850]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [2200, 2063],
          label: "494",
          state: 1,
          code: "八字山站-494",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [2230, 2108],
              length: 40,
              children: [
                {
                  name: "coilDoubleEmpty",
                  direction: "horizontal",
                  pos: [2270, 2108],
                  label: "490",
                  linkTo: ["八字山站-4901"]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [2220, 2163],
                  label: "492",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [2267, 2216],
                      label: "2#",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2267, 2226],
                          color: 2,
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2250, 2258],
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2242, 2305],
                                  label: "602",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [2250, 2375],
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2230, 2390],
                                          length: 50,
                                          enterCode: "八字山站-蓝-左",
                                          enterLinkId: "600-控",
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              direction: "right",
                                              pos: [2280, 2390],
                                              state: 1,
                                              label: "6003",
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [2297, 2390],
                                                  length: 32,
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      direction: "horizontal",
                                                      pos: [2308, 2394],
                                                      label: "600",
                                                      noLine: true,
                                                      labelDirection: "top",
                                                      state: 0,
                                                      linkTo: ["八字山站-6002"]
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
      stationName: "八字山站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [200, 60],
          length: 0,
          label: "屯八\n1#\n进线",
          labelDirection: "vertical",
          lpos: [2460, 1850]
        },
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [2380, 2063],
          label: "493",
          state: 1,
          code: "八字山站-493",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [2320, 2108],
              length: 130,
              children: [
                {
                  name: "coilDouble",
                  direction: "horizontal",
                  pos: [2360, 2108],
                  label: "4901",
                  code: "八字山站-4901"
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [2380, 2163],
                  label: "491",
                  state: 1,
                  children: [
                    {
                      name: "SZPoint",
                      pos: [2427, 2216],
                      label: "1#",
                      labelDirection: "left",
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2427, 2226],
                          color: 2,
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2410, 2258],
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2402, 2305],
                                  label: "601",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [2410, 2375],
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2420, 2390],
                                          length: 70,
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              direction: "right",
                                              pos: [2410, 2390],
                                              state: 1,
                                              label: "6002",
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [2360, 2390],
                                                  length: 52,
                                                  code: "八字山站-6002"
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
      label: "东曲广场",
      lpos: [2750, 1322],
      stationName: "东曲广场站",
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [2655, 1073],
          length: 220,
          label: "屯东2#进线",
          lpos: [2675, 1093],
          labelDirection: "vertical",
          code: "东曲广场站-454",
          children: [
            {
              name: "resistor",
              direction: "vertical",
              pos: [2630, 1316],
              label: "454",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2635, 1356],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2622, 1347],
                      label: "4541D"
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "top",
                  pos: [2639, 1386],
                  state: 1,
                  label: "4541",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [2609, 1406],
                      length: 120,
                      children: [
                        {
                          name: "lineSwitch",
                          direction: "right",
                          pos: [2728, 1406],
                          state: 1,
                          children: [
                            {
                              name: "lineBold",
                              pos: [2745, 1406],
                              length: 25,
                              children: [
                                {
                                  name: "resistor",
                                  direction: "horizontal",
                                  pos: [2750, 1410],
                                  noLine: true,
                                  children: [
                                    {
                                      name: "lineBold",
                                      pos: [2802, 1406],
                                      length: 23,
                                      children: [
                                        {
                                          name: "lineSwitch",
                                          direction: "right",
                                          pos: [2825, 1406],
                                          state: 1,
                                          linkTo: ["东区广场站-4531-bold"]
                                        },
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [2803, 1388],
                                          length: 20,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "right",
                                              pos: [2790, 1380],
                                              label: "4503AD"
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
                              pos: [2745, 1388],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "left",
                                  pos: [2759, 1380],
                                  label: "4503BD"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [2627, 1416],
                          length: 10,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [2607, 1426],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2597, 1418],
                                  label: "4563D"
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2610, 1452],
                              state: 1,
                              label: "4563",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2602, 1486],
                                  label: "456",
                                  linkId: "黄台峰站-2#进线",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [2627, 1530],
                                      length: 433,
                                      label: "广黄2#进线",
                                      lpos: [2647, 1700],
                                      labelDirection: "vertical",
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [2540, 1960],
                                          length: 88,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [2537, 1960],
                                              length: 50,
                                              linkTo: ["黄台峰站-464"]
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
                          name: "line",
                          direction: "vertical",
                          pos: [2707, 1416],
                          length: 10,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [2687, 1426],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2677, 1418]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2690, 1452],
                              state: 1,
                              label: "4523",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2681, 1486],
                                  label: "452",
                                  state: 1,
                                  children: [
                                    {
                                      name: "SZPoint",
                                      pos: [2707, 1536],
                                      label: "2#",
                                      children: [
                                        {
                                          name: "SZPoint",
                                          pos: [2707, 1544],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "vertical",
                                              pos: [2660, 1594],
                                              label: "602",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [2670, 1634],
                                                  length: 130,
                                                  children: [
                                                    {
                                                      name: "coilDouble",
                                                      direction: "horizontal",
                                                      pos: [2718, 1634],
                                                      label: "6001",
                                                      children: [
                                                        {
                                                          name: "coilDoubleEmpty",
                                                          direction: "horizontal",
                                                          pos: [2796, 1634],
                                                          label: "600",
                                                          code: '东曲广场-600'
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
      stationName: "东曲广场站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [2965, 1068],
          length: 220,
          label: "屯东1#进线",
          lpos: [2985, 1068],
          labelDirection: "vertical",
          code: "东曲广场站-453",
          children: [
            {
              name: "resistor",
              direction: "vertical",
              pos: [2940, 1316],
              label: "453",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2945, 1356],
                  length: 20,
                  linkId: "黄台峰站-1#进线",
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2932, 1347],
                      label: "4531D"
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "top",
                  pos: [2949, 1386],
                  state: 1,
                  label: "4531",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [2840, 1406],
                      length: 190,
                      code: "东区广场站-4531-bold",
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [2947, 1416],
                          length: 10,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [2927, 1426],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2917, 1418],
                                  code: "4553D"
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2930, 1452],
                              state: 1,
                              label: "4553",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2922, 1486],
                                  label: "455",
                                  state: 0,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [2947, 1530],
                                      length: 460,
                                      label: "广黄1#A进线停用",
                                      lpos: [2970, 1550],
                                      labelDirection: "vertical",
                                      linkTo: ["黄台峰-463"]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [3022, 1416],
                          length: 10,
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [3005, 1452],
                              state: 1,
                              label: "4573",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2997, 1486],
                                  label: "457",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [3022, 1530],
                                      length: 460,
                                      code: "广黄1#B进线",
                                      label: "广黄1#B",
                                      lpos: [3042, 1550],
                                      labelDirection: "vertical",
                                      children: [
                                        {
                                          name: "resistor",
                                          direction: "vertical",
                                          pos: [2997, 2018],
                                          label: "465",
                                          state: 0,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [3002, 2058],
                                              length: 20,
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "right",
                                                  pos: [2992, 2050],
                                                  code: "4651D"
                                                }
                                              ]
                                            },
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [3005, 2086],
                                              label: "4651",
                                              linkId: "东曲广场站-1#B进线",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "line",
                                                  pos: [275, 198],
                                                  length: 0,
                                                  linkTo: ["黄台峰站-4651-bold"]
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
                              name: "line",
                              direction: "horizontal",
                              pos: [3002, 1426],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2992, 1418]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [2877, 1416],
                          length: 10,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [2857, 1426],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2847, 1418]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [2860, 1452],
                              state: 1,
                              label: "4513",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [2851, 1486],
                                  label: "451",
                                  state: 1,
                                  children: [
                                    {
                                      name: "SZPoint",
                                      pos: [2877, 1536],
                                      label: "1#",
                                      labelDirection: "left",
                                      children: [
                                        {
                                          name: "SZPoint",
                                          pos: [2877, 1544],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "vertical",
                                              pos: [2830, 1594],
                                              label: "601",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [2845, 1634],
                                                  length: 60,
                                                  linkTo: ['东曲广场-600'],
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
      label: "黄台峰",
      lpos: [2700, 2040],
      stationName: "黄台峰站",
      lsize: 38,
      children: [
        {
          name: "resistor",
          direction: "vertical",
          pos: [2512, 2030],
          label: "464",
          state: 0,
          code: "黄台峰站-464",
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [2517, 2070],
              length: 20,
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [2504, 2062],
                  label: "4641D"
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [2521, 2098],
              label: "4641",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [2519, 2108],
                  length: 167,
                  children: [
                    {
                      name: "lineSwitch",
                      direction: "right",
                      pos: [2685, 2108],
                      state: 1,
                      label: "4603B",
                      labelDirection: "bottom",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [2695, 2090],
                          length: 20,
                          children: [
                            {
                              name: "entry",
                              direction: "left",
                              pos: [2709, 2082]
                            }
                          ]
                        },
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [2700, 2108],
                          length: 30,
                          children: [
                            {
                              name: "coilDoubleEmpty",
                              direction: "horizontal",
                              pos: [2730, 2108],
                              state: 0,
                              label: "406",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [2780, 2108],
                                  length: 40,
                                  children: [
                                    {
                                      name: "lineSwitch",
                                      direction: "right",
                                      pos: [2820, 2108],
                                      state: 1,
                                      label: "4603A",
                                      labelDirection: "bottom",
                                      code: "黄台峰站-4603A"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [2805, 2090],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [2794, 2082],
                                  code: "4603AD"
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
                      pos: [2601, 2098],
                      label: "4703",
                      state: 1,
                      children: [
                        {
                          name: "resistor",
                          direction: "vertical",
                          pos: [2592, 2030],
                          label: "470",
                          state: 1,
                          code: "黄台峰站-470"
                        },
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [2597, 2070],
                          length: 20,
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [2584, 2062],
                              label: "4703D"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      direction: "top",
                      pos: [2590, 2154],
                      state: 1,
                      code: "4623",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [2587, 2128],
                          length: 20,
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [2577, 2120],
                              code: "4623D"
                            }
                          ]
                        },
                        {
                          name: "resistor",
                          direction: "vertical",
                          pos: [2581, 2188],
                          label: "462",
                          state: 1,
                          children: [
                            {
                              name: "SZPoint",
                              pos: [2607, 2238],
                              label: "2#",
                              children: [
                                {
                                  name: "SZPoint",
                                  pos: [2607, 2246],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [2560, 2296],
                                      label: "662",
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2558, 2340],
                                          length: 220,
                                          children: [
                                            {
                                              name: "coilDouble",
                                              direction: "horizontal",
                                              pos: [2658, 2340],
                                              label: "6601",
                                              children: [
                                                {
                                                  name: "coilDoubleEmpty",
                                                  direction: "horizontal",
                                                  pos: [2778, 2340],
                                                  label: "660",
                                                  code: "黄台峰站-660"
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
      stationName: "黄台峰站",
      children: [
        {
          name: "lineBold",
          direction: "horizontal",
          pos: [2835, 2108],
          length: 190,
          code: "黄台峰站-4651-bold",
          linkTo: ["黄台峰站-4603A"],
          children: [
            {
              name: "switch",
              direction: "top",
              pos: [2930, 2086],
              label: "4631",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2927, 2058],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2914, 2050],
                      code: "4631D"
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [2922, 2018],
                  label: "463",
                  state: 0,
                  code: "黄台峰-463"
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [2841, 2098],
              label: "4693",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2837, 2070],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2824, 2062],
                      code: "4693D"
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [2832, 2030],
                  label: "469",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      pos: [2857, 1970],
                      direction: "vertical",
                      length: 33,
                      children: [
                        {
                          name: "line",
                          pos: [2860, 1970],
                          length: 765,
                          label: "局黄1#",
                          lpos: [2855, 1960],
                          children: [
                            {
                              name: "line",
                              pos: [3625, 1970],
                              length: 60,
                              direction: "vertical",
                              linkTo: ["局家洼站-339"]
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
              direction: "vertical",
              pos: [2927, 2118],
              length: 10,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [2907, 2128],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2897, 2120],
                      code: "4613D"
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "top",
                  pos: [2910, 2154],
                  state: 1,
                  label: "4613",
                  children: [
                    {
                      name: "resistor",
                      direction: "vertical",
                      pos: [2901, 2188],
                      label: "461",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2927, 2238],
                          label: "1#",
                          labelDirection: "left",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [2927, 2246],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [2880, 2296],
                                  state: 1,
                                  code: "661",
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [2828, 2340],
                                      length: 150,
                                      linkTo: ["黄台峰站-660"]
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
      stationName: "麻子塔站",
      label: "麻子塔",
      lpos: [2410, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [2385, 1083],
          length: 240,
          label: "屯麻2#进线",
          lpos: [2405, 1083],
          labelDirection: "vertical",
          linkTo: ["418-屯麻"],
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [2340, 1362],
              label: "522",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [2370, 1406],
                  length: 110,
                  linkTo: ["麻子塔站-520-1"],
                  children: [
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [2340, 1460],
                      label: "524",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2387, 1514],
                          label: "2#",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [2387, 1522],
                              color: 2,
                              children: [
                                {
                                  name: "line",
                                  direction: "vertical",
                                  pos: [2385, 1530],
                                  length: 50,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [2345, 1619],
                                      label: "662",
                                      state: 1,
                                      length: 20,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2365, 1659],
                                          length: 40,
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [2403, 1659],
                                              label: "660",
                                              children: [
                                                {
                                                  name: "coilDouble",
                                                  direction: "horizontal",
                                                  pos: [2471, 1659],
                                                  label: "600-1",
                                                  code: "麻子塔站-660-1"
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
      stationName: "麻子塔站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [2535, 1173],
          length: 145,
          linkTo: ["417-屯麻"],
          label: "屯麻1#进线",
          lpos: [2555, 1083],
          labelDirection: "vertical",
          children: [
            {
              name: "directionDoubleResistor",
              direction: "vertical",
              pos: [2490, 1362],
              label: "521",
              state: 1,
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [2527, 1406],
                  length: 60,
                  children: [
                    {
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [2478, 1406],
                      label: "520",
                      code: "白草塔站-4302",
                      children: [
                        {
                          name: "coilDouble",
                          direction: "horizontal",
                          pos: [2410, 1406],
                          label: "520-1",
                          code: "麻子塔站-520-1"
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      direction: "vertical",
                      pos: [2490, 1460],
                      label: "523",
                      state: 1,
                      children: [
                        {
                          name: "SZPoint",
                          pos: [2537, 1514],
                          label: "1#",
                          labelDirection: "left",
                          children: [
                            {
                              name: "SZPoint",
                              pos: [2537, 1522],
                              color: 2,
                              children: [
                                {
                                  name: "line",
                                  direction: "vertical",
                                  pos: [2535, 1530],
                                  length: 50,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [2495, 1619],
                                      label: "661",
                                      length: 20,
                                      state: 1,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [2450, 1659],
                                          length: 120,
                                          linkTo: ["麻子塔站-660-1"]
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