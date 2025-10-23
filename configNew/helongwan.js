var helongwan = {
  name: "河龙湾",
  code: "河龙湾",
  v: "110KV",
  label: "河龙湾",
  lpos: [6720, 220],
  lsize: 40,
  powerToChild: false,
  children: [
    {
      code: "迎杜支线",
      color: 0,
      // powerFrom: ["迎杜支线"],
      stationName: "河龙湾110kV站",
      isPowerToParent: false,
      children: [
        {
          name: "line",
          pos: [6600, 110],
          direction: "vertical",
          length: 100,
          label: "迎杜支线",
          lpos: [6470, 150],
          linkTo: ["迎杜线-152"],
          children: [
            {
              name: "switch",
              direction: "left",
              pos: [6564, 180],
              state: 0,
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [6541, 170],
                  label: "194线0"
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [6584, 237],
              label: "1941",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [6600, 270],
                  length: 40,
                  children: [
                    {
                      name: "switch",
                      direction: "left",
                      pos: [6650, 270],
                      label: "19410",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [6680, 260]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  state: 0,
                  direction: "vertical",
                  pos: [6575, 285],
                  label: "194",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [6560, 315],
                      length: 40,
                      children: [
                        {
                          name: "switch",
                          direction: "left",
                          pos: [6524, 315],
                          label: "19430",
                          state: 0,
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [6501, 308]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      direction: "top",
                      pos: [6584, 355],
                      label: "1943",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [6520, 372],
                          length: 250,
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [6584, 405],
                              label: "1923",
                              state: 1,
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [6600, 430],
                                  length: 65,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [6646, 458],
                                      label: "1923\nKD",
                                      labelDirection: "vertical",
                                      lpos: [6696, 428],
                                      state: 0,
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [6654, 470]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [6575, 450],
                                  label: "192",
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [6463, 455],
                                      length: 135,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [6446, 483],
                                          label: "1921KD",
                                          state: 0,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [6455, 495]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [6584, 520],
                                      label: "1921",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [6603, 550],
                                          label: "2#",
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [6615, 558],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [6610, 565],
                                              length: 110,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  state: 1,
                                                  direction: "vertical",
                                                  pos: [6565, 720],
                                                  label: "402",
                                                  children: [
                                                    {
                                                      name: "directionDouble",
                                                      direction: "vertical",
                                                      pos: [6580, 795],
                                                      label: "4023",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [6500, 825],
                                                          length: 330,
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [6500, 870],
                                                              label: "468河机线",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [6545, 910],
                                                                  length: 25,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      direction: "horizontal",
                                                                      pos: [6335, 930],
                                                                      length: 210,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [6335, 294],
                                                                          length: 640,
                                                                          code: "468-河机线"
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
                                                              pos: [6600, 880],
                                                              label: "460河玉线",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [6645, 910],
                                                                  direction: "vertical",
                                                                  length: 120,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [4670, 1030],
                                                                      length: 1978,
                                                                      code: "460-河玉线"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [6700, 880],
                                                              label: "466河虎2#",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [6745, 900],
                                                                  length: 190,
                                                                  direction: "vertical",
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [6745, 1090],
                                                                      length: 210,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [6955, 1090],
                                                                          length: 200,
                                                                          code: "466河虎2#"
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
                                                              pos: [6749, 825],
                                                              label: "4002",
                                                              children: [
                                                                {
                                                                  name: "coilDoubleEmpty",
                                                                  direction: "horizontal",
                                                                  pos: [6828, 825],
                                                                  label: "400",
                                                                  state: 0,
                                                                  code: "河龙湾-400"
                                                                }
                                                              ]
                                                            }
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
                                          pos: [6590, 557],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              state: 1,
                                              direction: "horizontal",
                                              pos: [6490, 557],
                                              label: '602',
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [6440, 557],
                                                  label: "6023",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      pos: [6430, 530],
                                                      direction: "vertical",
                                                      length: 120,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [6430, 630],
                                                          length: 270,
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              direction: "horizontal",
                                                              pos: [6690, 630],
                                                              label: "6002",
                                                              children: [
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  state: 0,
                                                                  direction: "horizontal",
                                                                  pos: [6750, 630],
                                                                  label: "600",
                                                                  code: "河龙湾-600"
                                                                }
                                                              ]
                                                            }
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
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [6720, 405],
                              label: "1902",
                              state: 1,
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [6738, 420],
                                  length: 80,
                                  children: [
                                    {
                                      name: "resistor",
                                      state: 1,
                                      direction: "horizontal",
                                      pos: [6818, 420],
                                      label: "190",
                                      code: "河龙湾站-190"
                                    }
                                  ]
                                },
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [6720, 450],
                                  label: "1902KD",
                                  state: 0,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [6728, 460]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      code: "晋湾线",
      stationName: "河龙湾110kV站",
      powerFrom: ["晋湾线"],
      color: 0,
      children: [
        {
          name: "stationInLine",
          pos: [6941.5, 110],
          direction: "vertical",
          length: 102,
          label: "晋湾线",
          lpos: [6941.5, 150],
          children: [
            {
              name: "line",
              direction: "horizontal",
              pos: [6890, 180],
              length: 52,
              children: [
                {
                  name: "switch",
                  direction: "left",
                  pos: [6855, 180],
                  state: 0,
                  label: "193线0",
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [6832, 170],
                      label: "引自晋阳229kV站 189"
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [6925, 237],
              state: 1,
              children: [
                {
                  name: "resistor",
                  state: 1,
                  direction: "vertical",
                  pos: [6916, 285],
                  label: "193",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [6940, 270],
                      length: 56,
                      children: [
                        {
                          name: "switch",
                          direction: "left",
                          pos: [7006, 270],
                          label: "19310",
                          state: 0,
                          children: [
                            {
                              name: "entry",
                              direction: "left",
                              pos: [7035, 260]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [6890, 315],
                      length: 52,
                      children: [
                        {
                          name: "switch",
                          direction: "left",
                          pos: [6855, 315],
                          label: "19330",
                          state: 0,
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [6832, 308]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      direction: "top",
                      pos: [6925, 355],
                      label: "1933",
                      state: 1,
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [6900, 372],
                          length: 300,
                          linkTo: ["河龙湾站-1953"],
                          code: "10086",
                          children: [
                            {
                              name: "switch",
                              direction: "top",
                              pos: [6895, 405],
                              label: "1901",
                              state: 1,
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [6888, 420],
                                  length: 26,
                                  linkTo: ["河龙湾站-190"]
                                },
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [6895, 450],
                                  label: "1901KD",
                                  state: 0,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [6903, 460]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              direction: "top",
                              pos: [7004, 405],
                              label: "1913",
                              state: 1,
                              children: [
                                {
                                  name: "resistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [6995, 450],
                                  label: "191",
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [6923, 480],
                                      length: 100,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [6906, 508],
                                          label: "1911KD",
                                          state: 0,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [6915, 520]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [7004, 520],
                                      label: "1911",
                                      state: 1,
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [7023, 550],
                                          label: "1#",
                                          labelDirection: "left",
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [7035, 557],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              state: 1,
                                              direction: "horizontal",
                                              pos: [7044, 557],
                                              label: "601",
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [7130, 557],
                                                  label: "6013",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      pos: [7190, 510],
                                                      direction: "vertical",
                                                      length: 150,
                                                      linkTo: ["河龙湾-600"],
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [6830, 630],
                                                          length: 370,
                                                        },
                                                        {
                                                          name: "directionDouble",
                                                          direction: "horizontal",
                                                          pos: [7200, 640],
                                                          label: "6302",
                                                          length: 90,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "vertical",
                                                              pos: [7290, 640],
                                                              length: 70,
                                                              children: [
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  state: 1,
                                                                  direction: "horizontal",
                                                                  pos: [7200, 710],
                                                                  label: "630",
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      pos: [7190, 700],
                                                                      direction: "vertical",
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
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
                                          pos: [7010, 558],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [7006, 565],
                                              length: 110,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  state: 1,
                                                  direction: "vertical",
                                                  pos: [6961, 720],
                                                  label: "401",
                                                  children: [
                                                    {
                                                      name: "directionDouble",
                                                      direction: "vertical",
                                                      pos: [6976, 795],
                                                      label: "4013",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [6878, 825],
                                                          length: 400,
                                                          linkTo: ["河龙湾-400"],
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [6870, 880],
                                                              label: "463河安线",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [6915, 900],
                                                                  direction: "vertical",
                                                                  length: 947,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [6630, 1845],
                                                                      length: 285,
                                                                      label: "河安1#进线",
                                                                      code: "463-河安线"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              state: 1,
                                                              direction: "vertical",
                                                              pos: [6970, 880],
                                                              label: "465河支线",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [7015, 900],
                                                                  direction: "vertical",
                                                                  length: 140,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [5120, 1040],
                                                                      length: 1898,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          pos: [5120, 1040],
                                                                          direction: "vertical",
                                                                          length: 872,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              pos: [4820, 1910],
                                                                              length: 300,
                                                                              code: "465-河支线"
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
                                                              pos: [7070, 880],
                                                              label: "471河官线",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [7115, 900],
                                                                  direction: "vertical",
                                                                  length: 170,
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      pos: [6051.5, 1070],
                                                                      length: 1880,
                                                                      code: "471-河官线",
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [6051.5, 1070],
                                                                          length: 140
                                                                        },
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [7931, 1070],
                                                                          length: 120
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
                                                              pos: [7195, 880],
                                                              label: "461河虎1#",
                                                              labelDirection: "vertical",
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  pos: [7240, 900],
                                                                  direction: "vertical",
                                                                  length: 350,
                                                                  code: "461-河虎1#"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
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
                                      pos: [7020, 430],
                                      length: 55,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [7056, 458],
                                          label: "1913KD",
                                          state: 0,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [7064, 470]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      code: "西湾线",
      stationName: "河龙湾110kV站",
      powerFrom: ["西湾线"],
      color: 0,
      children: [
        {
          name: "stationInLine",
          pos: [7170, 110],
          direction: "vertical",
          length: 100,
          label: "西湾线",
          lpos: [7170, 150],
          children: [
            {
              name: "line",
              pos: [7120, 180],
              length: 50,
              children: [
                {
                  name: "switch",
                  direction: "left",
                  label: "195线0",
                  pos: [7084, 180],
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [7061, 170]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [7154, 237],
              label: "1951",
              state: 1,
              children: [
                {
                  name: "line",
                  pos: [7170, 270],
                  length: 60,
                  children: [
                    {
                      name: "switch",
                      direction: "left",
                      pos: [7235, 270],
                      label: "19510",
                      state: 0,
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [7264, 265]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  state: 1,
                  direction: "vertical",
                  pos: [7145, 285],
                  label: "195",
                  children: [
                    {
                      name: "line",
                      pos: [7120, 315],
                      length: 50,
                      children: [
                        {
                          name: "switch",
                          direction: "left",
                          pos: [7084, 315],
                          label: "19530",
                          state: 0,
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [7061, 308]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      direction: "top",
                      pos: [7154, 355],
                      label: "1953",
                      state: 1,
                      code: "河龙湾站-1953"
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
      stationName: "官地坑口站",
      label: "官地坑口",
      lpos: [5885, 1320],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [5850.5, 1210],
          direction: "vertical",
          length: 70,
          label: "杜官1#进线",
          labelDirection: "vertical",
          lpos: [5825, 1160],
          linkTo: ["313-杜官线"],
          children: [
            {
              name: "line",
              pos: [5850, 1180],
              length: 0,
              children: [
                {
                  name: "switch",
                  pos: [5850, 1280],
                  direction: "horizontal",
                  state: 1
                },
                {
                  name: "entry",
                  pos: [5890, 1272],
                  direction: "left",
                  label: "3411D"
                }
              ]
            },
            {
              name: "switch",
              pos: [5834, 1299],
              direction: "bottom",
              state: 1,
              label: "3411",
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [5806, 1373],
                  state: 1,
                  label: "341",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [5790, 1418],
                      length: 100,
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          direction: "horizontal",
                          pos: [5890, 1418],
                          label: "340",
                          state: 0,
                          children: [
                            {
                              name: "coilDouble",
                              direction: "horizontal",
                              pos: [5970, 1418],
                              label: "3402",
                              code: "官地坑口站-3402"
                            }
                          ]
                        },
                        {
                          name: "directionDoubleResistor",
                          direction: "vertical",
                          pos: [5806, 1473],
                          state: 1,
                          label: '343',
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [5852, 1525],
                              label: "1#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [5852, 1535],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      state: 1,
                                      pos: [5806, 1585],
                                      label: "601",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5830, 1625],
                                          length: 60,
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [5887, 1625],
                                              label: "600",
                                              state: 0,
                                              children: [
                                                {
                                                  name: "coilDouble",
                                                  direction: "horizontal",
                                                  pos: [5969, 1625],
                                                  label: "6002",
                                                  code: "官地坑口站-6002"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "官地坑口站",
      children: [
        {
          name: "line",
          pos: [6051.5, 1210],
          direction: "vertical",
          length: 75,
          label: "河官\n2#进线",
          labelDirection: "vertical",
          lpos: [6100, 1130],
          linkTo: ["471-河官线"],
          children: [
            {
              name: "switch",
              pos: [6054, 1250],
              direction: "right",
              label: "3421D",
              state: 1,
              children: [
                {
                  name: "entry",
                  pos: [6091, 1242],
                  direction: "left"
                }
              ]
            },
            {
              name: "switch",
              pos: [6035, 1300],
              direction: "bottom",
              state: 1,
              label: "3421",
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [6007, 1374],
                  state: 1,
                  label: "342",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [5940, 1418],
                      length: 220,
                      linkTo: ["官地坑口站-3402"],
                      children: [
                        {
                          name: "directionDoubleResistor",
                          direction: "vertical",
                          pos: [6080, 1374],
                          state: 1,
                          label: "346",
                          children: [
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [6125, 1299],
                              length: 30,
                              label: "官北线",
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [6126, 1299],
                                  length: 55,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [6180, 1299],
                                      length: 683,
                                      label: "官北1#进线",
                                      code: "官地坑口站-346"
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
                          pos: [6047, 1473],
                          state: 1,
                          label: "344",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [6093, 1525],
                              label: "2#",
                              labelDirection: "left",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [6093, 1535],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      direction: "vertical",
                                      pos: [6047, 1585],
                                      state: 1,
                                      label: "602",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [5935, 1625],
                                          length: 180,
                                          linkTo: ["官地坑口站-6002"]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "北石崖站",
      label: "北石崖",
      lpos: [6030, 2060],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [6000, 1847],
          direction: "vertical",
          length: 105,
          label: "杜北2#进线",
          lpos: [5850, 1840],
          linkTo: ["324-杜北线"],
          children: [
            {
              name: "switch",
              pos: [6005, 1912],
              direction: "right",
              label: "5421D",
              state: 1,
              children: [
                {
                  name: "entry",
                  pos: [6045, 1907],
                  direction: "left"
                }
              ]
            },
            {
              name: "switch",
              pos: [5983, 1967],
              direction: "bottom",
              label: "5421",
              state: 1,
              children: [
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [5975, 2007],
                  label: "542",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      pos: [5983, 2068],
                      direction: "bottom",
                      label: "542三工位",
                      lpos: [5853, 2082],
                      state: 1,
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [5983, 2088],
                          length: 20,
                          label: "540三工位",
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [5973, 2081]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [6000, 2098],
                          length: 10,
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [5963, 2108],
                              length: 60,
                              children: [
                                {
                                  name: "lineSwitch",
                                  direction: "right",
                                  pos: [6020, 2108],
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [6033, 2108],
                                      length: 30,
                                      children: [
                                        {
                                          name: "resistor",
                                          direction: "horizontal",
                                          pos: [6040, 2112],
                                          state: 0,
                                          noLine: true,
                                          label: "540",
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [6092, 2108],
                                              length: 30,
                                              children: [
                                                {
                                                  name: "lineSwitch",
                                                  direction: "right",
                                                  pos: [6120, 2108],
                                                  state: 1,
                                                  label: "5401",
                                                  labelDirection: "bottom",
                                                  code: "北石崖-5401"
                                                }
                                              ]
                                            }
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
                          pos: [5983, 2130],
                          direction: "bottom",
                          state: 1,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [5983, 2150],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [5973, 2143]
                                }
                              ]
                            },
                            {
                              name: "resistor",
                              direction: "vertical",
                              pos: [5975, 2170],
                              length: 20,
                              state: 1,
                              label: "544",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [6002, 2219],
                                  label: "2#",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [6002, 2229],
                                      color: 2,
                                      children: [
                                        {
                                          name: "directionDoubleResistor",
                                          direction: "vertical",
                                          pos: [5956, 2278],
                                          state: 1,
                                          label: '602',
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [5956, 2317],
                                              length: 130,
                                              linkTo: ["北石崖站-6002"]
                                            }
                                          ]
                                        },
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "官地坑口站",
      children: [
        {
          name: "line",
          pos: [6180, 1863],
          direction: "vertical",
          length: 85,
          label: "官北1#进线",
          lpos: [6160, 1740],
          labelDirection: "vertical",
          linkTo: ["官地坑口站-346"],
          children: [
            {
              name: "switch",
              pos: [6185, 1912],
              direction: "right",
              label: "5411D",
              state: 1,
              children: [
                {
                  name: "entry",
                  pos: [6225, 1907],
                  direction: "left"
                }
              ]
            },
            {
              name: "switch",
              pos: [6163, 1967],
              direction: "bottom",
              label: "5411",
              state: 1,
              children: [
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [6155, 2007],
                  label: "541",
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      pos: [6163, 2068],
                      direction: "bottom",
                      state: 1,
                      label: "541三工位",
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [6163, 2088],
                          length: 20,
                          label: "5431",
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [6153, 2081]
                            }
                          ]
                        },
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [6180, 2098],
                          length: 10,
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [6137, 2108],
                              length: 55,
                              linkTo: ["北石崖-5401"],
                              children: [
                                {
                                  name: "line",
                                  direction: "vertical",
                                  pos: [6180, 2117],
                                  length: 10,
                                  children: [
                                    {
                                      name: "switch",
                                      pos: [6163, 2130],
                                      direction: "bottom",
                                      state: 1,
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [6163, 2150],
                                          length: 20,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "right",
                                              pos: [6153, 2143]
                                            }
                                          ]
                                        },
                                        {
                                          name: "resistor",
                                          direction: "vertical",
                                          pos: [6155, 2170],
                                          length: 20,
                                          state: 1,
                                          label: "543",
                                          children: [
                                            {
                                              name: "SSZPoint",
                                              direction: "vertical",
                                              pos: [6182, 2220],
                                              label: "1#",
                                              labelDirection: "left",
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  direction: "vertical",
                                                  pos: [6182, 2230],
                                                  color: 2,
                                                  children: [
                                                    {
                                                      name: "directionDoubleResistor",
                                                      direction: "vertical",
                                                      pos: [6136, 2279],
                                                      state: 1,
                                                      label: 601,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [6136, 2317],
                                                          length: 70,
                                                          children: [
                                                            {
                                                              name: "coilDoubleEmpty",
                                                              direction: "horizontal",
                                                              pos: [6086, 2317],
                                                              state: 0,
                                                              label: "600",
                                                              children: [
                                                                {
                                                                  name: "coilDouble",
                                                                  direction: "horizontal",
                                                                  pos: [6010, 2317],
                                                                  label: "6002",
                                                                  code: "北石崖站-6002"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "风峪沟站",
      label: "风峪沟",
      lpos: [6600, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [6540, 1140],
          direction: "vertical",
          length: 100,
          label: "杜风西\n1#进线",
          lpos: [6490, 1140],
          labelDirection: "vertical",
          linkTo: ["314-杜风西线"],
          children: [
            {
              name: "line",
              pos: [6510, 1251],
              direction: "horizontal",
              length: 30,
              children: [
                {
                  name: "entry",
                  pos: [6495, 1244],
                  direction: "right",
                  label: "4211D"
                }
              ]
            },
            {
              name: "switch",
              pos: [6523, 1251],
              direction: "bottom",
              label: "4211",
              state: 1,
              children: [
                {
                  name: "line",
                  pos: [6540, 1281],
                  direction: "vertical",
                  length: 20,
                  children: [
                    {
                      name: "line",
                      pos: [6540, 1301],
                      direction: "horizontal",
                      length: 30,
                      children: [
                        {
                          name: "entry",
                          pos: [6559, 1294],
                          direction: "left",
                          label: "4213D"
                        }
                      ]
                    },
                    {
                      name: "switch",
                      pos: [6523, 1319],
                      direction: "bottom",
                      label: "4213",
                      state: 1,
                      children: [
                        {
                          name: "resistor",
                          pos: [6515, 1375],
                          direction: "vertical",
                          length: 50,
                          state: 1,
                          label: "421",
                          children: [
                            {
                              name: "lineBold",
                              pos: [6450, 1415],
                              direction: "horizontal",
                              length: 150,
                              linkTo: ["风峪沟站-4201"],
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [6490, 1452],
                                  state: 1,
                                  label: "423",
                                  length: 20,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "bottom",
                                      pos: [6498, 1512],
                                      label: "4231",
                                      state: 1,
                                      children: [
                                        {
                                          name: "line",
                                          pos: [6514, 1541],
                                          direction: "vertical",
                                          length: 16,
                                          label: "SF7-20000",
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [6518, 1542],
                                              length: 20,
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "left",
                                                  pos: [6532, 1533],
                                                  label: "4231D"
                                                }
                                              ]
                                            },
                                            {
                                              name: "SSZPoint",
                                              direction: "vertical",
                                              pos: [6515, 1565],
                                              label: "1#",
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  direction: "vertical",
                                                  pos: [6515, 1575],
                                                  color: 2,
                                                  children: [
                                                    {
                                                      name: "directionDoubleResistor",
                                                      direction: "vertical",
                                                      state: 1,
                                                      pos: [6469, 1624],
                                                      label: "601",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [6450, 1665],
                                                          length: 100,
                                                          children: [
                                                            {
                                                              name: "coilDoubleEmpty",
                                                              direction: "horizontal",
                                                              pos: [6540, 1665],
                                                              state: 0,
                                                              label: "600",
                                                              children: [
                                                                {
                                                                  name: "coilDouble",
                                                                  direction: "horizontal",
                                                                  pos: [6620, 1665],
                                                                  label: "6002",
                                                                  code: "风峪沟-6002"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
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
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [6440, 1372],
                                  state: 1,
                                  label: "425",
                                  length: 20,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "bottom",
                                      pos: [6448, 1332],
                                      label: "4253",
                                      state: 1,
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [6465, 1292],
                                          length: 20,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "left",
                                              pos: [6475, 1285],
                                              label: "4253D"
                                            }
                                          ]
                                        },
                                        {
                                          name: "line",
                                          direction: "vertical",
                                          pos: [6465, 1292],
                                          length: 40,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [6415, 1292],
                                              length: 50,
                                              children: [
                                                {
                                                  name: "line",
                                                  direction: "vertical",
                                                  pos: [6415, 1295],
                                                  length: 280,
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "horizontal",
                                                      pos: [6275, 1572],
                                                      length: 140,
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "vertical",
                                                          pos: [6275, 1532],
                                                          length: 40,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [6278, 1542],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "entry",
                                                                  direction: "left",
                                                                  pos: [6292, 1533],
                                                                  label: "4273D"
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "switch",
                                                              direction: "bottom",
                                                              pos: [6258, 1512],
                                                              label: "4273",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "resistor",
                                                                  direction: "vertical",
                                                                  pos: [6250, 1452],
                                                                  length: 20,
                                                                  state: 1,
                                                                  label: "427",
                                                                  children: [
                                                                    {
                                                                      name: "lineBold",
                                                                      direction: "horizontal",
                                                                      pos: [6255, 1417],
                                                                      length: 105,
                                                                      label: "旁母",
                                                                      children: [
                                                                        {
                                                                          name: "resistor",
                                                                          direction: "vertical",
                                                                          pos: [6235, 1368],
                                                                          label: "429",
                                                                          length: 20,
                                                                          state: 1,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              direction: "vertical",
                                                                              pos: [6260, 1410],
                                                                              length: 10,
                                                                              label: "旁母1#进线",
                                                                              children: [
                                                                                {
                                                                                  name: "switch",
                                                                                  direction: "bottom",
                                                                                  pos: [6244, 1312],
                                                                                  label: "4293",
                                                                                  state: 1,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      direction: "vertical",
                                                                                      pos: [6260, 1265],
                                                                                      length: 30,
                                                                                      children: [
                                                                                        {
                                                                                          name: "line",
                                                                                          direction: "horizontal",
                                                                                          pos: [6260, 1295],
                                                                                          length: 20,
                                                                                          children: [
                                                                                            {
                                                                                              name: "entry",
                                                                                              direction: "left",
                                                                                              pos: [6270, 1288]
                                                                                            }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          name: "line",
                                                                                          direction: "horizontal",
                                                                                          pos: [6250, 1265],
                                                                                          length: 10,
                                                                                          children: [
                                                                                            {
                                                                                              name: "line",
                                                                                              direction: "vertical",
                                                                                              pos: [6250, 1265],
                                                                                              length: 580,
                                                                                              children: [
                                                                                                {
                                                                                                  name: "line",
                                                                                                  direction: "horizontal",
                                                                                                  pos: [6250, 1845],
                                                                                                  length: 123,
                                                                                                  label: "风安2#进线",
                                                                                                  code: "风安2#进线"
                                                                                                }
                                                                                              ]
                                                                                            }
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
                                                                          pos: [6339, 1382],
                                                                          length: 35,
                                                                          children: [
                                                                            {
                                                                              name: "resistor",
                                                                              direction: "vertical",
                                                                              pos: [6314, 1342],
                                                                              state: 0,
                                                                              label: "428",
                                                                              length: 20,
                                                                              children: [
                                                                                {
                                                                                  name: "switch",
                                                                                  pos: [6323, 1300],
                                                                                  direction: "bottom",
                                                                                  label: "4283",
                                                                                  state: 1,
                                                                                  children: [
                                                                                    {
                                                                                      name: "line",
                                                                                      pos: [6340, 1235],
                                                                                      direction: "vertical",
                                                                                      length: 50,
                                                                                      children: [
                                                                                        {
                                                                                          name: "line",
                                                                                          pos: [6340, 1280],
                                                                                          direction: "horizontal",
                                                                                          length: 20,
                                                                                          label: "旁母2#进线",
                                                                                          children: [
                                                                                            {
                                                                                              name: "entry",
                                                                                              pos: [6350, 1273],
                                                                                              direction: "left"
                                                                                            }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          name: "line",
                                                                                          pos: [6340, 1235],
                                                                                          direction: "horizontal",
                                                                                          length: 500,
                                                                                          code: "旁母-428"
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      label: "风峪沟站",
      children: [
        {
          name: "line",
          pos: [6740, 1190],
          direction: "vertical",
          length: 50,
          label: "杜风东\n2#进线",
          lpos: [6690, 1140],
          labelDirection: "vertical",
          linkTo: ["310-杜风东线"],
          children: [
            {
              name: "line",
              pos: [6710, 1251],
              direction: "horizontal",
              length: 30,
              children: [
                {
                  name: "entry",
                  pos: [6695, 1244],
                  direction: "right",
                  label: "4221D"
                }
              ]
            },
            {
              name: "switch",
              pos: [6723, 1251],
              direction: "bottom",
              label: "4221",
              state: 1,
              children: [
                {
                  name: "line",
                  pos: [6740, 1281],
                  direction: "vertical",
                  length: 20,
                  children: [
                    {
                      name: "line",
                      pos: [6740, 1301],
                      direction: "horizontal",
                      length: 30,
                      children: [
                        {
                          name: "entry",
                          pos: [6759, 1294],
                          direction: "left",
                          label: "4223D"
                        }
                      ]
                    },
                    {
                      name: "switch",
                      pos: [6723, 1319],
                      direction: "bottom",
                      label: "4223",
                      state: 1,
                      children: [
                        {
                          name: "resistor",
                          pos: [6715, 1375],
                          direction: "vertical",
                          length: 50,
                          state: 1,
                          label: "422",
                          children: [
                            {
                              name: "resistor",
                              pos: [6715, 1375],
                              direction: "vertical",
                              length: 50,
                              state: 1,
                              label: "422",
                              children: [
                                {
                                  name: "lineBold",
                                  pos: [6650, 1415],
                                  direction: "horizontal",
                                  length: 210,
                                  children: [
                                    {
                                      name: "resistor",
                                      direction: "vertical",
                                      pos: [6750, 1452],
                                      state: 1,
                                      length: 20,
                                      label: "424",
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "bottom",
                                          pos: [6758, 1512],
                                          label: "4241",
                                          state: 1,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [6778, 1542],
                                              length: 20,
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "left",
                                                  pos: [6792, 1533],
                                                  label: "4241D"
                                                }
                                              ]
                                            },
                                            {
                                              name: "line",
                                              pos: [6774, 1541],
                                              direction: "vertical",
                                              length: 20,
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  direction: "vertical",
                                                  pos: [6775, 1566],
                                                  label: "2#",
                                                  labelDirection: 'left',
                                                  children: [
                                                    {
                                                      name: "SSZPoint",
                                                      direction: "vertical",
                                                      pos: [6775, 1576],
                                                      color: 2,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          state: 1,
                                                          pos: [6729, 1624],
                                                          label: "602",
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [6590, 1664],
                                                              length: 220,
                                                              linkTo: ["风峪沟-6002"]
                                                            }
                                                          ]
                                                        }
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
                                      name: "resistor",
                                      pos: [6815, 1375],
                                      direction: "vertical",
                                      length: 50,
                                      state: 1,
                                      label: "426",
                                      children: [
                                        {
                                          name: "switch",
                                          pos: [6823, 1319],
                                          direction: "bottom",
                                          label: "4263",
                                          state: 1
                                        },
                                        {
                                          name: "line",
                                          pos: [6840, 1235],
                                          direction: "vertical",
                                          label: "旁母2#出线",
                                          length: 66,
                                          linkTo: ["旁母-428"],
                                          children: [
                                            {
                                              name: "line",
                                              pos: [6840, 1301],
                                              direction: "horizontal",
                                              length: 30,
                                              children: [
                                                {
                                                  name: "entry",
                                                  pos: [6859, 1294],
                                                  direction: "left",
                                                  label: "4263D"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      pos: [6673, 1441],
                                      direction: "bottom",
                                      label: "4202",
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          direction: "horizontal",
                                          pos: [6617, 1468],
                                          labelDirection: "bottom",
                                          state: 0,
                                          label: 420,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "horizontal",
                                              pos: [6580, 1468],
                                              length: 50,
                                              children: [
                                                {
                                                  name: "switch",
                                                  pos: [6563, 1441],
                                                  direction: "bottom",
                                                  state: 1,
                                                  label: "4201",
                                                  code: "风峪沟站-4201"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      label: "安家沟",
      stationName: "安家沟站",
      lpos: [6460, 2020],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [6370, 1847],
          direction: "vertical",
          length: 110,
          label: "风安2#进线",
          lpos: [6340, 1860],
          labelDirection: "vertical",
          linkTo: ["风安2#进线"],
          children: [
            {
              name: "line",
              pos: [6370, 1897],
              direction: "horizontal",
              length: 30,
              children: [
                {
                  name: "directionSingle",
                  pos: [6395, 1900],
                  direction: "left",
                  children: [
                    {
                      name: "entry",
                      pos: [6415, 1890],
                      direction: "left"
                    }
                  ]
                }
              ]
            },
            {
              name: "directionDouble",
              direction: "vertical",
              pos: [6345, 1927],
              length: 50,
              state: 1,
              label: "4821",
              children: [
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [6345, 1977],
                  state: 1,
                  label: "482",
                  children: [
                    {
                      name: "switch",
                      pos: [6353, 2035],
                      direction: "bottom",
                      label: "482三工位",
                      state: 1,
                      children: [
                        {
                          name: "line",
                          pos: [6370, 2055],
                          direction: "vertical",
                          length: 45,
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [6353, 2088],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [6343, 2081]
                                }
                              ]
                            },
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [6370, 2098],
                              length: 10,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [6343, 2108],
                                  length: 70,
                                  children: [
                                    {
                                      name: "lineSwitch",
                                      direction: "right",
                                      pos: [6412, 2108],
                                      state: 1,
                                      label: "480Q2",
                                      labelDirection: "bottom",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [6426, 2108],
                                          length: 40,
                                          children: [
                                            {
                                              name: "resistor",
                                              direction: "horizontal",
                                              pos: [6446, 2112],
                                              length: 20,
                                              label: "480",
                                              noLine: true,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [6499, 2108],
                                                  length: 40,
                                                  linkTo: ["安家沟站-480Q1"],
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
                                      pos: [6370, 2117],
                                      length: 10,
                                      children: [
                                        {
                                          name: "switch",
                                          pos: [6353, 2130],
                                          direction: "bottom",
                                          state: 1,
                                          children: [
                                            // {
                                            //   name: "line",
                                            //   direction: "horizontal",
                                            //   pos: [6353, 2150],
                                            //   length: 20,
                                            //   children: [
                                            //     {
                                            //       name: "entry",
                                            //       direction: "right",
                                            //       pos: [6343, 2143]
                                            //     }
                                            //   ]
                                            // },
                                            {
                                              name: "resistor",
                                              direction: "vertical",
                                              pos: [6345, 2170],
                                              label: "484",
                                              length: 20,
                                              state: 1,
                                              children: [
                                                {
                                                  name: "SSZPoint",
                                                  direction: "vertical",
                                                  pos: [6372, 2220],
                                                  label: '2#',
                                                  children: [
                                                    {
                                                      name: "SSZPoint",
                                                      direction: "vertical",
                                                      pos: [6372, 2230],
                                                      color: 2,
                                                      children: [
                                                        {
                                                          name: "directionDoubleResistor",
                                                          direction: "vertical",
                                                          pos: [6326, 2277],
                                                          state: 1,
                                                          label: 602,
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [6326, 2317],
                                                              length: 210,
                                                              label: "2#",
                                                              linkTo: ["安家沟站-6002"]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
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
                              ]
                            },
                          ]
                        }
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
      stationName: "安家沟站",
      children: [
        {
          name: "line",
          pos: [6630, 1847],
          direction: "vertical",
          length: 110,
          label: "河安1#进线",
          lpos: [6690, 1840],
          linkTo: ["463-河安线"],
          children: [
            {
              name: "directionDouble",
              direction: "vertical",
              pos: [6605, 1927],
              length: 50,
              label: "4811",
              state: 1,
              children: [
                {
                  name: "line",
                  pos: [6630, 1957],
                  direction: "vertical",
                  length: 25,
                  children: [
                    {
                      name: "resistor",
                      direction: "vertical",
                      pos: [6605, 2007],
                      state: 1,
                      label: "481",
                      children: [
                        {
                          name: "switch",
                          pos: [6613, 2068],
                          direction: "bottom",
                          state: 1,
                          label: "481三工位",
                          children: [
                            {
                              name: "line",
                              direction: "horizontal",
                              pos: [6613, 2088],
                              length: 20,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [6603, 2081]
                                }
                              ]
                            },
                            {
                              name: "line",
                              direction: "vertical",
                              pos: [6630, 2098],
                              length: 10,
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [6550, 2108],
                                  length: 100,
                                  children: [

                                    {
                                      name: "lineSwitch",
                                      direction: "right",
                                      pos: [6534, 2108],
                                      length: 20,
                                      state: 1,
                                      labelDirection: "bottom",
                                      label: "480Q1",
                                      code: "安家沟站-480Q1",
                                    },
                                    {
                                      name: "switch",
                                      pos: [6613, 2130],
                                      direction: "bottom",
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          direction: "vertical",
                                          pos: [6605, 2170],
                                          length: 20,
                                          state: 1,
                                          label: "483"
                                        },
                                        {
                                          name: "SSZPoint",
                                          direction: "vertical",
                                          pos: [6632, 2222],
                                          label: "1#",
                                          children: [
                                            {
                                              name: "SSZPoint",
                                              direction: "vertical",
                                              pos: [6632, 2232],
                                              color: 2,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "vertical",
                                                  pos: [6586, 2281],
                                                  state: 1,
                                                  label: 601,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [6575, 2317],
                                                      children: [
                                                        {
                                                          name: "coilDoubleEmpty",
                                                          direction: "horizontal",
                                                          pos: [6526, 2317],
                                                          label: "600",
                                                          state: 0,
                                                          children: [
                                                            {
                                                              name: "coilDouble",
                                                              direction: "horizontal",
                                                              pos: [6436, 2317],
                                                              label: "6002",
                                                              state: 1,
                                                              code: "安家沟站-6002"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "虎峪河站",
      label: "虎峪河",
      lpos: [7040, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [6955, 1195],
          length: 135,
          label: "河虎2#进线",
          lpos: [6975, 1110],
          labelDirection: "vertical",
          linkTo: ["466河虎2#"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [6910, 1375],
              label: "512",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [6945, 1415],
                  length: 116,
                  children: [
                    {
                      name: "coilDouble",
                      direction: "horizontal",
                      pos: [6995, 1415],
                      label: "5202",
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          direction: "horizontal",
                          pos: [7060, 1415],
                          label: "520",
                          state: 1,
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [7110, 1415],
                              length: 20,
                              children: [
                                {
                                  name: "coilDoubleEmpty",
                                  direction: "horizontal",
                                  pos: [7120, 1415],
                                  label: "510",
                                  state: 0,
                                  children: [
                                    {
                                      name: "coilDouble",
                                      direction: "horizontal",
                                      pos: [7180, 1415],
                                      label: "5101",
                                      code: "虎峪河站-5101"
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
                      pos: [6940, 1470],
                      label: "514",
                      children: [
                        {
                          name: "SSZPoint",
                          direction: "vertical",
                          pos: [6986, 1520],
                          label: "2#",
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [6986, 1532],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [6940, 1575],
                                  label: "602",
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      pos: [6955, 1615],
                                      length: 106,
                                      children: [
                                        {
                                          name: "coilDouble",
                                          direction: "horizontal",
                                          pos: [6995, 1615],
                                          label: "6302",
                                          children: [
                                            {
                                              name: "coilDoubleEmpty",
                                              direction: "horizontal",
                                              pos: [7060, 1615],
                                              label: "630",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [7110, 1615],
                                                  length: 20,
                                                  children: [
                                                    {
                                                      name: "coilDoubleEmpty",
                                                      direction: "horizontal",
                                                      pos: [7120, 1615],
                                                      label: "600",
                                                      state: 0,
                                                      children: [
                                                        {
                                                          name: "coilDouble",
                                                          direction: "horizontal",
                                                          pos: [7180, 1615],
                                                          label: "6001",
                                                          code: "虎峪河站-6001"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "虎峪河站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [7240, 1163],
          length: 185,
          label: "河虎1#进线",
          lpos: [7215, 1110],
          labelDirection: "vertical",
          linkTo: ["461-河虎1#"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [7195, 1375],
              label: "511",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [7170, 1415],
                  length: 100,
                  linkTo: ["虎峪河站-5101"],
                  children: [, {
                    name: "directionDoubleResistor",
                    state: 1,
                    direction: "vertical",
                    pos: [7195, 1470],
                    label: "513",
                    children: [
                      {
                        name: "SSZPoint",
                        direction: "vertical",
                        pos: [7241, 1520],
                        label: "1#",
                        labelDirection: 'left',
                        children: [
                          {
                            name: "SSZPoint",
                            direction: "vertical",
                            pos: [7241, 1532],
                            color: 2,
                            children: [
                              {
                                name: "directionDoubleResistor",
                                state: 1,
                                direction: "vertical",
                                pos: [7195, 1575],
                                label: "601",
                                children: [
                                  {
                                    name: "lineBold",
                                    direction: "horizontal",
                                    pos: [7220, 1615],
                                    length: 50,
                                    children: [
                                      {
                                        name: "coilDouble",
                                        direction: "horizontal",
                                        pos: [7180, 1615],
                                        children: [
                                          {
                                            name: "lineBold",
                                            direction: "horizontal",
                                            pos: [7165, 1615],
                                            length: 25,
                                            linkTo: ["虎峪河站-6001"]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
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
      stationName: "机厂站",
      label: "机厂",
      lpos: [6100, 384],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [6026, 144],
          direction: "vertical",
          length: 300,
          label: "杜选线",
          lpos: [6046, 214],
          labelDirection: "vertical",
          linkTo: ["305-杜选线-机厂站"],
          children: [
            {
              name: "switch",
              direction: "left",
              pos: [5990, 394],
              state: 1,
              label: "3311D外",
              lpos: [5907, 390],
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [5967, 387]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              pos: [6010, 470],
              state: 1,
              label: "3311",
              children: [
                {
                  name: "switch",
                  direction: "left",
                  pos: [5990, 479],
                  state: 1,
                  label: "3311D外",
                  lpos: [5907, 469],
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [5967, 474]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  state: 1,
                  direction: "vertical",
                  pos: [5980, 534],
                  label: "331",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [5980, 574],
                      length: 70,
                      children: [
                        {
                          name: "coilDoubleEmpty",
                          direction: "horizontal",
                          pos: [6050, 574],
                          state: 0,
                          label: "330",
                          children: [
                            {
                              name: "coilDouble",
                              direction: "horizontal",
                              pos: [6130, 574],
                              label: "3301",
                              code: "机厂站-3301"
                            }
                          ]
                        },
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [5980, 629],
                          label: "333",
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [6025, 682],
                              label: "1#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [6025, 692],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDouble",
                                      direction: "vertical",
                                      pos: [5995, 730],
                                      label: "6013",
                                      children: [
                                        {
                                          name: "directionDoubleResistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [5980, 800],
                                          label: "601",
                                          children: [
                                            {
                                              name: "lineBold",
                                              pos: [5920, 840],
                                              direction: "horizontal",
                                              length: 220,
                                              children: [
                                                {
                                                  name: "coilDouble",
                                                  direction: "horizontal",
                                                  pos: [6060, 840],
                                                  label: "6002",
                                                  children: [
                                                    {
                                                      name: "coilDoubleEmpty",
                                                      direction: "horizontal",
                                                      state: 0,
                                                      pos: [6140, 840],
                                                      label: "600",
                                                      code: "机厂站-6002"
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "机厂站",
      children: [
        {
          name: "line",
          direction: "horizontal",
          pos: [6235, 294],
          length: 100,
          label: "河机线",
          lpos: [6355, 314],
          labelDirection: "vertical",
          linkTo: ["468-河机线"],
          children: [
            {
              name: "line",
              direction: "vertical",
              pos: [6235, 294],
              length: 150,
              children: [
                {
                  name: "switch",
                  direction: "left",
                  pos: [6250, 406],
                  state: 1,
                  label: "3321D外",
                  lpos: [6115, 415],
                  children: [
                    {
                      name: "entry",
                      direction: "left",
                      pos: [6280, 396]
                    }
                  ]
                },
                {
                  name: "switch",
                  direction: "top",
                  pos: [6220, 474],
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      direction: "left",
                      pos: [6250, 486],
                      state: 1,
                      label: "3321D内",
                      lpos: [6115, 490],
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [6280, 479]
                        }
                      ]
                    },
                    {
                      name: "directionDoubleResistor",
                      state: 1,
                      direction: "vertical",
                      pos: [6190, 534],
                      label: "332",
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [6100, 574],
                          length: 180,
                          linkTo: ["机厂站-3301"],
                          children: [
                            {
                              name: "directionDoubleResistor",
                              state: 1,
                              direction: "vertical",
                              pos: [6190, 629],
                              label: "334",
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [6237, 682],
                                  label: "2#",
                                  labelDirection: 'left',
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      pos: [6237, 692],
                                      color: 2,
                                      children: [
                                        {
                                          name: "directionDouble",
                                          direction: "vertical",
                                          state: 1,
                                          pos: [6207, 730],
                                          label: "6023",
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "vertical",
                                              state: 1,
                                              pos: [6192, 800],
                                              label: "602",
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  pos: [6190, 840],
                                                  direction: "horizontal",
                                                  length: 120,
                                                  linkTo: ["机厂站-6002"]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "太选站",
      label: "太选",
      lpos: [7457, 384],
      lsize: 38,
      children: [
        {
          name: "line",
          pos: [7577, 90],
          direction: "vertical",
          length: 350,
          label: "太选线",
          lpos: [7597, 314],
          labelDirection: "vertical",
          linkTo: ["305-杜选线-太选站"],
          children: [
            {
              name: "directionDoubleResistor",
              state: 1,
              direction: "vertical",
              pos: [7532, 480],
              label: "411",
              children: [
                {
                  name: "lineBold",
                  direction: "horizontal",
                  pos: [7540, 522],
                  length: 70,
                  children: [
                    {
                      name: "directionDoubleResistor",
                      state: 1,
                      direction: "vertical",
                      pos: [7532, 575],
                      label: "413",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [7580, 628],
                          label: "1#",
                          labelDirection: 'left',
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [7581, 640],
                              color: 2,
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [7563, 675],
                                  state: 1,
                                  children: [
                                    {
                                      name: "resistor",
                                      state: 1,
                                      direction: "vertical",
                                      pos: [7555, 715],
                                      label: "601",
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [7563, 777],
                                          state: 1,
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [7550, 800],
                                              length: 80,
                                              children: [
                                                {
                                                  name: "lineSwitch",
                                                  direction: "right",
                                                  pos: [7540, 800],
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [7505, 800],
                                                      length: 35,
                                                      linkTo: ["太选站-195"]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
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
                      name: "coilDoubleEmpty",
                      direction: "horizontal",
                      pos: [7490, 522],
                      label: "410",
                      state: 0,
                      children: [
                        {
                          name: "coilDouble",
                          direction: "horizontal",
                          pos: [7410, 522],
                          label: "4102",
                          code: "太选站-4102"
                        }
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
      stationName: "太选站",
      children: [
        {
          name: "stationInLine",
          pos: [7395, 326],
          direction: "vertical",
          length: 50,
          label: "选煤线\n引自东社110kV站 437",
          lpos: [7395, 244],
          labelDirection: "vertical",
          children: [
            {
              name: "directionDouble",
              pos: [7365, 406],
              direction: "vertical",
              color: 1,
              label: "4121",
              children: [
                {
                  name: "directionDoubleResistor",
                  state: 1,
                  direction: "vertical",
                  pos: [7350, 480],
                  label: "412",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [7350, 522],
                      length: 140,
                      label: "SF9-8000",
                      linkTo: ["太选站-4102"],
                      children: [
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [7350, 575],
                          label: "414",
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [7398, 628],
                              label: "2#",
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [7398, 640],
                                  color: 2,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [7380, 675],
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [7372, 715],
                                          label: "602",
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [7380, 777],
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  pos: [7350, 800],
                                                  direction: "horizontal",
                                                  length: 90,
                                                  children: [
                                                    {
                                                      name: "lineSwitch",
                                                      direction: "right",
                                                      pos: [7436, 800],
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          pos: [7450, 800],
                                                          direction: "horizontal",
                                                          length: 25,
                                                          children: [
                                                            {
                                                              name: "resistor",
                                                              state: 0,
                                                              pos: [7455, 803],
                                                              label: "195",
                                                              noLine: true,
                                                              code: "太选站-195"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      label: "高家河",
      stationName: "高家河站",
      lpos: [7560, 1670],
      lsize: 38,
      children: [
        {
          name: "lineBold",
          direction: "horizontal",
          pos: [7300, 1430],
          length: 800,
          label: "35kv北母",
          children: [
            {
              name: "switch",
              direction: "bottom",
              pos: [7315, 1455],
              state: 0,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7331.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-1"
                }
              ]
            },
            {
              name: "switch",
              direction: "bottom",
              pos: [7430, 1455],
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7446.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-2",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [7420, 1490],
                      length: 27,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [7417, 1490],
                          length: 59,
                          children: [
                            {
                              name: "resistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7392, 1580],
                              label: "394",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [7419, 1630],
                                  label: "2#",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [7419, 1640],
                                      color: 2,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [7400, 1670],
                                          state: 1,
                                          label: "6041",
                                          children: [
                                            {
                                              name: "resistor",
                                              state: 1,
                                              direction: "vertical",
                                              pos: [7391, 1705],
                                              label: "604",
                                              children: [
                                                {
                                                  name: "switch",
                                                  direction: "top",
                                                  pos: [7399, 1765],
                                                  label: "6043",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [7320, 1780],
                                                      length: 200,
                                                      children: [
                                                        {
                                                          name: "lineSwitch",
                                                          direction: "right",
                                                          pos: [7520, 1780],
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [7540, 1780],
                                                              length: 20,
                                                              children: [
                                                                {
                                                                  name: "resistor",
                                                                  direction: "horizontal",
                                                                  pos: [7540, 1785],
                                                                  state: 0,
                                                                  label: '605',
                                                                  code: '高家河-605',
                                                                  noLine: true
                                                                }
                                                              ]
                                                            },
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
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
              direction: "bottom",
              pos: [7500, 1455],
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7516.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-3",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [7516, 1490],
                      length: 45,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [7558, 1440],
                          length: 50,
                          children: [
                            {
                              name: "resistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7533, 1395],
                              label: "395",
                              children: [
                                {
                                  name: "switch",
                                  direction: "right",
                                  pos: [7510, 1320],
                                  label: "3951D",
                                  lpos: [7460, 1350],
                                  state: 1,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "right",
                                      pos: [7500, 1310]
                                    }
                                  ]
                                },
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [7542, 1350],
                                  state: 1,
                                  label: "3951",
                                  linkTo: ["304-杜白1#"],
                                  children: [
                                    {
                                      name: "line",
                                      pos: [400, 60],
                                      length: 0,
                                      label: "杜白1#",
                                      lpos: [7582, 1150],
                                      labelDirection: "vertical"
                                    }
                                  ]
                                }
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
              direction: "bottom",
              pos: [7630, 1452],
              state: 1,
              children: [
                {
                  name: "resistor",
                  state: 0,
                  direction: "vertical",
                  pos: [7622, 1485],
                  label: "392",
                  length: 20,
                  noLine: true,
                  children: [
                    {
                      name: "line",
                      pos: [-100, 210],
                      length: 0,
                      code: "高家河站-35kv北母-4"
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "bottom",
              pos: [7700, 1455],
              state: 0,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7716.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-5",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [7720, 1490],
                      length: 36,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [7756, 1430],
                          length: 63,
                          children: [
                            {
                              name: "switch",
                              direction: "right",
                              pos: [7710, 1320],
                              label: "3961D",
                              lpos: [7660, 1350],
                              state: 1,
                              children: [
                                {
                                  name: "entry",
                                  direction: "right",
                                  pos: [7700, 1310]
                                }
                              ]
                            },
                            {
                              name: "resistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7731, 1395],
                              label: "396",
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [7740, 1350],
                                  state: 1,
                                  label: "3961",
                                  linkTo: ["318-杜白2#"],
                                  children: [
                                    {
                                      name: "line",
                                      pos: [400, 60],
                                      length: 0,
                                      label: "杜白2#",
                                      lpos: [7732, 1150],
                                      labelDirection: "vertical"
                                    }
                                  ]
                                }
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
              direction: "bottom",
              pos: [7830, 1455],
              state: 0,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7846.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-6",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [7815, 1490],
                      length: 35,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [7815, 1494],
                          length: 55,
                          children: [
                            {
                              name: "resistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7790, 1580],
                              label: "393",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [7816, 1635],
                                  label: "1#",
                                  labelDirection: 'left',
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [7816, 1645],
                                      color: 2,
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "top",
                                          pos: [7800, 1670],
                                          state: 1,
                                          children: [
                                            {
                                              name: "resistor",
                                              state: 1,
                                              direction: "vertical",
                                              pos: [7792, 1702],
                                              label: "603",
                                              children: [
                                                {
                                                  name: "switch",
                                                  direction: "top",
                                                  pos: [7801, 1765],
                                                  state: 1,
                                                  label: "6033",
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "horizontal",
                                                      pos: [7640, 1780],
                                                      length: 255,
                                                      children: [
                                                        {
                                                          name: "lineSwitch",
                                                          direction: "right",
                                                          pos: [7620, 1780],
                                                          state: 1,
                                                          children: [
                                                            {
                                                              name: "lineBold",
                                                              direction: "horizontal",
                                                              pos: [7593, 1780],
                                                              length: 28,
                                                              linkTo: ['高家河-605']
                                                            },
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
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
              direction: "bottom",
              pos: [7940, 1455],
              state: 0,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [7956.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-7",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [7930, 1500],
                      length: 27,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [7930, 1440],
                          length: 60,
                          children: [
                            {
                              name: "resistor",
                              state: 0,
                              direction: "vertical",
                              pos: [7906, 1395],
                              label: "389",
                              children: [
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [7915, 1355],
                                  label: "3891",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [7931, 1190],
                                      length: 140,
                                      label: "河官支线",
                                      lpos: [7950, 1060],
                                      labelDirection: "vertical",
                                      linkTo: ["471-河官线"],
                                      children: [
                                        {
                                          name: "switch",
                                          direction: "right",
                                          pos: [7885, 1320],
                                          label: "3891D",
                                          lpos: [7845, 1350],
                                          state: 1,
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "right",
                                              pos: [7870, 1310]
                                            }
                                          ]
                                        },
                                      ]
                                    }
                                  ]
                                }
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
              direction: "bottom",
              pos: [8025, 1455],
              state: 0,
              children: [
                {
                  name: "line",
                  direction: "vertical",
                  pos: [8041.5, 1465],
                  length: 50,
                  code: "高家河站-35kv北母-8",
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [8015, 1500],
                      length: 27,
                      children: [
                        {
                          name: "line",
                          direction: "vertical",
                          pos: [8015, 1440],
                          length: 60,
                          children: [
                            {
                              name: "resistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7990, 1390],
                              label: "397",
                              children: [
                                {
                                  name: "switch",
                                  direction: "right",
                                  pos: [8015, 1280],
                                  label: "3891D",
                                  lpos: [8020, 1310],
                                  state: 1,
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "left",
                                      pos: [8055, 1270]
                                    }
                                  ]
                                },
                                {
                                  name: "switch",
                                  direction: "top",
                                  pos: [7999, 1345],
                                  label: "3971",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "vertical",
                                      pos: [8016, 1260],
                                      length: 59,
                                      children: [
                                        {
                                          name: "line",
                                          direction: "horizontal",
                                          pos: [8013, 1260],
                                          length: 170,
                                          children: [
                                            {
                                              name: "line",
                                              direction: "vertical",
                                              pos: [8180, 1260],
                                              length: 650,
                                              children: [
                                                {
                                                  name: "line",
                                                  direction: "horizontal",
                                                  pos: [7000, 1910],
                                                  length: 1183,
                                                  code: "白九线"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "高家河站",
      children: [
        {
          name: "lineBold",
          direction: "horizontal",
          pos: [7300, 1549],
          length: 800,
          label: "35kv南母",
          color: 1,
          children: [
            {
              name: "switch",
              direction: "top",
              pos: [7315, 1529],
              state: 0,
              linkTo: ["高家河站-35kv北母-1"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7430, 1529],
              state: 0,
              linkTo: ["高家河站-35kv北母-2"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7500, 1529],
              state: 0,
              linkTo: ["高家河站-35kv北母-3"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7630, 1529],
              state: 1,
              linkTo: ["高家河站-35kv北母-4"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7700, 1529],
              state: 1,
              linkTo: ["高家河站-35kv北母-5"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7830, 1529],
              state: 1,
              linkTo: ["高家河站-35kv北母-6"],
              children: []
            },
            {
              name: "switch",
              direction: "top",
              pos: [7940, 1529],
              state: 1,
              linkTo: ["高家河站-35kv北母-7"]
            },
            {
              name: "switch",
              direction: "top",
              pos: [8025, 1529],
              state: 1,
              linkTo: ["高家河站-35kv北母-8"],
              children: []
            }
          ]
        }
      ]
    },
    {
      color: 1,
      stationName: "九院箱站",
      label: "九院箱",
      lpos: [6850, 2060],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [7000, 1910],
          length: 100,
          label: "白九线",
          lpos: [7000, 1900],
          linkTo: ["白九线"],
          children: [
            {
              name: "switch",
              direction: "top",
              pos: [6983, 2030],
              state: 1,
              label: "4521",
              children: [
                {
                  name: "directionDoubleResistor",
                  state: 1,
                  direction: "vertical",
                  pos: [6955, 2090],
                  label: "452",
                  children: [
                    {
                      name: "lineBold",
                      direction: "horizontal",
                      pos: [6930, 2135],
                      length: 120,
                      children: [
                        {
                          name: "directionDoubleResistor",
                          state: 1,
                          direction: "vertical",
                          pos: [6970, 2185],
                          label: "454",
                          color: 1,
                          children: [
                            {
                              name: "SSZPoint",
                              direction: "vertical",
                              pos: [7017, 2238],
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [7017, 2247],
                                  label: "2#",
                                  color: 2,
                                  children: [
                                    {
                                      name: "switch",
                                      direction: "top",
                                      pos: [7000, 2280],
                                      state: 1,
                                      children: [
                                        {
                                          name: "resistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [6991, 2305],
                                          label: "602",
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [7000, 2359],
                                              state: 1,
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  direction: "horizontal",
                                                  pos: [6987, 2370],
                                                  length: 50,
                                                  children: [
                                                    {
                                                      name: "lineSwitch",
                                                      direction: "right",
                                                      pos: [6975, 2369],
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          pos: [6943, 2370],
                                                          direction: "horizontal",
                                                          length: 35,
                                                          linkTo: ["九院箱站-600"]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
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
                          name: "coilDoubleEmpty",
                          direction: "horizontal",
                          pos: [6880, 2135],
                          state: 1,
                          label: "450",
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              pos: [6800, 2135],
                              length: 80,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [6800, 2185],
                                  label: "453",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [6847, 2238],
                                      label: "1#",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "vertical",
                                          pos: [6847, 2247],
                                          color: 2,
                                          children: [
                                            {
                                              name: "switch",
                                              direction: "top",
                                              pos: [6830, 2280],
                                              state: 1,
                                              children: [
                                                {
                                                  name: "resistor",
                                                  state: 1,
                                                  direction: "vertical",
                                                  pos: [6821, 2306],
                                                  label: "601",
                                                  children: [
                                                    {
                                                      name: "switch",
                                                      direction: "top",
                                                      pos: [6830, 2359],
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [6820, 2370],
                                                          length: 50,
                                                          children: [
                                                            {
                                                              name: "lineSwitch",
                                                              direction: "right",
                                                              pos: [6870, 2369],
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "lineBold",
                                                                  pos: [6885, 2370],
                                                                  direction: "horizontal",
                                                                  length: 25,
                                                                  children: [
                                                                    {
                                                                      name: "resistor",
                                                                      state: 0,
                                                                      pos: [6890, 2373],
                                                                      label: "600",
                                                                      noLine: true,
                                                                      code: "九院箱站-600"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "西山热电厂",
      children: [
        {
          name: "line",
          direction: "horizontal",
          pos: [7755, 1210],
          length: 500,
          linkTo: ["318-杜白2#"],
          children: [
            {
              name: "line",
              direction: "vertical",
              pos: [8250, 1210],
              length: 850,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [7500, 2060],
                  length: 750,
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [7500, 2060],
                      length: 90,
                      children: [
                        {
                          name: "directionDouble",
                          direction: "vertical",
                          pos: [7470, 2160],
                          label: "4421",
                          children: [
                            {
                              name: "directionDoubleResistor",
                              state: 1,
                              direction: "vertical",
                              pos: [7455, 2230],
                              label: "442",
                              children: [
                                {
                                  name: "SSZPoint",
                                  direction: "vertical",
                                  pos: [7502, 2280],
                                  label: "35kV启备变",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      direction: "vertical",
                                      pos: [7502, 2290],
                                      color: 2,
                                      children: [
                                        {
                                          name: "resistor",
                                          state: 1,
                                          direction: "vertical",
                                          pos: [7475, 2322],
                                          color: 2,
                                          label: "600",
                                          children: [
                                            {
                                              name: "lineBold",
                                              direction: "horizontal",
                                              pos: [7460, 2360],
                                              length: 80,
                                              color: 2,
                                              label: "西山热电厂",
                                              lpos: [7430, 2410]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}