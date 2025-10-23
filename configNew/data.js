var data = {
  baseEntrance: {
    // 电站接入口
    148: {
      name: "邢家社",
      v: "220KV",
      key: 148,
    },
    154: {
      name: "古交",
      v: "220KV",
      key: 154,
    },
    152: {
      name: "迎西",
      v: "220KV",
      key: 152,
    },
    151: {
      name: "冶峪",
      v: "220KV",
      key: 151,
    },
    189: {
      name: "晋阳",
      v: "220KV",
      key: 189,
    },
    437: {
      name: "东社",
      v: "110KV",
      key: 437,
    },
  },
  colorType: {
    normal: ["red", "#f2fa18ff", "blue"], // 红色，橙色，蓝色
    status: ["red", "#08d446", "transparent"], // 红色：过载，灰色：断路，透明：正常
  },
  components: {
    // 组件配置
    line: {
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    lineBold: {
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    entry: {
      // 接入口
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
      size: 20, // 接入口大小
    },
    switch: {
      // 开关
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    resistor: {
      // 电阻
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    capacitor: {
      // 电容
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    IPT: {
      // 互感器 三个小圆圈
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    PT: {
      // 互感器 两个小圆圈
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    SSZPoint: {
      // 连接点
      radius: 10,
    },
    SZPoint: {
      // 连接点
      radius: 7,
    },
    directionDoubleResistor: {
      direction: ["vertical", "horizontal"],
    },
    directionDouble: {
      // 方向图标
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    directionSingle: {
      // 方向图标
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    lineSwitch: {
      // 粗线开关
      direction: ["left", "right", "top", "bottom"], // 左、右、上、下
    },
    linePoint: {
      // 粗线路连接点，上下两条杠，两头连着粗线，纵向和横向
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    coilDoubleEmpty: {
      // 线圈中空
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
    coilDouble: {
      // 线圈中实
      direction: ["vertical", "horizontal"], // 纵向、横向
    },
  },
  station: [],
};
