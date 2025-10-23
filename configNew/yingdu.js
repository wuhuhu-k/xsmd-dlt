var yingdu = {
  name: "杜儿坪",
  code: "杜儿坪",
  v: "110KV",
  label: "杜儿坪",
  lpos: [5100, 210],
  lsize: 40,
  powerToChild: false,
  children: [
    {
      code: "杜儿坪-2#",
      color: 0,
      powerFrom: ["杜儿坪2#"],
      stationName: "杜儿坪110kV站",
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          pos: [4928, 100],
          direction: "vertical",
          length: 110,
          label: "迎杜线\n引自迎西站220kv 152",
          labelDirection: "vertical",
          lpos: [4930, 15],
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [4900, 160],
              label: "引自迎西站220kv 152",
              length: 30,
              code: "迎杜线-152",
              children: [
                {
                  name: "PT",
                  label: "163电路PT 152",
                  direction: "horizontal",
                  pos: [4888, 162]
                }
              ]
            },
            {
              name: "capacitor",
              direction: "left",
              pos: [4931, 160],
              children: [
                {
                  name: "entry",
                  direction: "left",
                  pos: [4997, 152]
                }
              ]
            },
            {
              name: "line",
              pos: [4928, 110],
              length: 1675
            },
            {
              name: "line",
              pos: [4858, 195],
              length: 73,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [4812, 195],
                  state: 0,
                  label: "1631D内",
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [4800, 187]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [4911.5, 236],
              state: 1,
              linkId: "2",
              label: "1631",
              children: [
                {
                  name: "line",
                  pos: [4858, 245],
                  length: 73,
                  children: [
                    {
                      name: "switch",
                      direction: "right",
                      pos: [4812, 245],
                      state: 0,
                      label: "1631D外",
                      children: [
                        {
                          name: "entry",
                          direction: "right",
                          pos: [4800, 237]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  state: 1,
                  direction: "vertical",
                  pos: [4903, 265],
                  label: "163",
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [4911.5, 319],
                      label: "1633",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [4700, 322],
                          length: 360,
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [4700, 358],
                              state: 1,
                              label: "北PT刀闸",
                              lpos: [4575, 360],
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [4695, 375],
                                  length: 50,
                                  children: [
                                    {
                                      name: "IPT",
                                      direction: "top",
                                      pos: [4692, 410],
                                      label: "北PT",
                                      lpos: [4660, 450]
                                    },
                                    {
                                      name: "capacitor",
                                      direction: "bottom",
                                      pos: [4717, 404],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [4733, 440]
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
                              pos: [4719, 343],
                              length: 50,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [4750, 370],
                                  label: "北PT地刀闸",
                                  lpos: [4765, 370],
                                  state: 0,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [4758, 380]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "lineSwitch",
                              direction: "right",
                              pos: [5058, 323],
                              state: 1,
                              label: "1601",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [5075, 322],
                                  length: 50,
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "horizontal",
                                      state: 0,
                                      pos: [5104, 325],
                                      label: "160",
                                      noLine: true,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5156, 322],
                                          length: 40,
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              direction: "right",
                                              pos: [5195, 323],
                                              state: 1,
                                              label: "1602",
                                              code: "杜儿坪-1602"
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
                              pos: [4911.5, 358],
                              label: "1613",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [4903, 405],
                                  label: "161",
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [4911.5, 470],
                                      label: "1611",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "right",
                                          pos: [4930, 500],
                                          label: "1#"
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [4924, 510],
                                          color: 2,
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "right",
                                              pos: [4870, 510],
                                              label: "6011",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  pos: [4860, 510],
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      state: 1,
                                                      direction: "horizontal",
                                                      pos: [4778, 510],
                                                      label: "601",
                                                      children: [
                                                        {
                                                          name: "switch",
                                                          direction: "right",
                                                          pos: [4730, 510],
                                                          label: "6013",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              pos: [4720, 490],
                                                              direction: "vertical",
                                                              length: 100,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [4726, 560],
                                                                  direction: "horizontal",
                                                                  length: 350,
                                                                  children: [
                                                                    {
                                                                      name: "switch",
                                                                      state: 1,
                                                                      direction: "horizontal",
                                                                      pos: [5072, 560],
                                                                      lpos: [5050, 550],
                                                                      label: "6001",
                                                                      children: [
                                                                        {
                                                                          name: "resistor",
                                                                          direction: "horizontal",
                                                                          pos: [5110, 560],
                                                                          state: 0,
                                                                          label: "600",
                                                                          lpos: [5120, 550],
                                                                          children: [
                                                                            {
                                                                              name: "switch",
                                                                              direction: "right",
                                                                              pos: [5172, 560],
                                                                              state: 1,
                                                                              lpos: [5180, 550],
                                                                              label: "6002",
                                                                              code: "杜儿坪-6002"
                                                                            }
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
                                          name: "SSZPoint",
                                          pos: [4938, 510],
                                          color: 1,
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [4920, 547],
                                              state: 1,
                                              label: "3111",
                                              children: [
                                                {
                                                  name: "line",
                                                  direction: "vertical",
                                                  pos: [4936.5, 566],
                                                  length: 45,
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "horizontal",
                                                      pos: [4800, 610],
                                                      length: 450,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          state: 1,
                                                          direction: "vertical",
                                                          pos: [4755, 656],
                                                          label: "311",
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              direction: "vertical",
                                                              pos: [4770, 730],
                                                              label: "3113"
                                                            },
                                                            {
                                                              name: "lineBold",
                                                              pos: [4690, 760],
                                                              direction: "horizontal",
                                                              length: 180,
                                                              children: [
                                                                {
                                                                  name: "coilDoubleEmpty",
                                                                  direction: "horizontal",
                                                                  pos: [4860, 760],
                                                                  label: "301",
                                                                  children: [
                                                                    {
                                                                      name: "coilDouble",
                                                                      direction: "horizontal",
                                                                      pos: [4920, 760],
                                                                      label: "3012",
                                                                      code: "杜儿坪-2012"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  state: 1,
                                                                  direction: "vertical",
                                                                  pos: [4665, 815],
                                                                  label: "305杜选线",
                                                                  labelDirection: "vertical",
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [4710, 860],
                                                                      length: 70,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "horizontal",
                                                                          pos: [4690, 860],
                                                                          length: 20,
                                                                          children: [
                                                                            {
                                                                              name: "switch",
                                                                              direction: "top",
                                                                              pos: [4674, 890],
                                                                              state: 0,
                                                                              children: [
                                                                                {
                                                                                  name: "entry",
                                                                                  direction: "top",
                                                                                  pos: [4680, 900]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "line",
                                                                          direction: "horizontal",
                                                                          pos: [4460, 930],
                                                                          length: 253,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [4460, 90],
                                                                              length: 842,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [4460, 90],
                                                                                  length: 3120,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      direction: "vertical",
                                                                                      pos: [6026, 90],
                                                                                      length: 55,
                                                                                      code: "305-杜选线-机厂站"
                                                                                    },
                                                                                    {
                                                                                      name: "line",
                                                                                      pos: [8077, 90],
                                                                                      direction: "vertical",
                                                                                      length: 0,
                                                                                      code: "305-杜选线-太选站"
                                                                                    }
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
                                                                  state: 1,
                                                                  direction: "vertical",
                                                                  pos: [4745, 815],
                                                                  label: "303杜中1#",
                                                                  labelDirection: "vertical",
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [4790, 860],
                                                                      length: 300,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "horizontal",
                                                                          pos: [4770, 860],
                                                                          length: 20,
                                                                          children: [
                                                                            {
                                                                              name: "switch",
                                                                              direction: "top",
                                                                              pos: [4750, 890],
                                                                              state: 0,
                                                                              children: [
                                                                                {
                                                                                  name: "entry",
                                                                                  direction: "top",
                                                                                  pos: [4758, 900]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "line",
                                                                          pos: [4790, 1160],
                                                                          direction: "horizontal",
                                                                          length: 410,
                                                                          code: "303-杜中1#"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  state: 1,
                                                                  direction: "vertical",
                                                                  pos: [4805, 815],
                                                                  label: "309杜玉线",
                                                                  labelDirection: "vertical",
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "vertical",
                                                                      pos: [4850, 860],
                                                                      length: 274,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "horizontal",
                                                                          pos: [4850, 1134],
                                                                          length: 100,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [4950, 1134],
                                                                              length: 120,
                                                                              code: "309-杜玉线"
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "line",
                                                                          direction: "horizontal",
                                                                          pos: [4840, 860],
                                                                          length: 10,
                                                                          children: [
                                                                            {
                                                                              name: "switch",
                                                                              direction: "top",
                                                                              pos: [4820, 890],
                                                                              state: 0,
                                                                              children: [
                                                                                {
                                                                                  name: "entry",
                                                                                  direction: "top",
                                                                                  pos: [4828, 900]
                                                                                }
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
                                                          state: 1,
                                                          direction: "vertical",
                                                          pos: [5202, 656],
                                                          label: "312",
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              direction: "vertical",
                                                              pos: [5217, 730],
                                                              label: "3123",
                                                              children: [
                                                                {
                                                                  name: "lineBold",
                                                                  pos: [5200, 760],
                                                                  direction: "horizontal",
                                                                  length: 170,
                                                                  children: [
                                                                    {
                                                                      name: "coilDoubleEmpty",
                                                                      direction: "horizontal",
                                                                      state: 0,
                                                                      pos: [5370, 760],
                                                                      length: 60,
                                                                      label: "302",
                                                                      children: [
                                                                        {
                                                                          name: "coilDouble",
                                                                          direction: "horizontal",
                                                                          pos: [5440, 760],
                                                                          label: "3022",
                                                                          code: "杜儿坪-3022"
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "directionDoubleResistor",
                                                                      state: 1,
                                                                      direction: "vertical",
                                                                      pos: [5185, 815],
                                                                      label: "310杜风东线",
                                                                      labelDirection: "vertical",
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [5230, 860],
                                                                          length: 240,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              pos: [5230, 1100],
                                                                              length: 1510,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "vertical",
                                                                                  pos: [6740, 1100],
                                                                                  length: 90,
                                                                                  code: "310-杜风东线"
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [5200, 860],
                                                                              length: 30,
                                                                              children: [
                                                                                {
                                                                                  name: "switch",
                                                                                  direction: "top",
                                                                                  pos: [5185, 890],
                                                                                  state: 0,
                                                                                  children: [
                                                                                    {
                                                                                      name: "entry",
                                                                                      direction: "top",
                                                                                      pos: [5190, 900]
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
                                                                      state: 1,
                                                                      direction: "vertical",
                                                                      pos: [5255, 815],
                                                                      label: "306杜瓦线",
                                                                      labelDirection: "vertical",
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [5300, 860],
                                                                          length: 230,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [5285, 860],
                                                                              length: 15,
                                                                              children: [
                                                                                {
                                                                                  name: "switch",
                                                                                  direction: "top",
                                                                                  pos: [5270, 890],
                                                                                  state: 0,
                                                                                  children: [
                                                                                    {
                                                                                      name: "entry",
                                                                                      direction: "top",
                                                                                      pos: [5275, 900]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [5300, 1090],
                                                                              length: 480,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "vertical",
                                                                                  pos: [5780, 1090],
                                                                                  length: 920,
                                                                                  code: "306-杜瓦线"
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "directionDoubleResistor",
                                                                      state: 1,
                                                                      direction: "vertical",
                                                                      pos: [5325, 815],
                                                                      label: "304杜白1#",
                                                                      labelDirection: "vertical",
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [5370, 860],
                                                                          length: 150,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [5355, 860],
                                                                              length: 15,
                                                                              children: [
                                                                                {
                                                                                  name: "switch",
                                                                                  direction: "top",
                                                                                  pos: [5340, 890],
                                                                                  state: 0,
                                                                                  children: [
                                                                                    {
                                                                                      name: "entry",
                                                                                      direction: "top",
                                                                                      pos: [5345, 900]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              name: "line",
                                                                              direction: "horizontal",
                                                                              pos: [5370, 1010],
                                                                              length: 2190,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "vertical",
                                                                                  pos: [7558.5, 1010],
                                                                                  length: 315,
                                                                                  code: "304-杜白1#"
                                                                                }
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
      code: "杜儿坪-1#",
      color: 0,
      powerFrom: ["杜儿坪1#"],
      stationName: "杜儿坪110kV站",
      label: "冶杜线",
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          pos: [5367, 120],
          direction: "vertical",
          length: 90,
          label: "冶杜线\n引自冶峪220kV站 151",
          labelDirection: "vertical",
          lpos: [5367, 15],
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [5370, 160],
              length: 30,
              children: [
                {
                  name: "PT",
                  direction: "horizontal",
                  pos: [5406, 162],
                  label: "164线路PT"
                }
              ]
            },
            {
              name: "capacitor",
              direction: "right",
              pos: [5298, 143],
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [5285, 152]
                }
              ]
            },
            {
              name: "line",
              pos: [5370, 195],
              length: 73,
              children: [
                {
                  name: "switch",
                  pos: [5440, 195],
                  direction: "right",
                  state: 0,
                  label: "1641D外",
                  children: [
                    {
                      name: "entry",
                      direction: "left",
                      pos: [5480, 187]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [5350.5, 236],
              state: 1,
              label: "1641",
              children: [
                {
                  name: "line",
                  pos: [5370, 245],
                  length: 73,
                  children: [
                    {
                      name: "switch",
                      pos: [5440, 245],
                      direction: "right",
                      state: 0,
                      label: "1641D内",
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [5480, 237]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  state: 1,
                  pos: [5342, 265],
                  label: "164",
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [5350.5, 319],
                      label: "1643",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [5211, 322],
                          length: 400,
                          linkTo: ["杜儿坪-1602"],
                          children: [
                            {
                              name: 'line',
                              direction: 'vertical',
                              pos: [5496, 330],
                              length: 25,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [5480, 378],
                                  label: "南PT刀闸",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [5474, 395],
                                      length: 50,
                                      children: [
                                        {
                                          name: "IPT",
                                          direction: "top",
                                          pos: [5471, 430],
                                          label: "南PT"
                                        },
                                        {
                                          name: "capacitor",
                                          direction: "bottom",
                                          pos: [5500, 424],
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [5516, 460]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                              ]
                            },
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [5499, 343],
                              length: 150,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [5632, 370],
                                  lpos: [5660, 398],
                                  label: "南PT地刀闸",
                                  state: 0,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [5639, 380]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [5350.5, 358],
                              label: "1623",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [5342, 405],
                                  label: "162",
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [5350.5, 470],
                                      label: "1621",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [5368, 500],
                                          label: "2#",
                                          labelDirection: "left",
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [5374, 510],
                                          color: 2,
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "right",
                                              pos: [5384, 510],
                                              label: "6301",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  pos: [5440, 510],
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      direction: "horizontal",
                                                      state: 1,
                                                      pos: [5450, 510],
                                                      label: "630",
                                                      children: [
                                                        {
                                                          name: "switch",
                                                          direction: "right",
                                                          pos: [5522, 510],
                                                          label: "6303",
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              pos: [5568, 510],
                                                              length: 30,
                                                              children: [
                                                                {
                                                                  name: "lineBold",
                                                                  pos: [5598, 490],
                                                                  direction: "vertical",
                                                                  length: 100,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [5215, 560],
                                                                      direction: "horizontal",
                                                                      length: 385,
                                                                      linkTo: ["杜儿坪-6002"]
                                                                    }
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
                                          pos: [5362, 510],
                                          color: 1,
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [5344, 547],
                                              label: "3211",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "line",
                                                  direction: "vertical",
                                                  pos: [5360.5, 566],
                                                  length: 20,
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "horizontal",
                                                      pos: [5050, 585],
                                                      length: 470,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "vertical",
                                                          pos: [5049, 585],
                                                          length: 30,
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [5004, 660],
                                                              label: "321",
                                                              children: [
                                                                {
                                                                  name: "directionDouble",
                                                                  direction: "vertical",
                                                                  pos: [5019, 730],
                                                                  label: "3213",
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      pos: [4910, 760],
                                                                      direction: "horizontal",
                                                                      length: 200,
                                                                      linkTo: ["杜儿坪-2012"],
                                                                      children: [
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [4965, 815],
                                                                          label: "317杜中2#",
                                                                          labelDirection: "vertical",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5010, 860],
                                                                              length: 280,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  pos: [5010, 1140],
                                                                                  direction: "horizontal",
                                                                                  length: 550,
                                                                                  code: "317-杜中2#"
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [4990, 860],
                                                                                  length: 20,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [4970, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [4978, 900]
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
                                                                          label: "313杜官线",
                                                                          labelDirection: "vertical",
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [5045, 815],
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5090, 860],
                                                                              label: "杜官2#进线",
                                                                              length: 260,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5080, 860],
                                                                                  length: 10,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [5060, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [5067, 900]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  pos: [5090, 1120],
                                                                                  length: 760,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      direction: "vertical",
                                                                                      pos: [5850, 1120],
                                                                                      length: 100,
                                                                                      code: "313-杜官线"
                                                                                    }
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
                                                          name: "line",
                                                          direction: "vertical",
                                                          pos: [5517, 585],
                                                          length: 30,
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [5472, 660],
                                                              label: "322",
                                                              children: [
                                                                {
                                                                  name: "directionDouble",
                                                                  direction: "vertical",
                                                                  pos: [5487, 730],
                                                                  label: "3223",
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      pos: [5430, 760],
                                                                      direction: "horizontal",
                                                                      length: 350,
                                                                      linkTo: ["杜儿坪-3022"],
                                                                      children: [
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [5485, 815],
                                                                          label: "318杜白2#",
                                                                          labelDirection: "vertical",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5530, 860],
                                                                              length: 190,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5510, 860],
                                                                                  length: 20,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [5495, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [5502, 900]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  pos: [5530, 1050],
                                                                                  length: 2227,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      pos: [7756, 1050],
                                                                                      length: 275,
                                                                                      direction: "vertical",
                                                                                      code: "318-杜白2#"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [5555, 815],
                                                                          label: "320杜新线",
                                                                          labelDirection: "vertical",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5600, 860],
                                                                              length: 120,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5585, 860],
                                                                                  length: 15,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [5570, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [5578, 900]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  pos: [3995, 980],
                                                                                  length: 1608,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      direction: "vertical",
                                                                                      pos: [3995, 980],
                                                                                      length: 337,
                                                                                      linkTo: ["新华站-432"]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [5625, 815],
                                                                          label: "324杜北线",
                                                                          labelDirection: "vertical",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5670, 860],
                                                                              length: 990,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5655, 860],
                                                                                  length: 15,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [5640, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [5645, 900]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5670, 1848],
                                                                                  length: 335,
                                                                                  code: "324-杜北线"
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "directionDoubleResistor",
                                                                          state: 1,
                                                                          direction: "vertical",
                                                                          pos: [5695, 815],
                                                                          label: "314杜风西线",
                                                                          labelDirection: "vertical",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [5740, 860],
                                                                              length: 130,
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5725, 860],
                                                                                  length: 15,
                                                                                  children: [
                                                                                    {
                                                                                      name: "switch",
                                                                                      direction: "top",
                                                                                      pos: [5710, 890],
                                                                                      state: 0,
                                                                                      children: [
                                                                                        {
                                                                                          name: "entry",
                                                                                          direction: "top",
                                                                                          pos: [5715, 900]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  name: "line",
                                                                                  direction: "horizontal",
                                                                                  pos: [5740, 990],
                                                                                  length: 800,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      direction: "vertical",
                                                                                      pos: [6540, 990],
                                                                                      length: 150,
                                                                                      code: "314-杜风西线"
                                                                                    }
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
      stationName: "玉门站",
      label: "玉门",
      lpos: [4790, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [4670, 1030],
          direction: "vertical",
          length: 265,
          label: "河玉1#进线",
          lpos: [4645, 1030],
          labelDirection: "vertical",
          linkTo: ["460-河玉线"],
          children: [
            {
              name: "switch",
              direction: "right",
              pos: [4627, 1293],
              state: 1,
              label: "35S1",
              lpos: [4600, 1285],
              children: [
                {
                  name: "PT",
                  direction: "top",
                  pos: [4620, 1293]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [4654, 1322],
              state: 1,
              label: "3511",
              children: [
                {
                  name: "resistor",
                  state: 1,
                  direction: "vertical",
                  pos: [4645.5, 1348],
                  label: "351",
                  noLine: true,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [4654, 1399],
                      state: 1,
                      label: "3512",
                      lpos: [4600, 1399],
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [4554, 1418],
                          length: 160,
                          children: [
                            {
                              name: "lineSwitch",
                              direction: "right",
                              pos: [4714, 1418],
                              state: 1,
                              label: "3501",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [4730, 1418],
                                  length: 60,
                                  children: [
                                    {
                                      name: "resistor",
                                      state: 0,
                                      direction: "horizontal",
                                      pos: [4770, 1421],
                                      label: "350",
                                      noLine: true,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [4822, 1418],
                                          length: 50,
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              direction: "right",
                                              pos: [4870, 1418],
                                              state: 1,
                                              label: "3502",
                                              code: "玉门站-3502"
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
                              pos: [4654, 1454],
                              state: 1,
                              label: "3513",
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [4645.5, 1501],
                                  label: "353",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [4672, 1552],
                                      label: "1#",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "vertical",
                                          pos: [4672, 1562],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              state: 1,
                                              direction: "vertical",
                                              pos: [4625, 1612],
                                              label: "6101",
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [4634, 1657],
                                                  length: 130,
                                                  children: [
                                                    {
                                                      name: "coilDoubleEmpty",
                                                      state: 0,
                                                      direction: "horizontal",
                                                      pos: [4760, 1657],
                                                      label: "6001",
                                                      children: [
                                                        {
                                                          name: "coilDouble",
                                                          direction: "right",
                                                          pos: [4840, 1657],
                                                          state: 1,
                                                          label: "6002",
                                                          code: "玉门站-6002"
                                                        }
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
                              pos: [4574, 1454],
                              state: 1,
                              label: "3561",
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [4565.5, 1501],
                                  label: "356",
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [4574, 1572],
                                      state: 1,
                                      label: "3562",
                                      children: [
                                        {
                                          name: "line",
                                          direction: "vertical",
                                          pos: [4590.5, 1590],
                                          length: 235,
                                          label: "玉支线",
                                          labelDirection: "vertical",
                                          linkTo: ["水泥厂站-382"]
                                        }
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
      stationName: "玉门站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [4950, 1243],
          length: 50,
          label: "杜玉\n2#进线",
          labelDirection: "vertical",
          lpos: [4900, 1183],
          linkTo: ["309-杜玉线"],
          children: [
            {
              name: "switch",
              direction: "right",
              pos: [4950, 1293],
              state: 1,
              label: "35S2",
              lpos: [4960, 1285],
              children: [
                {
                  name: "PT",
                  direction: "top",
                  pos: [5003, 1293]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [4934, 1322],
              state: 1,
              label: "3521",
              children: [
                {
                  name: "resistor",
                  state: 1,
                  direction: "vertical",
                  pos: [4925.5, 1348],
                  label: "352",
                  noLine: true,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [4934, 1399],
                      state: 1,
                      label: "3522",
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [4885, 1418],
                          length: 160,
                          linkTo: ["玉门站-3502"],
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [4950, 1418],
                              length: 0,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [4934, 1454],
                                  state: 1,
                                  label: "3523",
                                  children: [
                                    {
                                      name: "resistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [4925.5, 1501],
                                      label: "354",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "vertical",
                                          pos: [4952, 1552],
                                          label: "2#",
                                          labelDirection: "left",
                                          children: [
                                            {
                                              name: "SSZPoint",
                                              direction: "vertical",
                                              pos: [4952, 1562],
                                              color: 2,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  state: 1,
                                                  direction: "vertical",
                                                  pos: [4905, 1612],
                                                  label: "6201",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [4810, 1657],
                                                      length: 180,
                                                      linkTo: ["玉门站-6002"]
                                                    }
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
                              name: "line",
                              direction: "vertical",
                              pos: [5030.5, 1590],
                              length: 0,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [5014, 1454],
                                  state: 1,
                                  label: "3551",
                                  children: [
                                    {
                                      name: "resistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [5005.5, 1501],
                                      label: "355",
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [5014, 1572],
                                          state: 1,
                                          label: "3552",
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [5030.5, 1590],
                                              length: 160,
                                              label: "玉磺线",
                                              labelDirection: "vertical",
                                              children: [
                                                {
                                                  name: "line",
                                                  direction: "vertical",
                                                  pos: [5030.5, 1748],
                                                  length: 246,
                                                  linkTo: ["磺厂站-361"]
                                                }
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
      stationName: "水泥厂站",
      label: "水泥厂",
      lpos: [4650, 2040],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [4590.5, 1823],
          label: "玉支2#进线",
          labelDirection: "vertical",
          lpos: [4605, 1763],
          length: 160,
          code: "水泥厂站-382",
          children: [
            {
              name: "switch",
              direction: "left",
              pos: [4604, 1968],
              state: 1,
              children: [
                {
                  name: "entry",
                  direction: "left",
                  pos: [4631, 1960],
                  label: "3821D"
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [4574, 2003],
              state: 1,
              label: "3821",
              children: [
                {
                  name: "directionDoubleResistor",
                  state: 1,
                  direction: "vertical",
                  pos: [4546, 2067],
                  label: "382",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [4566, 2108],
                      length: 145,
                      children: [
                        {
                          name: "directionDouble",
                          state: 1,
                          direction: "horizontal",
                          pos: [4622, 2111],
                          label: "3802"
                        },
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [4566, 2158],
                          label: "384",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [4612.5, 2208],
                              label: "2#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [4612.5, 2218],
                                  color: 2,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [4595, 2248],
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [4586, 2274],
                                          label: "602",
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [4595, 2333],
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [4531, 2353],
                                                  length: 100,
                                                  children: [
                                                    {
                                                      name: "lineSwitch",
                                                      direction: "right",
                                                      pos: [4628, 2353],
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [4641, 2353],
                                                          length: 30,
                                                          children: [
                                                            {
                                                              name: "resistor",
                                                              state: 0,
                                                              direction: "horizontal",
                                                              pos: [4646, 2357],
                                                              length: 30,
                                                              label: "600",
                                                              noLine: true,
                                                              code: "水泥厂站-600"
                                                            }
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
      stationName: "水泥厂站",
      color: 1,
      children: [
        {
          name: "line",
          pos: [4820, 1910],
          direction: "vertical",
          length: 78,
          label: "河支1#进线",
          lpos: [4820, 1905],
          linkTo: ["465-河支线"],
          children: [
            {
              name: "switch",
              direction: "top",
              pos: [4804, 2003],
              state: 1,
              label: "3811",
              children: [
                {
                  name: "directionDoubleResistor",
                  state: 1,
                  direction: "vertical",
                  pos: [4776, 2067],
                  label: "381",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [4756, 2108],
                      length: 120,
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          state: 0,
                          direction: "horizontal",
                          pos: [4710, 2108],
                          label: "3801"
                        },
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [4776, 2158],
                          label: "383",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [4822.5, 2208],
                              label: "1#",
                              labelDirection: "left",
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [4822.5, 2218],
                                  color: 2,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [4805, 2248],
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [4796, 2274],
                                          label: "601",
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [4805, 2334],
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [4741, 2353],
                                                  length: 100,
                                                  children: [
                                                    {
                                                      name: "lineSwitch",
                                                      direction: "right",
                                                      pos: [4722, 2353],
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [4695, 2353],
                                                          length: 30,
                                                          linkTo: ["水泥厂站-600"]
                                                        }
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
      stationName: "磺厂站",
      label: "磺厂",
      lpos: [5140, 2040],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [5030.5, 1976],
          length: 50,
          label: "玉磺1#进线",
          labelDirection: "vertical",
          lpos: [5050, 1706],
          code: "磺厂站-361",
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [4986, 2067],
              label: "361",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [4976, 2108],
                  length: 230,
                  children: [
                    {
                      name: "coilDouble",
                      direction: "horizontal",
                      pos: [5110, 2108],
                      label: "3601",
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          state: 0,
                          direction: "horizontal",
                          pos: [5206, 2108],
                          label: "360",
                          code: "磺厂站-360"
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      state: 1,
                      direction: "vertical",
                      pos: [4976, 2158],
                      label: "363",
                      children: [
                        {
                          name: "SSZPoint",
                          direction: "vertical",
                          pos: [5022.5, 2208],
                          label: "1#",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [5022.5, 2218],
                              color: 2,
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [4996, 2250],
                                  label: "6601",
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [5005, 2321],
                                      state: 1,
                                      label: "66011",
                                      children: [
                                        {
                                          name: "line",
                                          direction: "vertical",
                                          pos: [5021, 2337],
                                          length: 20,
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [5001, 2353],
                                              length: 100,
                                              children: [
                                                {
                                                  name: "lineSwitch",
                                                  direction: "right",
                                                  pos: [5100, 2353],
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [5121, 2353],
                                                      length: 40,
                                                      children: [
                                                        {
                                                          name: "resistor",
                                                          state: 0,
                                                          direction: "horizontal",
                                                          pos: [5136, 2357],
                                                          length: 30,
                                                          label: "6600",
                                                          noLine: true,
                                                          code: "磺厂站-6600"
                                                        }
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
      stationName: "磺厂站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [5320.5, 1901],
          label: "中磺2#进线",
          labelDirection: "vertical",
          lpos: [5295, 1905],
          length: 130,
          linkTo: ["中磺线-375"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [5276, 2067],
              label: "362",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [5256, 2108],
                  length: 160,
                  linkTo: ["磺厂站-360"],
                  children: [
                    {
                      name: "directionDoubleResistor",
                      state: 1,
                      direction: "vertical",
                      pos: [5276, 2158],
                      label: "6602",
                      children: [
                        {
                          name: "SSZPoint",
                          direction: "vertical",
                          pos: [5322.5, 2208],
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [5322.5, 2218],
                              label: "2#",
                              labelDirection: "left",
                              color: 2,
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [5296, 2250],
                                  label: "6602",
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [5305, 2321],
                                      state: 1,
                                      label: "66021",
                                      children: [
                                        {
                                          name: "line",
                                          direction: "vertical",
                                          pos: [5321, 2337],
                                          length: 20,
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [5241, 2353],
                                              length: 100,
                                              children: [
                                                {
                                                  name: "lineSwitch",
                                                  direction: "right",
                                                  pos: [5225, 2353],
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [5185, 2353],
                                                      length: 40,
                                                      linkTo: ["磺厂站-6600"]
                                                    }
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
                      state: 1,
                      direction: "vertical",
                      pos: [5346, 2067],
                      label: "366",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [5390, 2022],
                          length: 160,
                          label: "磺厂箱站",
                          stationName: "磺厂箱站",
                          lpos: [5456, 2012],
                          children: [
                            {
                              name: "directionDoubleResistor",
                              state: 1,
                              direction: "vertical",
                              pos: [5505, 2068],
                              label: "301",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [5505, 2108],
                                  length: 100,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [5505, 2158],
                                      label: "302",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "vertical",
                                          pos: [5552, 2208],
                                          children: [
                                            {
                                              name: "SSZPoint",
                                              direction: "vertical",
                                              pos: [5552, 2218],
                                              color: 2,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  state: 1,
                                                  direction: "vertical",
                                                  pos: [5505, 2268],
                                                  label: "601",
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "vertical",
                                                      pos: [5550, 2308],
                                                      length: 55,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [5505, 2353],
                                                          length: 100,
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
            }
          ]
        }
      ]
    },
    {
      color: 1,
      stationName: "中部站",
      label: "中部",
      lpos: [5350, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [5200, 1160],
          direction: "vertical",
          length: 170,
          label: "杜中1#进线",
          lpos: [5220, 1160],
          labelDirection: "vertical",
          linkTo: ["303-杜中1#"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [5155, 1373],
              label: "371",
              code: "中部站-371",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [5154, 1418],
                  length: 130,
                  children: [
                    {
                      name: "resistor",
                      state: 0,
                      direction: "horizontal",
                      pos: [5265, 1421],
                      label: "370",
                      noLine: true,
                      children: [
                        {
                          name: "coilDouble",
                          state: 1,
                          direction: "horizontal",
                          pos: [5420, 1418],
                          label: "3702",
                          code: "中部站-3702"
                        }
                      ]
                    },
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [5200, 1423],
                      length: 40,
                      children: [
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [5155, 1503],
                          label: "373",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [5202, 1552],
                              label: "1#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [5202, 1562],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [5155, 1612],
                                      label: "6011",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5164, 1657],
                                          length: 120,
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              state: 0,
                                              direction: "horizontal",
                                              pos: [5270, 1657],
                                              label: "6001",
                                              children: [
                                                {
                                                  name: "coilDouble",
                                                  state: 1,
                                                  direction: "horizontal",
                                                  pos: [5420, 1657],
                                                  label: "6002",
                                                  code: "中部站-6002"
                                                }
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
      stationName: "中部站",
      children: [
        {
          name: "line",
          pos: [5560, 1140],
          direction: "vertical",
          length: 200,
          label: "杜中2#进线",
          lpos: [5580, 1160],
          labelDirection: "vertical",
          linkTo: ["317-杜中2#"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [5515, 1373],
              label: "372",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [5318, 1418],
                  length: 350,
                  linkTo: ["中部站-3702"],
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [5530, 1423],
                      length: 40,
                      children: [
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [5485, 1503],
                          label: "374",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [5532, 1552],
                              labelDirection: "left",
                              label: "2#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [5532, 1562],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [5485, 1612],
                                      label: "6012",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5318, 1657],
                                          length: 250,
                                          linkTo: ["中部站-6002"]
                                        }
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
                      state: 1,
                      direction: "vertical",
                      pos: [5566, 1473],
                      label: "375",
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [5610.5, 1513],
                          length: 390,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [5320.5, 1901],
                              length: 292,
                              label: "中磺线",
                              lpos: [5630.5, 1601],
                              labelDirection: "vertical",
                              code: "中磺线-375"
                            }
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
      stationName: "杜儿坪瓦斯电厂",
      label: "杜儿坪瓦斯电厂",
      lpos: [5860, 2090],
      labelDirection: "vertical",
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [5780, 2010],
          length: 10,
          label: "杜瓦线",
          lpos: [5800, 1910],
          labelDirection: "vertical",
          linkTo: ["306-杜瓦线"],
          children: [
            {
              name: "switch",
              direction: "top",
              state: 1,
              pos: [5764, 2045],
              label: "491三工位",
              lpos: [5630, 2045],
              children: [
                {
                  name: "switch",
                  state: 1,
                  direction: "top",
                  pos: [5764, 2090],
                  label: "492三工位",
                  lpos: [5625, 2090],
                  children: [
                    {
                      name: "resistor",
                      state: 1,
                      direction: "vertical",
                      pos: [5755, 2137],
                      label: "492",
                      children: [
                        {
                          name: "SSZPoint",
                          direction: "vertical",
                          pos: [5781, 2190],
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [5781, 2200],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [5735, 2250],
                                  label: "P19",
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [5780, 2270],
                                      length: 110,
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5750, 2375],
                                          length: 60
                                        }
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