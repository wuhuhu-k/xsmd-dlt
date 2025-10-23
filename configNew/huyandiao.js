var huyandiao = {
  name: "huyandiao",
  code: "胡岩刁",
  v: "110KV",
  label: "胡岩刁",
  lpos: [3370, 210],
  lsize: 40,
  powerToChild: false,
  children: [
    {
      code: "胡岩刁-2#",
      color: 0,
      stationName: "胡岩刁110kV站",
      powerFrom: ["胡岩刁2#"],
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [3108, 120],
          length: 90,
          powerFrom: ["胡岩刁2#"],
          label: "胡岩刁2#\n引自古交220Kv站 158",
          labelDirection: "vertical",
          lpos: [3100, 30],
          isPowerToParent: false,
          children: [
            {
              name: "capacitor",
              direction: "horizontal",
              pos: [3035, 160],
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [3025, 150]
                }
              ]
            },
            {
              name: "line",
              direction: "horizontal",
              pos: [3050, 200],
              length: 60,
              children: [
                {
                  name: "switch",
                  direction: "right",
                  pos: [3005, 200],
                  label: "124线0",
                  state: 0,
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [2995, 192]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "right",
              pos: [3110, 160],
              state: 1,
              label: "124线9",
              children: [
                {
                  name: "switch",
                  state: 0,
                  direction: "bottom",
                  pos: [3188, 178],
                  mainEntry: false,
                  label: 12490,
                  children: [
                    {
                      name: "entry",
                      direction: "top",
                      pos: [3195, 200],
                      mainEntry: true
                    }
                  ]
                },
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [3150, 160],
                  length: 150,
                  children: [
                    {
                      name: "IPT",
                      direction: "top",
                      pos: [3295, 195]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              direction: "top",
              state: 1,
              pos: [3092, 235],
              label: "1241",
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [3110, 250],
                  length: 80,
                  children: [
                    {
                      name: "switch",
                      state: 0,
                      direction: "left",
                      pos: [3200, 250],
                      label: "12410",
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [3228, 242]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [3083, 280],
                  label: "124",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [3060, 320],
                      length: 50,
                      children: [
                        {
                          name: "switch",
                          state: 0,
                          direction: "right",
                          pos: [3015, 320],
                          label: "12430",
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [3005, 310]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      direction: "top",
                      state: 1,
                      pos: [3091, 350],
                      label: "1243",
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [3000, 368],
                          length: 300,
                          children: [
                            {
                              name: "switch",
                              state: 1,
                              direction: "top",
                              pos: [3050, 400],
                              label: "1B9",
                              lpos: [3070, 415],
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [3052, 418],
                                  length: 30,
                                  children: [
                                    {
                                      name: "IPT",
                                      direction: "top",
                                      pos: [3049, 451]
                                    },
                                    {
                                      name: "capacitor",
                                      direction: "top",
                                      pos: [3040, 443],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [3073, 483]
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
                              pos: [3068, 385],
                              length: 70,
                              children: [
                                {
                                  name: "switch",
                                  state: 0,
                                  direction: "top",
                                  pos: [3120, 412],
                                  label: "1B10",
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [3127, 424]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              state: 1,
                              direction: "top",
                              pos: [3200, 400],
                              label: "1223",
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [3218, 418],
                                  length: 60,
                                  children: [
                                    {
                                      name: "switch",
                                      state: 0,
                                      direction: "top",
                                      pos: [3258, 445],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [3265, 455]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [3191, 447],
                                  label: "122",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [3188, 480],
                                      length: 30,
                                      children: [
                                        {
                                          name: "switch",
                                          state: 0,
                                          direction: "top",
                                          pos: [3171, 507],
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "top",
                                              pos: [3178, 518]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "lineSwitch",
                                      state: 1,
                                      direction: "right",
                                      pos: [3300, 368],
                                      label: "1202",
                                      children: [
                                        {
                                          name: "lineBold",
                                          direction: "horizontal",
                                          pos: [3315, 368],
                                          length: 70,
                                          children: [
                                            {
                                              name: "switch",
                                              state: 0,
                                              direction: "top",
                                              pos: [3320, 400],
                                              label: "12020",
                                              children: [
                                                {
                                                  name: "entry",
                                                  direction: "top",
                                                  pos: [3328, 410]
                                                }
                                              ]
                                            },
                                            {
                                              name: "resistor",
                                              direction: "horizontal",
                                              pos: [3365, 372],
                                              label: "120",
                                              noLine: true,
                                              code: "胡岩刁-120"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      state: 1,
                                      direction: "top",
                                      pos: [3200, 505],
                                      label: "1221",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "top",
                                          pos: [3218, 534],
                                          label: '2#'
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [3208, 544],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "horizontal",
                                              pos: [3108, 544],
                                              state: 1,
                                              label: "602",
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [3050, 544],
                                                  state: 1,
                                                  label: "6023",
                                                  children: [
                                                    {
                                                      name: "line",
                                                      direction: "horizontal",
                                                      pos: [3030, 544],
                                                      length: 20,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "vertical",
                                                          pos: [3030, 524],
                                                          length: 100,
                                                          children: [
                                                            {
                                                              name: "line",
                                                              direction: "horizontal",
                                                              pos: [3030, 600],
                                                              length: 250,
                                                              children: [
                                                                {
                                                                  name: "directionDoubleResistor",
                                                                  pos: [3280, 600],
                                                                  label: "600",
                                                                  state: 0,
                                                                  code: "胡岩刁-600"
                                                                }
                                                              ]
                                                            }
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
                                          pos: [3228, 544],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              pos: [3230, 552],
                                              label: "2#",
                                              direction: "vertical",
                                              length: 78,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "vertical",
                                                  pos: [3185, 668],
                                                  label: "302",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "directionDouble",
                                                      direction: "vertical",
                                                      pos: [3200, 738],
                                                      label: "3023",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          pos: [3150, 768],
                                                          direction: "horizontal",
                                                          length: 220,
                                                          children: [
                                                            {
                                                              name: "coilDoubleEmpty",
                                                              pos: [3370, 768],
                                                              direction: "horizontal",
                                                              state: 0,
                                                              label: "300",
                                                              children: [
                                                                {
                                                                  name: "coilDouble",
                                                                  direction: "horizontal",
                                                                  pos: [3440, 768],
                                                                  label: "3001",
                                                                  code: "胡岩刁-3001"
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              name: "directionDoubleResistor",
                                                              direction: "vertical",
                                                              pos: [3130, 818],
                                                              label: "312胡北线",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  length: 130,
                                                                  direction: "vertical",
                                                                  pos: [3175, 838],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3155, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3136, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3144, 906],
                                                                              direction: "top",
                                                                              label: "312线0"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      pos: [3175, 968],
                                                                      length: 1210,
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          pos: [4385, 968],
                                                                          direction: "vertical",
                                                                          length: 1056,
                                                                          label: "胡北2#进线",
                                                                          lpos: [4410, 1668],
                                                                          labelDirection: "vertical",
                                                                          linkTo: ["北石沟站-532"]
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
                                                              pos: [3220, 818],
                                                              label: "308胡巴线",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  direction: "vertical",
                                                                  pos: [3265, 838],
                                                                  length: 175,
                                                                  linkTo: ["刘巴足站-384"],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 100,
                                                                      direction: "horizontal",
                                                                      pos: [3165, 1010],
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [3165, 1010],
                                                                          length: 1020
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3242, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3225, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3233, 906],
                                                                              direction: "top",
                                                                              label: "308线0"
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
                                                              pos: [3320, 818],
                                                              label: "306胡局2#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  length: 160,
                                                                  direction: "vertical",
                                                                  pos: [3365, 838],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3342, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3325, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3333, 906],
                                                                              direction: "top",
                                                                              label: "306线0"
                                                                            }
                                                                          ]
                                                                        },
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      length: 530,
                                                                      pos: [3365, 998],
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          length: 1028,
                                                                          direction: "vertical",
                                                                          pos: [3895, 998],
                                                                          label: "胡局2#",
                                                                          lpos: [3915, 1698],
                                                                          labelDirection: "vertical",
                                                                          linkTo: ["局家洼站-334"]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      code: "胡岩刁-1#",
      stationName: "胡岩刁110kV站",
      color: 0,
      powerFrom: ["胡岩刁1#"],
      isPowerToParent: false,
      children: [
        {
          name: "stationInLine",
          direction: "vertical",
          pos: [3608, 120],
          length: 100,
          label: "胡岩刁1#\n引自古交220Kv站 148",
          labelDirection: "vertical",
          lpos: [3600, 30],
          children: [
            {
              name: "capacitor",
              direction: "horizontal",
              pos: [3535, 160],
              children: [
                {
                  name: "entry",
                  direction: "right",
                  pos: [3525, 150]
                }
              ]
            },
            {
              name: "switch",
              direction: "right",
              pos: [3610, 160],
              label: "123线9",
              state: 1,
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [3650, 160],
                  length: 180,
                  state: 1,
                  children: [
                    {
                      name: "switch",
                      state: 0,
                      direction: "bottom",
                      pos: [3698, 178],
                      label: "123线9",
                      children: [
                        {
                          name: "entry",
                          direction: "top",
                          pos: [3705, 200],
                          mainEntry: true
                        }
                      ]
                    },
                    {
                      name: "IPT",
                      direction: "top",
                      pos: [3825, 195]
                    }
                  ]
                }
              ]
            },
            {
              name: "line",
              direction: "horizontal",
              pos: [3570, 200],
              length: 40,
              children: [
                {
                  name: "switch",
                  state: 0,
                  direction: "right",
                  pos: [3535, 200],
                  label: "1231",
                  children: [
                    {
                      name: "entry",
                      direction: "right",
                      pos: [3525, 192]
                    }
                  ]
                }
              ]
            },
            {
              name: "switch",
              state: 1,
              direction: "top",
              pos: [3592, 235],
              label: "12310",
              children: [
                {
                  name: "line",
                  direction: "horizontal",
                  pos: [3610, 250],
                  length: 100,
                  children: [
                    {
                      name: "switch",
                      state: 0,
                      direction: "left",
                      pos: [3720, 250],
                      label: "12410",
                      children: [
                        {
                          name: "entry",
                          direction: "left",
                          pos: [3738, 242]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "resistor",
                  direction: "vertical",
                  pos: [3583, 280],
                  label: "123",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      direction: "horizontal",
                      pos: [3560, 310],
                      length: 50,
                      children: [
                        {
                          name: "switch",
                          state: 0,
                          direction: "right",
                          pos: [3515, 310],
                          label: "12330",
                          children: [
                            {
                              name: "entry",
                              direction: "right",
                              pos: [3505, 300]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      state: 1,
                      direction: "top",
                      pos: [3591, 350],
                      label: "1233",
                      children: [
                        {
                          name: "lineBold",
                          direction: "horizontal",
                          pos: [3515, 368],
                          length: 300,
                          children: [
                            {
                              name: "lineSwitch",
                              state: 1,
                              direction: "right",
                              pos: [3500, 368],
                              label: "1202",
                              children: [
                                {
                                  name: "lineBold",
                                  direction: "horizontal",
                                  pos: [3417, 368],
                                  length: 83,
                                  linkTo: ["胡岩刁-120"],
                                  children: [
                                    {
                                      name: "switch",
                                      state: 0,
                                      direction: "top",
                                      pos: [3430, 400],
                                      label: "12010",
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [3438, 410]
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
                              pos: [3718, 385],
                              length: 70,
                              children: [
                                {
                                  name: "switch",
                                  state: 0,
                                  direction: "top",
                                  pos: [3770, 412],
                                  label: "1A10",
                                  children: [
                                    {
                                      name: "entry",
                                      direction: "top",
                                      pos: [3777, 424],
                                      label: 1213
                                    }
                                  ]
                                },
                              ]
                            },
                            {
                              name: "switch",
                              state: 1,
                              direction: "top",
                              pos: [3700, 400],
                              label: "1A9",
                              lpos: [3720, 415],
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [3702, 418],
                                  length: 30,
                                  children: [
                                    {
                                      name: "IPT",
                                      direction: "top",
                                      pos: [3699, 451]
                                    },
                                    {
                                      name: "capacitor",
                                      direction: "top",
                                      pos: [3690, 443],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [3723, 483]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: "switch",
                              state: 1,
                              direction: "top",
                              pos: [3600, 400],
                              children: [
                                {
                                  name: "line",
                                  direction: "horizontal",
                                  pos: [3618, 418],
                                  length: 60,
                                  children: [
                                    {
                                      name: "switch",
                                      state: 0,
                                      direction: "top",
                                      pos: [3658, 445],
                                      children: [
                                        {
                                          name: "entry",
                                          direction: "top",
                                          pos: [3665, 455]
                                        }
                                      ]
                                    },
                                  ]
                                },
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  pos: [3591, 447],
                                  label: "121",
                                  state: 1,
                                  children: [
                                    {
                                      name: "line",
                                      direction: "horizontal",
                                      pos: [3588, 480],
                                      length: 30,
                                      children: [
                                        {
                                          name: "switch",
                                          state: 0,
                                          direction: "right",
                                          pos: [3551, 480],
                                          children: [
                                            {
                                              name: "entry",
                                              direction: "right",
                                              pos: [3541, 470]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      name: "switch",
                                      state: 1,
                                      direction: "top",
                                      pos: [3600, 505],
                                      label: "1211",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          direction: "top",
                                          pos: [3618, 534],
                                          label: "1#",
                                          labelDirection: 'left'
                                        },
                                        {
                                          name: "SSZPoint",
                                          pos: [3628, 544],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              direction: "horizontal",
                                              pos: [3638, 544],
                                              label: "601",
                                              state: 1,
                                              children: [
                                                {
                                                  name: "directionDouble",
                                                  direction: "horizontal",
                                                  pos: [3720, 544],
                                                  label: "6013",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "lineBold",
                                                      direction: "vertical",
                                                      pos: [3780, 524],
                                                      children: [
                                                        {
                                                          name: "line",
                                                          direction: "horizontal",
                                                          pos: [3430, 600],
                                                          length: 360,
                                                          children: [
                                                            {
                                                              name: "directionDouble",
                                                              pos: [3370, 600],
                                                              label: "6002",
                                                              linkTo: ["胡岩刁-600"]
                                                            }
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
                                          pos: [3608, 544],
                                          color: 1,
                                          children: [
                                            {
                                              name: "line",
                                              pos: [3608, 552],
                                              direction: "vertical",
                                              length: 78,
                                              children: [
                                                {
                                                  name: "directionDoubleResistor",
                                                  direction: "vertical",
                                                  pos: [3563, 668],
                                                  label: "301",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "directionDouble",
                                                      direction: "vertical",
                                                      pos: [3578, 738],
                                                      label: "3013",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          pos: [3420, 768],
                                                          length: 300,
                                                          linkTo: ["胡岩刁-3001"],
                                                          children: [
                                                            {
                                                              name: "directionDoubleResistor",
                                                              pos: [3450, 818],
                                                              direction: "vertical",
                                                              label: "305胡局1#",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  length: 190,
                                                                  direction: "vertical",
                                                                  pos: [3495, 838],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3472, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3455, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3463, 906],
                                                                              direction: "top",
                                                                              label: "305线0"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      name: "line",
                                                                      length: 330,
                                                                      pos: [3495, 1028],
                                                                      children: [
                                                                        {
                                                                          name: "line",
                                                                          direction: "vertical",
                                                                          pos: [3825, 1028],
                                                                          label: "胡局1#",
                                                                          lpos: [3845, 1698],
                                                                          labelDirection: "vertical",
                                                                          length: 790,
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              length: 268,
                                                                              pos: [3560, 1818],
                                                                              children: [
                                                                                {
                                                                                  name: "line",
                                                                                  length: 138,
                                                                                  direction: "vertical",
                                                                                  pos: [3560, 1818],
                                                                                  code: "305-胡局1#"
                                                                                }
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
                                                              pos: [3520, 818],
                                                              direction: "vertical",
                                                              label: "309胡羊线",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  length: 490,
                                                                  direction: "vertical",
                                                                  pos: [3565, 840],
                                                                  linkTo: ["羊圈港站-353"],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3543, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3526, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3534, 906],
                                                                              direction: "top",
                                                                              label: "309线0"
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
                                                              pos: [3650, 818],
                                                              direction: "vertical",
                                                              label: "311胡新线",
                                                              labelDirection: "vertical",
                                                              state: 1,
                                                              children: [
                                                                {
                                                                  name: "line",
                                                                  length: 150,
                                                                  direction: "vertical",
                                                                  pos: [3695, 838],
                                                                  children: [
                                                                    {
                                                                      name: "line",
                                                                      length: 23,
                                                                      direction: "horizontal",
                                                                      pos: [3672, 868],
                                                                      children: [
                                                                        {
                                                                          name: "switch",
                                                                          state: 0,
                                                                          pos: [3655, 895],
                                                                          direction: "top",
                                                                          children: [
                                                                            {
                                                                              name: "entry",
                                                                              pos: [3663, 906],
                                                                              direction: "top",
                                                                              label: "311线0"
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          name: "line",
                                                                          pos: [3695, 988],
                                                                          length: 620,
                                                                          direction: "horizontal",
                                                                          children: [
                                                                            {
                                                                              name: "line",
                                                                              pos: [4315, 988],
                                                                              length: 332,
                                                                              direction: "vertical",
                                                                              label: "胡新1#进线",
                                                                              labelDirection: "vertical",
                                                                              linkTo: ["新华站-431"]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      label: "羊圈港",
      stationName: "羊圈港站",
      lpos: [3600, 1322],
      lsize: 38,
      color: 1,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [400, 60],
          length: 0,
          label: "胡羊1#进线",
          labelDirection: "vertical",
          lpos: [3585, 1082]
        },
        {
          name: "directionDoubleResistor",
          label: "353",
          state: 1,
          direction: "vertical",
          pos: [3520, 1374],
          code: "羊圈港站-353",
          children: [
            {
              name: "lineBold",
              direction: "horizontal",
              pos: [3460, 1418],
              length: 120,
              linkTo: ["羊圈港站-350"],
              children: [
                {
                  name: "directionDoubleResistor",
                  label: "359",
                  state: 1,
                  direction: "vertical",
                  pos: [3450, 1374],
                  code: "羊圈港站-359"
                },
                {
                  name: "directionDoubleResistor",
                  label: "351",
                  state: 1,
                  direction: "vertical",
                  pos: [3520, 1472],
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [3567, 1525],
                      label: "1#",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [3567, 1532],
                          color: 2,
                          children: [
                            {
                              name: "switch",
                              state: 1,
                              label: "9893",
                              pos: [3547, 1567],
                              direction: "top",
                              children: [
                                {
                                  name: "resistor",
                                  direction: "vertical",
                                  label: "989",
                                  state: 1,
                                  pos: [3539, 1592],
                                  children: [
                                    {
                                      name: "switch",
                                      state: 1,
                                      pos: [3547, 1642],
                                      label: "9891",
                                      direction: "top",
                                      children: [
                                        {
                                          name: "lineBold",
                                          length: 70,
                                          pos: [3510, 1652],
                                          children: [
                                            {
                                              name: "lineSwitch",
                                              state: 1,
                                              pos: [3580, 1652],
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  length: 20,
                                                  pos: [3595, 1652],
                                                  children: [
                                                    {
                                                      name: "resistor",
                                                      pos: [3595, 1655],
                                                      state: 0,
                                                      label: "970",
                                                      noLine: true,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          length: 20,
                                                          pos: [3645, 1652],
                                                          linkTo: ["羊圈港站-9901"],
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
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
                  label: "361",
                  state: 1,
                  direction: "vertical",
                  pos: [3440, 1472],
                  children: [
                    {
                      name: "line",
                      direction: "vertical",
                      pos: [3485, 1510],
                      length: 445,
                      children: [
                        {
                          name: "line",
                          direction: "horizontal",
                          pos: [3485, 1955],
                          length: 973,
                          label: "羊圈港瓦斯电厂",
                          lpos: [4535, 2058],
                          labelDirection: "vertical",
                          lsize: 38,
                          children: [
                            {
                              name: "directionDouble",
                              direction: "vertical",
                              pos: [4425, 1988],
                              label: "304",
                              stationName: "羊圈港瓦斯电厂",
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  direction: "vertical",
                                  pos: [4410, 2058],
                                  label: "305",
                                  state: 1,
                                  children: [
                                    {
                                      name: "lineBold",
                                      direction: "horizontal",
                                      length: 50,
                                      pos: [4430, 2108],
                                      children: [
                                        {
                                          name: "directionDoubleResistor",
                                          direction: "vertical",
                                          pos: [4410, 2160],
                                          label: "301",
                                          state: 1,
                                          children: [
                                            {
                                              name: "SZPoint",
                                              pos: [4456, 2213],
                                              children: [
                                                {
                                                  name: "SZPoint",
                                                  pos: [4456, 2223],
                                                  color: 2,
                                                  children: [
                                                    {
                                                      name: "directionDoubleResistor",
                                                      direction: "vertical",
                                                      pos: [4410, 2272],
                                                      label: "817",
                                                      state: 1,
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          direction: "horizontal",
                                                          length: 50,
                                                          pos: [4430, 2312]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "羊圈港站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [3765, 1727],
          length: 300,
          label: "局羊2#进线",
          labelDirection: "vertical",
          lpos: [3805, 1322],
          children: [
            {
              name: "line",
              pos: [3765, 1727],
              length: 25,
              linkTo: ["局家洼站-342"],
              children: [
                {
                  name: "line",
                  length: 403,
                  direction: "vertical",
                  pos: [3790, 1327],
                  label: "局羊2#进线",
                  children: [
                    {
                      name: "line",
                      length: 75,
                      pos: [3715, 1327],
                      children: [
                        {
                          name: "directionDoubleResistor",
                          label: "354",
                          state: 1,
                          direction: "vertical",
                          pos: [3670, 1374],
                          children: [
                            {
                              name: "lineBold",
                              direction: "horizontal",
                              length: 100,
                              pos: [3630, 1418],
                              children: [
                                {
                                  name: "coilDouble",
                                  direction: "horizontal",
                                  pos: [3650, 1418],
                                  label: "3501",
                                  children: [
                                    {
                                      name: "coilDoubleEmpty",
                                      pos: [3580, 1418],
                                      label: "350",
                                      state: 0,
                                      code: "羊圈港站-350",
                                    },
                                  ]
                                },
                                {
                                  name: "directionDoubleResistor",
                                  state: 1,
                                  label: "352",
                                  direction: "vertical",
                                  pos: [3670, 1472],
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      pos: [3717, 1525],
                                      label: "2#",
                                      labelDirection: 'left',
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [3717, 1532],
                                          color: 2,
                                          children: [
                                            {
                                              name: "switch",
                                              state: 1,
                                              pos: [3697, 1567],
                                              label: "9903",
                                              direction: "top",
                                              children: [
                                                {
                                                  name: "resistor",
                                                  pos: [3689, 1592],
                                                  label: "990",
                                                  direction: "vertical",
                                                  state: 1,
                                                  children: [
                                                    {
                                                      name: "switch",
                                                      state: 1,
                                                      pos: [3697, 1641],
                                                      label: "9901",
                                                      direction: "top",
                                                      children: [
                                                        {
                                                          name: "lineBold",
                                                          pos: [3680, 1652],
                                                          length: 50,
                                                          children: [
                                                            {
                                                              name: "lineSwitch",
                                                              state: 1,
                                                              pos: [3665, 1652],
                                                              code: "羊圈港站-9901"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      label: "郝家庄",
      stationName: "郝家庄站",
      lpos: [3250, 1317],
      lsize: 38,
      color: 1,
      children: [
        {
          name: "line",
          label: "羊蓝线",
          pos: [3397, 1327],
          length: 100,
          linkTo: ["羊圈港站-359"],
          direction: "horizontal",
          children: [
            {
              name: "directionDoubleResistor",
              label: "373",
              state: 1,
              direction: "vertical",
              pos: [3351, 1374],
              children: [
                {
                  name: "lineBold",
                  pos: [3372, 1418],
                  length: 50,
                  children: [
                    {
                      name: "directionDoubleResistor",
                      label: "371",
                      state: 1,
                      direction: "vertical",
                      pos: [3351, 1472],
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [3398, 1525],
                          label: "1#",
                          labelDirection: 'left',
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [3398, 1532],
                              color: 2,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  label: "601",
                                  state: 1,
                                  direction: "vertical",
                                  pos: [3351, 1587],
                                  children: [
                                    {
                                      name: "lineBold",
                                      pos: [3372, 1632],
                                      length: 50,
                                      direction: "horizontal",
                                      linkTo: ["郝家庄站-600"]
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
                      pos: [3323, 1418],
                      label: "370",
                      state: 1,
                      children: [
                        {
                          name: "coilDouble",
                          pos: [3250, 1417],
                          label: "3701",
                          children: [
                            {
                              name: "lineBold",
                              pos: [3223, 1418],
                              length: 102,
                              children: [
                                {
                                  name: "directionDoubleResistor",
                                  label: "372",
                                  direction: "vertical",
                                  state: 1,
                                  pos: [3191, 1472],
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      pos: [3238, 1525],
                                      label: "2#",
                                      children: [
                                        {
                                          name: "SSZPoint",
                                          pos: [3238, 1532],
                                          color: 2,
                                          children: [
                                            {
                                              name: "directionDoubleResistor",
                                              state: 1,
                                              label: "602",
                                              direction: "vertical",
                                              pos: [3191, 1587],
                                              children: [
                                                {
                                                  name: "lineBold",
                                                  pos: [3223, 1632],
                                                  length: 102,
                                                  direction: "horizontal",
                                                  children: [
                                                    {
                                                      name: "coilDouble",
                                                      pos: [3230, 1632],
                                                      length: 40,
                                                      label: "6001",
                                                      direction: "horizontal",
                                                      children: [
                                                        {
                                                          name: "coilDoubleEmpty",
                                                          pos: [3325, 1632],
                                                          state: 0,
                                                          label: 600,
                                                          direction: "horizontal",
                                                          code: "郝家庄站-600"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "新华站",
      label: "新华",
      lpos: [4120, 1322],
      lsize: 38,
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [400, 60],
          length: 0,
          label: "杜新2#进线",
          labelDirection: "vertical",
          lpos: [4015, 1082]
        },
        {
          name: "resistor",
          pos: [3970, 1342],
          direction: "vertical",
          label: "432",
          state: 1,
          code: "新华站-432",
          children: [
            {
              name: "switch",
              state: 1,
              pos: [3978, 1390],
              direction: "bottom",
              label: "4323",
              children: [
                {
                  name: "line",
                  pos: [4000, 1390],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      pos: [4010, 1380],
                      direction: "left"
                    }
                  ]
                },
                {
                  name: "lineBold",
                  pos: [3950, 1418],
                  length: 170,
                  children: [
                    {
                      name: "switch",
                      direction: "top",
                      pos: [4090, 1400],
                      length: 40,
                      state: 1,
                      label: "4302",
                      children: [
                        {
                          name: "resistor",
                          pos: [4110, 1373],
                          state: 0,
                          label: "430",
                          children: [
                            {
                              name: "switch",
                              direction: "bottom",
                              pos: [4165, 1390],
                              length: 40,
                              state: 1,
                              label: "4301",
                              code: "玉门站-4301"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      state: 1,
                      pos: [4055, 1442],
                      direction: "bottom",
                      children: [
                        {
                          name: "line",
                          pos: [4082, 1451],
                          length: 0,
                          children: [
                            {
                              name: "resistor",
                              pos: [4047, 1481],
                              label: "434",
                              direction: "vertical",
                              state: 1,
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [4074, 1534],
                                  label: "2#",
                                  children: [
                                    {
                                      name: "SSZPoint",
                                      pos: [4074, 1544],
                                      color: 2,
                                      children: [
                                        {
                                          name: "directionDoubleResistor",
                                          pos: [4027, 1597],
                                          direction: "vertical",
                                          label: "602",
                                          state: 1,
                                          children: [
                                            {
                                              name: "lineBold",
                                              pos: [4025, 1637],
                                              length: 50,
                                              children: [
                                                {
                                                  name: "coilDoubleEmpty",
                                                  pos: [4075, 1637],
                                                  label: "600",
                                                  state: 0,
                                                  children: [
                                                    {
                                                      name: "coilDouble",
                                                      pos: [4140, 1637],
                                                      label: "6001",
                                                      code: "新华站-6001"
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
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
                      state: 1,
                      pos: [3955, 1442],
                      direction: "bottom",
                      label: "4383",
                      children: [
                        {
                          name: "line",
                          pos: [3982, 1451],
                          children: [
                            {
                              name: "entry",
                              code: "4383",
                              pos: [3992, 1442],
                              direction: "left"
                            }
                          ]
                        },
                        {
                          name: "resistor",
                          pos: [3946, 1481],
                          label: "438",
                          state: 1,
                          direction: "vertical",
                          children: [
                            {
                              name: "line",
                              pos: [3971, 1522],
                              length: 532,
                              direction: "vertical",
                              label: "新北线",
                              lpos: [3950, 1718],
                              labelDirection: "vertical",
                              linkTo: ["北石沟站-531"]
                            }
                          ]
                        }
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
      stationName: "新华站",
      children: [
        {
          name: "line",
          direction: "vertical",
          pos: [400, 60],
          length: 0,
          label: "胡新1#进线",
          labelDirection: "vertical",
          lpos: [4295, 1082]
        },
        {
          name: "resistor",
          pos: [4290, 1342],
          direction: "vertical",
          label: "431",
          state: 1,
          code: "新华站-431",
          children: [
            {
              name: "switch",
              state: 1,
              pos: [4298, 1390],
              label: "4313",
              direction: "bottom",
              children: [
                {
                  name: "line",
                  pos: [4320, 1390],
                  length: 20,
                  children: [
                    {
                      name: "entry",
                      pos: [4330, 1380],
                      direction: "left",
                      label: "4313D"
                    }
                  ]
                },
                {
                  name: "lineBold",
                  pos: [4170, 1418],
                  length: 200,
                  linkTo: ["玉门站-4301"],
                  children: [
                    {
                      name: "switch",
                      state: 1,
                      pos: [4298, 1442],
                      label: "4373",
                      direction: "bottom",
                      children: [
                        {
                          name: "entry",
                          pos: [4330, 1445],
                          direction: "left",
                          label: "4313D"
                        },
                        {
                          name: "resistor",
                          pos: [4290, 1492],
                          label: "437",
                          state: 1,
                          direction: "vertical",
                          children: [
                            {
                              name: "line",
                              pos: [4315, 1532],
                              length: 492,
                              label: "新北联络线",
                              labelDirection: "vertical",
                              lpos: [4335, 1718],
                              direction: "vertical",
                              linkTo: ["北石沟站-536"]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "switch",
                      state: 1,
                      direction: "top",
                      pos: [4230, 1452],
                      children: [
                        {
                          name: "resistor",
                          pos: [4221, 1481],
                          direction: "vertical",
                          label: "433",
                          state: 1,
                          children: [
                            {
                              name: "SSZPoint",
                              pos: [4247, 1534],
                              label: "1#",
                              labelDirection: "left",
                              children: [
                                {
                                  name: "SSZPoint",
                                  pos: [4247, 1544],
                                  color: 2,
                                  children: [
                                    {
                                      name: "directionDoubleResistor",
                                      pos: [4200, 1597],
                                      direction: "vertical",
                                      state: 1,
                                      label: "601",
                                      children: [
                                        {
                                          name: "lineBold",
                                          pos: [4120, 1637],
                                          length: 180,
                                          linkTo: ["新华站-6001"]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "北石沟站",
      label: "北石沟",
      lpos: [4100, 2040],
      lsize: 38,
      children: [
        {
          name: "directionDoubleResistor",
          pos: [3926, 2068],
          direction: "vertical",
          label: "531",
          state: 1,
          code: "北石沟站-531",
          children: [
            {
              name: "directionDoubleResistor",
              pos: [3970, 2158],
              label: "533",
              direction: "vertical",
              state: 1,
              children: [
                {
                  name: "SSZPoint",
                  pos: [4017, 2213],
                  label: "1#",
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [4017, 2223],
                      color: 2,
                      children: [
                        {
                          name: "directionDoubleResistor",
                          pos: [3970, 2278],
                          direction: "vertical",
                          label: "8801",
                          state: 1,
                          children: [
                            {
                              name: "lineBold",
                              pos: [3920, 2318],
                              length: 220,
                              children: [
                                {
                                  label: "88001",
                                  name: "coilDouble",
                                  pos: [4040, 2318],
                                  children: [
                                    {
                                      name: "coilDoubleEmpty",
                                      pos: [4140, 2318],
                                      label: "8800",
                                      state: 0,
                                      code: "北石沟站-8800"
                                    }
                                  ]
                                }
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
              name: "lineBold",
              pos: [3950, 2108],
              length: 180,
              children: [
                {
                  label: "5302",
                  name: "coilDouble",
                  pos: [4030, 2108],
                  children: [
                    {
                      label: "530",
                      state: 0,
                      name: "coilDoubleEmpty",
                      pos: [4120, 2108],
                      code: "北石沟站-530"
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
      stationName: "北石沟站",
      children: [
        {
          name: "directionDoubleResistor",
          pos: [4270, 2068],
          state: 0,
          label: "536",
          direction: "vertical",
          code: "北石沟站-536",
          children: [
            {
              name: "lineBold",
              pos: [4170, 2108],
              length: 250,
              code: "北石沟站-bold",
              linkTo: ["北石沟站-530"],
              children: [
                {
                  name: "directionDoubleResistor",
                  pos: [4340, 2068],
                  direction: "vertical",
                  label: "532",
                  state: 1,
                  code: "北石沟站-532"
                },
                {
                  name: "directionDoubleResistor",
                  pos: [4170, 2158],
                  direction: "vertical",
                  state: 1,
                  label: "534",
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [4217, 2213],
                      label: "2#",
                      labelDirection: "left",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [4217, 2223],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              pos: [4170, 2278],
                              label: "8802",
                              state: 1,
                              direction: "vertical",
                              children: [
                                {
                                  name: "lineBold",
                                  pos: [4190, 2318],
                                  length: 160,
                                  linkTo: ["北石沟站-8800"]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "刘巴足站",
      label: "刘巴足",
      lpos: [3260, 2040],
      lsize: 38,
      children: [
        {
          name: "directionDoubleResistor",
          pos: [3120, 2068],
          direction: "vertical",
          label: "384",
          state: 1,
          code: "刘巴足站-384",
          children: [
            {
              name: "lineBold",
              pos: [3150, 2108],
              length: 85,
              children: [
                {
                  name: "coilDoubleEmpty",
                  pos: [3230, 2108],
                  state: 0,
                  label: "380",
                  children: [
                    {
                      name: "coilDouble",
                      pos: [3305, 2108],
                      label: "3801",
                      code: "刘巴足站-3801"
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  pos: [3140, 2158],
                  label: "382",
                  state: 1,
                  direction: "vertical",
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [3187, 2213],
                      label: "2#",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [3187, 2223],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              label: "6021",
                              state: 1,
                              pos: [3140, 2278],
                              direction: "vertical",
                              children: [
                                {
                                  name: "lineBold",
                                  pos: [3170, 2318],
                                  length: 60,
                                  children: [
                                    {
                                      name: "coilDoubleEmpty",
                                      pos: [3230, 2318],
                                      state: 0,
                                      label: "600",
                                      children: [
                                        {
                                          name: "coilDouble",
                                          pos: [3320, 2318],
                                          label: "6001",
                                          code: "刘巴足站-6001"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "刘巴足站",
      children: [
        {
          name: "directionDoubleResistor",
          direction: "vertical",
          pos: [3395, 2068],
          state: 1,
          label: "383",
          code: "刘巴足站-383",
          children: [
            {
              name: "lineBold",
              pos: [3280, 2108],
              length: 180,
              linkTo: ["刘巴足站-3801"],
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [3385, 2158],
                  label: "381",
                  state: 1,
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [3432, 2213],
                      label: "1#",
                      labelDirection: "left",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [3432, 2223],
                          color: 2,
                          children: [
                            {
                              name: "directionDoubleResistor",
                              pos: [3385, 2278],
                              direction: "vertical",
                              label: "6202",
                              state: 1,
                              children: [
                                {
                                  name: "lineBold",
                                  pos: [3280, 2318],
                                  length: 170,
                                  linkTo: ["刘巴足站-6001"]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "局家洼站",
      label: "局家洼",
      lpos: [3645, 2040],
      lsize: 38,
      children: [
        {
          pos: [3580, 2068],
          name: "directionDoubleResistor",
          direction: "vertical",
          label: "339",
          state: 1,
          code: "局家洼站-339",
          children: [
            {
              name: "lineBold",
              pos: [3500, 2108],
              length: 140,
              children: [
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [3515, 2068],
                  label: "333",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      length: 100,
                      pos: [3560, 1940],
                      direction: "vertical",
                      linkTo: ["305-胡局1#"]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  pos: [3455, 2068],
                  label: "341",
                  state: 1,
                  children: [
                    {
                      name: "line",
                      pos: [3440, 2023],
                      length: 60,
                      linkTo: ["刘巴足站-383"]
                    }
                  ]
                },
                {
                  name: "coilDoubleEmpty",
                  pos: [3635, 2108],
                  label: "330",
                  state: 0,
                  children: [
                    {
                      name: "coilDouble",
                      pos: [3700, 2108],
                      label: "3301",
                      code: "局家洼站-3301"
                    }
                  ]
                },
                {
                  pos: [3550, 2158],
                  name: "directionDoubleResistor",
                  direction: "vertical",
                  label: 331,
                  state: 1,
                  children: [
                    {
                      pos: [3596, 2213],
                      name: "SSZPoint",
                      label: "1#",
                      children: [
                        {
                          name: "SSZPoint",
                          pos: [3596, 2223],
                          color: 2,
                          children: [
                            {
                              name: "switch",
                              state: 1,
                              pos: [3580, 2258],
                              direction: "top",
                              label: "9493",
                              children: [
                                {
                                  name: "resistor",
                                  pos: [3570, 2288],
                                  direction: "vertical",
                                  state: 1,
                                  label: "949",
                                  children: [
                                    {
                                      name: "switch",
                                      state: 1,
                                      pos: [3579, 2348],
                                      direction: "top",
                                      label: "9491",
                                      children: [
                                        {
                                          name: "lineBold",
                                          pos: [3549, 2358],
                                          children: [
                                            {
                                              name: "switch",
                                              state: 1,
                                              pos: [3629, 2360],
                                              label: "9303A",
                                              children: [
                                                {
                                                  name: "resistor",
                                                  pos: [3670, 2360],
                                                  label: "930",
                                                  state: 0,
                                                  code: "局家洼-930"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
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
      stationName: "局家洼站",
      children: [
        {
          name: "directionDoubleResistor",
          pos: [3850, 2068],
          direction: "vertical",
          label: "334",
          state: 1,
          code: "局家洼站-334",
          children: [
            {
              name: "lineBold",
              pos: [3685, 2108],
              length: 240,
              code: "局家洼站-334-bold",
              children: [
                {
                  name: "directionDoubleResistor",
                  pos: [3720, 2068],
                  direction: "vertical",
                  state: 1,
                  label: "342",
                  code: "局家洼站-342"
                },
                {
                  name: "directionDoubleResistor",
                  pos: [3785, 2068],
                  direction: "vertical",
                  label: "340",
                  state: 1,
                  linkTo: ["局家洼站-3301"],
                  children: [
                    {
                      name: "line",
                      length: 40,
                      pos: [3830, 1998],
                      direction: "vertical",
                      label: "局黄2#",
                      lpos: [3780, 1995],
                      children: [
                        {
                          name: "line",
                          length: 1215,
                          pos: [2618, 1998],
                          label: "局黄2#进线",
                          lpos: [2647, 1990],
                          linkTo: ["黄台峰站-470"]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "directionDoubleResistor",
                  pos: [3770, 2158],
                  direction: "vertical",
                  label: "332",
                  state: 1,
                  children: [
                    {
                      name: "SSZPoint",
                      pos: [3817, 2213],
                      label: "2#",
                      labelDirection: "left",
                      children: [
                        {
                          pos: [3816, 2223],
                          name: "SSZPoint",
                          color: 2,
                          children: [
                            {
                              name: "switch",
                              state: 1,
                              pos: [3800, 2258],
                              direction: "top",
                              label: "9483",
                              children: [
                                {
                                  name: "resistor",
                                  pos: [3790, 2288],
                                  direction: "vertical",
                                  label: "948",
                                  state: 1,
                                  children: [
                                    {
                                      name: "switch",
                                      state: 1,
                                      pos: [3799, 2348],
                                      direction: "top",
                                      label: "9481",
                                      children: [
                                        {
                                          name: "lineBold",
                                          pos: [3769, 2358],
                                          children: [
                                            {
                                              name: "switch",
                                              state: 1,
                                              pos: [3730, 2360],
                                              label: "9303B",
                                              linkTo: ["局家洼-930"]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}