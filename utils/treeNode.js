// 处理文本
const splitByChineseToArray = (text) => {
  // 先判断有没有换行符
  if (text.includes('\n')) {
    return text.split('\n').map(item => item.trim()).filter(item => item !== '');
  }
  return text.match(
    /[a-zA-Z0-9\s\.,!?;:'"@#$%^&*()\-_+=<>/\\|]+|[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g
  ).filter(segment => segment.trim() !== '');
}

// 创建入口或者接地点
const createAccessPoint = ({ x = 0, y = 0, direction = 'bottom', length = 20, step = 5, color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x + 6).attr("y", y).attr("width", length - 12).attr("height", 3).attr("fill", color);
  group.append("rect").attr("x", x + 3).attr("y", y + step).attr("width", length - 6).attr("height", 3).attr("fill", color);
  group.append("rect").attr("x", x).attr("y", y + step * 2).attr("width", length).attr("height", 3).attr("fill", color);
  if (direction === 'left') {
    group.attr("transform", `rotate(90, ${x + length / 2}, ${y + length / 2})`);
  } else if (direction === 'top') {
    group.attr("transform", `rotate(180, ${x + length / 2}, ${y + length / 2})`);
  } else if (direction === 'right') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y + length / 2})`);
  }
  return group;
}

// 创建开关
const createSwitch = ({ x = 0, y = 0, w = 18, direction = 'right', color = 'green', item }) => {
  const h = 3
  const step = 10
  const group = svg.append("g").attr('x', x).attr('y', y).attr('cursor', 'pointer');
  group.append("rect").attr("x", x).attr("y", y).attr("width", w).attr("height", h).attr("fill", color);
  group.append("rect").attr("x", x + w + step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color);
  group.append("rect").attr("x", x + w + step).attr("y", y - h).attr("width", 3).attr("height", 5).attr("fill", color);
  const handle = group.append("rect").attr("x", x + w).attr("y", y).attr("width", step + 6).attr("height", h).attr("fill", color)
  handle.attr("transform", `rotate(${item.state === 0 ? -45 : -20}, ${x + w}, ${y + h / 2})`)
  group.on('click', () => {
    if (item.state == 1) {
      handle.attr("transform", `rotate(-45, ${x + w}, ${y + h / 2})`);
      item.state = 0;
    } else {
      handle.attr("transform", `rotate(-20, ${x + w}, ${y + h / 2})`);
      item.state = 1;
    }
  });
  if (direction === 'left') {
    group.attr("transform", `rotate(-180, ${x + w}, ${y + h / 2})`);
  } else if (direction === 'top') {
    group.attr("transform", `rotate(-90, ${x + w}, ${y + h / 2})`);
  } else if (direction === 'bottom') {
    group.attr("transform", `rotate(90, ${x + w}, ${y + h / 2})`);
  }
  return group;
}

// 创建开关
// const createSwitch = ({ x = 0, y = 0, w = 18, direction = 'right', color = 'green', item }) => {
//   const h = 3
//   const step = 10
//   const group = svg.append("g").attr('x', x).attr('y', y).attr('cursor', 'pointer');
//   group.append("rect").attr("x", x).attr("y", y).attr("width", w).attr("height", h).attr("fill", color);
//   group.append("rect").attr("x", x + w + step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color);
//   group.append("rect").attr("x", x + w + step).attr("y", y - h).attr("width", 3).attr("height", 5).attr("fill", color);

//   group.append("rect").attr("x", x + 16).attr("y", y - 27).attr("width", h).attr("height", w - 5).attr("fill", color);
//   group.append("rect").attr("x", x + 8).attr("y", y - 27).attr("width", w).attr("height", h).attr("fill", color);
//   group.append("rect").attr("x", x + 11).attr("y", y - 27 - (step / 2)).attr("width", w - 6).attr("height", h).attr("fill", color);
//   group.append("rect").attr("x", x + 14).attr("y", y - 27 - step).attr("width", w - 12).attr("height", h).attr("fill", color);
//   // if(item.is)

//   const handle = group.append("rect").attr("x", x + w).attr("y", y).attr("width", step + 6).attr("height", h).attr("fill", color)
//   handle.attr("transform", `rotate(${item.state === 0 ? -45 : -20}, ${x + w}, ${y + h / 2})`)
//   group.on('click', () => {
//     item.state = item.state + 1 > 3 ? 0 : item.state + 1;
//     let rotate = item.state === 0 ? -45 : item.state === 1 ? -20 : -90;
//     handle.attr("transform", `rotate(${rotate}, ${x + w}, ${y + h / 2})`);
//   });
//   if (direction === 'left') {
//     group.attr("transform", `rotate(-180, ${x + w}, ${y + h / 2})`);
//   } else if (direction === 'top') {
//     group.attr("transform", `rotate(-90, ${x + w}, ${y + h / 2})`);
//   } else if (direction === 'bottom') {
//     group.attr("transform", `rotate(90, ${x + w}, ${y + h / 2})`);
//   }
//   return group;
// }
// 创建导线开关
const createLineSwitch = ({ x = 0, y = 0, direction = 'right', color = 'green', item = {} }) => {
  const h = 3
  const group = svg.append("g").attr('x', x).attr('y', y);
  const line = group.append("rect").attr("x", x).attr("y", y).attr("width", 16).attr("height", h).attr("fill", color);
  line.attr("transform", `rotate(${item.state === 0 ? -45 : -10}, ${x}, ${y + h / 2})`).style('cursor', 'pointer')
    .on('click', () => {
      if (item.state == 1) {
        line.attr("transform", `rotate(-45, ${x}, ${y + h / 2})`);
        item.state = 0;
      } else {
        line.attr("transform", `rotate(-10, ${x}, ${y + h / 2})`);
        item.state = 1;
      }
      // updateState();
    });
  if (direction === 'left') {
    group.attr("transform", `rotate(-180, ${x}, ${y + h / 2})`);
  } else if (direction === 'top') {
    group.attr("transform", `rotate(-90, ${x}, ${y + h / 2})`);
  } else if (direction === 'bottom') {
    group.attr("transform", `rotate(90, ${x}, ${y + h / 2})`);
  }
  return group;
}

// 创建导线
const createLine = ({ x = 0, y = 0, direction = 'horizontal', length = 20, color = 'green', item = {} }) => {
  const line = svg.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", 3).attr("fill", color);
  if (direction === 'vertical') {
    line.attr("transform", `rotate(-90, ${x + length / 2}, ${y + length / 2})`);
  }
  if (item.mainEntry) {
    line.on('click', () => {
      item.state = item.state == 1 ? 0 : 1;
    });
  }
  return line;
}

// 创建站点入口导线
const createStationInLine = ({ x = 0, y = 0, direction = 'horizontal', length = 20, color = 'green', item = {} }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("circle").attr("cx", x + length).attr("cy", y + 2).attr("r", 10).attr("stroke-width", 3).attr("fill", "none")
  group.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", 3).attr("fill", color);
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y + length / 2})`);
  }
  group.on('click', () => {
    item.state = item.state == 1 ? 0 : 1;
    item.powerFrom = [];
  });
  return group;
}

// 创建电阻
const createResistor = ({ x = 0, y = 0, lw = 20, w = 30, direction = 'horizontal', color = 'green', item = {} }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  if (!item.noLine) {
    group.append("rect").attr("x", x + lw + w + 3).attr("y", y).attr("width", lw).attr("height", 3).attr("fill", color).attr('data-type', 'line');
    group.append("rect").attr("x", x).attr("y", y).attr("width", lw).attr("height", 3).attr("fill", color).attr('data-type', 'line');
  }
  group.append("rect").attr("x", x + lw + 1.5).attr("y", y - 5 + 1.5).attr("width", w).attr("height", 10).attr("stroke-width", 3).attr("stroke", color).attr("fill", "none").attr('data-type', 'resistor');
  group.append("rect").attr("x", x + lw + 1.5).attr("y", y - 3).attr("width", w).attr("height", 10).attr("fill", color).attr("fill-opacity", "0").attr('data-type', 'line');
  // 失电状态 断开显示x
  group.append('line').attr('x1', x + lw + 1.5).attr('y1', y - 5 + 1.5).attr('x2', x + lw + 1.5 + w).attr('y2', y - 5 + 1.5 + 10).attr('stroke-width', 2).attr('data-type', 'nopower-line');
  group.append('line').attr('x1', x + lw + 1.5).attr('y1', y - 5 + 1.5 + 10).attr('x2', x + lw + 1.5 + w).attr('y2', y - 5 + 1.5).attr('stroke-width', 2).attr('data-type', 'nopower-line');
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + lw + w / 2}, ${y + lw / 2})`);
  }
  group.on('click', () => {
    // item.state = item.state == 1 ? 0 : 1;
    changeState(item);
  });
  return group;
}

// 创建粗线
const createLineBold = ({ x = 0, y = 0, direction = 'horizontal', length = 100, color = 'green' }) => {
  const line = svg.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", 10).attr("fill", color);
  if (direction === 'vertical') {
    line.attr("transform", `rotate(-90, ${x + length / 2}, ${y + length / 2})`);
  }
  return line;
}

// 创建大圆连接点
const createSSZPoint = ({ x = 0, y = 0, r = 10, color = 'green' }) => {
  let sszPoint = svg.append("circle").attr("cx", x).attr("cy", y).attr("r", r).attr("stroke-width", 3).attr("stroke", color).attr("fill", "none");
  return sszPoint;
}

const createCapacitor = ({ x = 0, y = 0, lw = 20, w = 30, direction = 'left', color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", lw).attr("height", 3).attr("fill", color).attr('data-type', 'line');
  group.append("rect").attr("x", x + lw + 1.5).attr("y", y - 5 + 1.5).attr("width", w).attr("height", 10).attr("stroke-width", 3)
    .attr("stroke", color).attr("fill", "none").attr('data-type', 'capacitor');
  group.append("rect").attr("x", x + lw + 1.5).attr("y", y - 3).attr("width", 0.6 * w).attr("height", 10).attr("fill", color).attr('data-type', 'line');
  group.append("rect").attr("x", x + lw + w + 3).attr("y", y).attr("width", lw).attr("height", 3).attr("fill", color).attr('data-type', 'line');
  if (direction === 'right') {
    group.attr("transform", `rotate(180, ${x + lw + w / 2}, ${y + lw / 2})`);
  } else if (direction === 'top') {
    group.attr("transform", `rotate(90, ${x + lw + w / 2}, ${y + lw / 2})`);
  } else if (direction === 'bottom') {
    group.attr("transform", `rotate(-90, ${x + lw + w / 2}, ${y + lw / 2})`);
  }
  return group;
}

// 创建IPT，三个同色圆圈组成
const createIPT = ({ x = 0, y = 0, r = 6, direction = 'top', color = 'green' }) => {
  const distance = r * 1.5
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("circle").attr("cx", x).attr("cy", y).attr("r", r).attr("stroke-width", 3).attr("stroke", color).attr("fill", "none").attr("data-type", "ipt");
  group.append("circle").attr("cx", x + distance).attr("cy", y).attr("r", r).attr("stroke-width", 3).attr("stroke", color).attr("fill", "none").attr("data-type", "ipt");
  group.append("circle").attr("cx", x + distance / 2).attr("cy", y - Math.sqrt(3) / 2 * distance)
    .attr("r", r).attr("stroke-width", 3).attr("stroke", color).attr("fill", "none")
    .attr("data-type", "ipt");
  group.append("rect").attr("x", x + distance / 2 - 1.5).attr("y", y - 33).attr("width", 3).attr("height", 20).attr("fill", color).attr("data-type", "line");
  if (direction === 'right') {
    group.attr("transform", `rotate(90, ${x + distance / 2}, ${y + distance / 2})`);
  } else if (direction === 'left') {
    group.attr("transform", `rotate(-90, ${x + distance / 2}, ${y + distance / 2})`);
  } else if (direction === 'bottom') {
    group.attr("transform", `rotate(180, ${x + distance / 2}, ${y + distance / 2})`);
  }
  return group;
}

// 创建PT，两个同色圆圈组成，有重叠
const createPT = ({ x = 0, y = 0, r = 6, direction = 'horizontal', color = 'green' }) => {
  const distance = r * 1.3
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("circle").attr("cx", x).attr("cy", y).attr("r", r).attr("stroke-width", 3).attr("stroke", color).style("fill", "none").attr("data-type", "pt");
  group.append("circle").attr("cx", x + distance).attr("cy", y).attr("r", r).attr("stroke-width", 3).attr("stroke", color).style("fill", "none").attr("data-type", "pt");
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + distance / 2}, ${y + distance / 2})`);
  }
  return group;
}

// 创建粗线链接点
const createLinePoint = ({ x = 0, y = 0, lw = 30, w = 20, direction = 'horizontal', color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", lw).attr("height", 10).attr("fill", color);
  group.append("rect").attr("x", x + lw - 2).attr("y", y - 1.5).attr("width", w).attr("height", 3).attr("fill", color);
  group.append("rect").attr("x", x + lw - 2).attr("y", y + 8.5).attr("width", w).attr("height", 3).attr("fill", color);
  group.append("rect").attr("x", x + lw + w - 4).attr("y", y).attr("width", lw).attr("height", 10).attr("fill", color);
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + lw + w / 2}, ${y + lw / 2})`);
  }
  return group;
}

// 方向箭头
const createDirectionSingle = ({ x = 0, y = 0, direction = 'right', length = 30, w = 10, h = 3, color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", h).attr("fill", color);
  group.append("rect").attr("x", x + length - w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + length}, ${y + h / 2})`);
  group.append("rect").attr("x", x + length - w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + length}, ${y + h / 2})`);
  if (direction === 'left') {
    group.attr("transform", `rotate(180, ${x + length / 2}, ${y})`);
  } else if (direction === 'top') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y})`);
  } else if (direction === 'bottom') {
    group.attr("transform", `rotate(90, ${x + length / 2}, ${y})`);
  }
  return group;
}

// 双箭头双方向
const createDirectionDouble = ({ x = 0, y = 0, direction = 'horizontal', length = 60, h = 3, w = 10, step = 5, color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", h).attr("fill", color);
  group.append("rect").attr("x", x + length - w - 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + length - w}, ${y + h / 2})`);
  group.append("rect").attr("x", x + length - w - 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + length - w}, ${y + h / 2})`);
  group.append("rect").attr("x", x + length - w - step - 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + length - w - step}, ${y + h / 2})`);
  group.append("rect").attr("x", x + length - w - step - 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + length - w - step}, ${y + h / 2})`);
  group.append("rect").attr("x", x + 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + 10}, ${y + h / 2})`);
  group.append("rect").attr("x", x + 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + 10}, ${y + h / 2})`);
  group.append("rect").attr("x", x + step + 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + step + 10}, ${y + h / 2})`);
  group.append("rect").attr("x", x + step + 10).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + step + 10}, ${y + h / 2})`);
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y})`);
  }
  return group;
}

// 双箭头双方向电阻-  母联
const createDirectionDoubleResistor = ({ x = 0, y = 0, direction = 'horizontal', length = 30, h = 3, l = 30, w = 10, step = 5, color = 'green', item = {} }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", l).attr("height", h).attr("fill", color).attr('data-type', 'normal');
  group.append("rect").attr("x", x + w + step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + w + step}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + w + step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + w + step}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + w}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + w}, ${y + h / 2})`).attr('data-type', 'normal');

  group.append("rect").attr("x", x + l).attr("y", y - (10 - h) / 2).attr("width", length).attr("height", 10).style("fill", "none")
    .attr("stroke-width", 3).attr("stroke", color).attr('data-type', 'directionDoubleResistor');

  group.append("rect").attr("x", x + l + length).attr("y", y).attr("width", l).attr("height", h).attr("fill", color).attr('data-type', 'normal');
  group.append("rect").attr("x", x + l + length + w - step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + l + length + w * 2 - step}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + l + length + w - step).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + l + length + w * 2 - step}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + l + length + w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(45, ${x + l + length + w * 2}, ${y + h / 2})`).attr('data-type', 'normal');
  group.append("rect").attr("x", x + l).attr("y", y - 3).attr("width", l).attr("height", 10).attr("fill", color).attr("fill-opacity", "0").attr('data-type', 'line');
  group.append("rect").attr("x", x + l + length + w).attr("y", y).attr("width", w).attr("height", h).attr("fill", color).attr("transform", `rotate(-45, ${x + l + length + w * 2}, ${y + h / 2})`).attr('data-type', 'normal');


  // 失电状态 断开显示x
  group.append('line').attr('x1', x + l).attr('y1', y - (10 - h) / 2).attr('x2', x + l + length).attr('y2', y - (10 - h) / 2 + 10).attr('stroke-width', 2).attr('data-type', 'nopower-line');
  group.append('line').attr('x1', x + l).attr('y1', y - (10 - h) / 2 + 10).attr('x2', x + l + length).attr('y2', y - (10 - h) / 2).attr('stroke-width', 2).attr('data-type', 'nopower-line');

  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + (length + 2 * l) / 2}, ${y})`);
  }
  group.on('click', () => {
    item.state = item.state == 1 ? 0 : 1;
  });
  return group;
}

// 实心线圈
const createCoilDouble = ({ x = 0, y = 0, direction = 'horizontal', length = 50, h = 10, l2 = 4, h2 = 18, step = 20, color = 'green' }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", h).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 - l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 + step).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 - 3 * l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 + step + 2 * l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y + h / 2})`);
  }
  return group;
}

// 空心线圈
const createCoilDoubleEmpty = ({ x = 0, y = 0, direction = 'horizontal', length = 50, h = 10, l2 = 3, h2 = 16, step = 20, color = 'green', item = {} }) => {
  const group = svg.append("g").attr('x', x).attr('y', y);
  group.append("rect").attr("x", x).attr("y", y).attr("width", (length - step) / 2).attr("height", h).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 + step).attr("y", y).attr("width", (length - step) / 2).attr("height", h).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2).attr("y", y).attr("width", step).attr("height", l2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2).attr("y", y + h - l2).attr("width", step).attr("height", l2).style("fill", color);

  group.append("rect").attr("x", x + (length - step) / 2 - l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 + step).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 - 3 * l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);
  group.append("rect").attr("x", x + (length - step) / 2 + step + 2 * l2).attr("y", y - (h2 - h) / 2).attr("width", l2).attr("height", h2).style("fill", color);

  group.append("rect").attr("x", x + (length - step) / 2).attr("y", y).attr("width", step).attr("height", h).attr("fill", color).attr("fill-opacity", "0").attr('data-type', 'line');

  // 失电状态 断开显示x
  group.append('line').attr('x1', x + (length - step) / 2).attr('y1', y + 2).attr('x2', x + (length - step) / 2 + step).attr('y2', y + h - 2).attr('stroke-width', 2).attr('data-type', 'nopower-line');
  group.append('line').attr('x1', x + (length - step) / 2).attr('y1', y + h - 2).attr('x2', x + (length - step) / 2 + step).attr('y2', y + 2).attr('stroke-width', 2).attr('data-type', 'nopower-line');


  if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y + h / 2})`);
  }
  group.on('click', () => {
    item.state = item.state == 1 ? 0 : 1;
  });
  return group;
}

const createLabel = (node) => {
  // 生成文本
  if (node.label && node.name !== '') {
    const { lsize = 16 } = node;
    let labelComp = null; // 文本元素
    let labelWidth = 0; // 元素宽度
    // 生成元素
    if (node.labelDirection === 'vertical') {
      // label.attr("writing-mode", "tb-rl") 非中文字符 旋转了
      const labelArr = splitByChineseToArray(node.label);
      labelComp = labelArr.map((item, index) => {
        return svg.append("text").attr('letter-spacing', '-5px').attr("font-size", lsize).attr('fill', theme.textColor).attr('width', lsize).attr('text-anchor', 'middle').text(item)
      })
    } else {
      labelComp = svg.append("text").attr("font-size", lsize).attr('letter-spacing', '-4px').attr('fill', theme.textColor).text(node.label);
      labelWidth = labelComp._groups[0][0].getComputedTextLength();
    }
    // 确定文本坐标
    let x = node.lpos[0];
    let y = node.lpos[1];

    if (node.lpos.length > 0) {
      x = node.lpos[0];
      y = node.lpos[1];
    } else if (node.name === 'resistor') {
      if (node.direction === 'vertical') {
        x = node.pos[0] + 30;
        y = node.pos[1] + 20;
      } else if (node.labelDirection === 'top') {
        x = node.pos[0] + 15;
        y = node.pos[1] - 10;
      } else if (node.labelDirection === 'bottom') {
        x = node.pos[0] + 15;
        y = node.pos[1] + 37;
      } else {
        x = node.pos[0] + 15;
        y = node.color === 2 ? node.pos[1] + 37 : node.pos[1] - 10;
      }
    } else if (node.name === 'directionDoubleResistor') {
      if (node.direction === 'vertical') {
        x = node.labelDirection === 'vertical' ? node.pos[0] + 75 : node.pos[0] + 52;
        y = node.labelDirection === 'vertical' ? node.pos[1] - 30 : node.pos[1] + 10;
      } else {
        x = node.pos[0] + 25;
        y = node.pos[1] - 7;
      }
    } else if (node.name === 'directionDouble') {
      x = node.direction === 'vertical' ? node.pos[0] + 40 : node.pos[0] + 0;
      y = node.direction === 'vertical' ? node.pos[1] + 10 : node.pos[1] - 5;
    } else if (node.name === 'lineSwitch') {
      if (node.labelDirection === 'bottom') {
        x = node.pos[0] - ((labelWidth - 20) / 2 + 15);
        y = node.pos[1] + 40;
      } else {
        x = node.pos[0] + 8 - (labelWidth / 2);
        y = node.color === 2 ? node.pos[1] + 40 : node.pos[1] - 5;
      }
    } else if (node.name === 'coilDouble') {
      x = node.pos[0] + 25 - (labelWidth / 2);
      y = node.color === 2 ? node.pos[1] + 40 : node.pos[1] - 5;
    } else if (node.name === 'coilDoubleEmpty') {
      x = node.pos[0] + 25 - (labelWidth / 2);
      y = node.color === 2 ? node.pos[1] + 40 : node.pos[1] - 5;
    } else if (node.name === 'switch') {
      if (node.direction === 'top') {
        x = node.labelDirection === 'left' ? node.pos[0] - (labelWidth + 15) : node.pos[0] + 20;
        y = node.pos[1] + 5;
      } else if (node.direction === 'bottom') {
        x = node.pos[0] + 20;
        y = node.pos[1] + 20;
      } else if (node.direction === 'left') {
        x = node.pos[0] - 20;
        y = node.pos[1] - 5;
      } else if (node.direction === 'right') {
        x = node.pos[0] + 0;
        y = node.color === 2 ? node.pos[1] - 7 : node.pos[1] + 30;
      }
    } else if (node.name === 'SSZPoint') {
      x = node.labelDirection === 'left' ? node.pos[0] - 50 : node.pos[0] + 20;
      y = node.labelDirection === 'left' ? node.pos[1] + 15 : node.pos[1] + 15;
    } else if (node.name === 'SZPoint') {
      x = node.labelDirection === 'left' ? node.pos[0] - 45 : node.pos[0] + 10;
      y = node.labelDirection === 'left' ? node.pos[1] + 15 : node.pos[1] + 15;
    };
    // 设置坐标  有坐标设置位置
    if (x > 0 && y > 0) {
      if (node.labelDirection === 'vertical') {
        labelComp.map((item, index) => {
          return item.attr("x", x).attr("y", y + lsize * (index + 1));
        })
      } else {
        labelComp.attr("x", x).attr("y", y);
      }
    } else {
      // 无坐标 删除元素
      if (node.labelDirection === 'vertical') {
        labelComp.map((item, index) => {
          return item.remove();
        })
      } else {
        labelComp.remove();
      }

    }
  }
}

// 处理层级覆盖问题 先创建完所有文字 再创建图形
var comArray = [];
var textArray = [];
// 
const saveComConfig = (node, colorIndex) => {
  comArray.push({ node, colorIndex });
  if (node.name === 'switch' && colorIndex !== 0) {
  } else if (node.name === 'lineSwitch' && colorIndex !== 0) {
  } else {
    createLabel(node);
  }
}

// 组件创建
const create = (node, colorIndex) => {
  let color = node.hasI ? data.colorType.normal[colorIndex] : data.colorType.status[1];
  // 生成文本
  // createLabel(node);

  // 生成组件
  let comp;
  if (node.name === 'entry') {
    comp = createAccessPoint({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  } else if (node.name === 'switch') {
    comp = createSwitch({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, item: node });
  } else if (node.name === 'line') {
    comp = createLine({ x: node.pos[0], y: node.pos[1], direction: node.direction, length: node.length, color: color, item: node });
  } else if (node.name === 'stationInLine') {
    comp = createStationInLine({ x: node.pos[0], y: node.pos[1], direction: node.direction, length: node.length, color: color, item: node });
  } else if (node.name === 'resistor') {
    comp = createResistor({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, item: node });
  } else if (node.name === 'capacitor') {
    comp = createCapacitor({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  } else if (node.name === 'IPT') {
    comp = createIPT({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  } else if (node.name === 'lineBold') {
    comp = createLineBold({ x: node.pos[0], y: node.pos[1], length: node.length, direction: node.direction, color: color });
  } else if (node.name === 'SSZPoint') {
    comp = createSSZPoint({ x: node.pos[0], y: node.pos[1], color: color });
  } else if (node.name === 'SZPoint') {
    comp = createSSZPoint({ x: node.pos[0], y: node.pos[1], color: color, r: data.components.SZPoint.radius });
  } else if (node.name === 'linePoint') {
    comp = createLinePoint({ x: node.pos[0], y: node.pos[1], color: color, lw: node.lw, w: node.w });
  } else if (node.name === 'lineSwitch') {
    comp = createLineSwitch({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, item: node });
  } else if (node.name === 'directionDouble') {
    comp = createDirectionDouble({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, length: node.length });
  } else if (node.name === 'directionDoubleResistor') {
    comp = createDirectionDoubleResistor({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, length: node.length, item: node });
  } else if (node.name === 'directionSingle') {
    comp = createDirectionSingle({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  } else if (node.name === 'coilDouble') {
    comp = createCoilDouble({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  } else if (node.name === 'coilDoubleEmpty') {
    comp = createCoilDoubleEmpty({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color, length: node.length, step: node.step, item: node });
  } else if (node.name === 'PT') {
    comp = createPT({ x: node.pos[0], y: node.pos[1], direction: node.direction, color: color });
  }
  node.comp = comp;
}
// 更新组件颜色/ 样式状态
const updateComponentColor = (process, hasI) => {
  let color = data.colorType.status[1]
  // 有电改色
  if (hasI) {
    color = data.colorType.normal[process.color];
  } else if (process.state) {
    // 无电 看开关状态  闭合 改色
    color = '#08d446';
  }
  let comp = process.comp;
  if (comp && comp.node().tagName === 'g') {
    // 处理group中的每一个对象
    if (process.name === 'resistor') {
      // 电阻只改变边框的颜色
      comp.selectAll('[data-type="resistor"]').attr("stroke", color);
      comp.selectAll('[data-type="line"]').attr("fill", color);
      // 无电 无开关状态  改线颜色
      if (!hasI && !process.state) {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", color);
      } else {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", null);
      }
    } else if (process.name === 'directionDoubleResistor') {
      comp.selectAll('[data-type="normal"]').style('fill', color);
      comp.selectAll('[data-type="directionDoubleResistor"]').style("stroke", color);
      // 无电 无开关状态  改线颜色
      if (!hasI && !process.state) {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", color);
      } else {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", null);
      }
    } else if (process.name === 'coilDoubleEmpty') { // 母联
      comp.selectAll('*').style('fill', color);
      // 无电 无开关状态  改线颜色
      if (!hasI && !process.state) {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", color);
      } else {
        comp.selectAll('[data-type="nopower-line"]').attr("stroke", null);
      }
    } else if (process.name === 'IPT') {
      comp.selectAll('[data-type="ipt"]').attr("stroke", color);
      comp.selectAll('[data-type="line"]').attr('fill', color);
    } else if (process.name === 'PT') {
      comp.selectAll('[data-type="pt"]').style("stroke", color);
    } else if (process.name === 'capacitor') {
      comp.selectAll('[data-type="capacitor"]').attr("stroke", color);
      comp.selectAll('[data-type="line"]').attr('fill', color);
    } else {
      comp.selectAll('*').style('fill', color);
    }
  } else if (comp) {
    // 直接处理对象
    if (process.name === 'SSZPoint' || process.name === 'SZPoint') {
      comp.attr('stroke', color);
    } else {
      comp.attr('fill', color);
    }
  }
}
// 具备阻断电路联通功能的组件
const includesNames = ['stationInLine', 'switch', 'lineSwitch', 'resistor', 'directionDoubleResistor', 'coilDoubleEmpty'];


function changeState(item) {
  console.log(item);
  let detail = item.detail;
  // 此处先弹窗确认 openDialog
  if (item.message && openDialog) {
    let oldMessage = item.message;
    swal({
      title: item.label,
      content: {
        element: "textarea",
        attributes: {
          placeholder: "Type your password",
          value: item.message,
          className: 'button-detail',
          disabled: true,
        },
      },
      buttons: {
        edit: {
          text: "编辑",
          value: 'edit',
          visible: true,
          className: "btn-edit",
          closeModal: false
        },
        cancelEdit: {
          text: "取消",
          value: 'cancel-edit',
          visible: true,
          closeModal: false,
          className: "swal-button--cancel cancel-edit",
        },
        confirm: {
          text: "确定",
          value: true,
          visible: true,
          closeModal: true // 点击后关闭弹窗
        },
        cancel: {
          text: "取消",
          value: false,
          visible: true,
          closeModal: true // 点击后关闭弹窗
        },
      },
      dangerMode: true,
    }).then((res) => {
      console.log(res, '------');
      if (res === true) {
        // 确认了
        item.state = item.state == 1 ? 0 : 1;
      }
    });

    $('.swal-button-container:first-child').addClass('btn-float-left')
    // 修改高度
    var textarea = document.querySelector('textarea');
    textarea.style.height = '100px';
    textarea.style.height = textarea.scrollHeight + 'px';
    textarea.addEventListener('input', (e) => {
      textarea.style.height = '100px';
      textarea.style.height = e.target.scrollHeight + 'px';
    });
    $('.cancel-edit').parent().hide();
    // 编辑按钮添加监听事件
    $('.btn-edit').on('click', (e) => {
      e.preventDefault();
      // 保存
      if ($('.btn-edit').text() === '保存') {
        // 关闭编辑
        $('textarea').attr('disabled', true);
        // 隐藏确认和取消按钮
        $('.swal-button--confirm').parent().show();
        $('.swal-button--cancel').parent().show();
        $('.cancel-edit').parent().hide();
        // 修改按钮文本
        $('.btn-edit').removeClass("swal-button--loading").text('编辑');
        $('.swal-button-container:first-child').addClass('btn-float-left')
        // 掉用接口保存
        console.log('保存');
        let message = $('textarea').val();
        changeSwitchDetail(item.detail, message).then(function (data) {
          console.log('保存完成', '-----', data);
          item.message = message;
        }).catch(function (e) {
          console.log(e);
        });
      } else {
        // 开放编辑
        $('textarea').attr('disabled', false);
        // 编辑按钮去除loading 并修改为编辑
        $('.btn-edit').removeClass("swal-button--loading").text('保存');
        // 隐藏确认和取消按钮
        $('.swal-button--confirm').parent().hide();
        $('.swal-button--cancel').parent().hide();
        $('.swal-button-container:first-child').removeClass('btn-float-left')
        $('.cancel-edit').parent().show();
        console.log('开始编辑');
      }
    })
    // 取消编辑 监听
    $('.cancel-edit').on('click', (e) => {
      e.preventDefault();
      // 取消编辑
      // 文本不可编辑  按钮状态还原
      $('textarea').attr('disabled', true);
      // 隐藏确认和取消按钮
      $('.swal-button--confirm').parent().show();
      $('.swal-button--cancel').parent().show();
      $('.cancel-edit').parent().hide();
      $('.cancel-edit').removeClass("swal-button--loading")
      // 修改按钮文本
      $('.btn-edit').removeClass("swal-button--loading").text('编辑');
      $('.swal-button-container:first-child').addClass('btn-float-left')
      $('textarea').val(oldMessage)
    })
  } else {
    item.state = item.state == 1 ? 0 : 1;
  }
}


class StateNode {
  constructor(obj = {}) {
    this.id = obj.code || this._generateId();
    this._state = obj.state || 0;
    this.displayState = obj.state || 0;
    this.name = obj.name || null; // 组件名称
    this.direction = obj.direction || null; // 组件方向
    this.pos = obj.pos || [0, 0]; // 组件位置
    this.label = obj.label || null; // 组件文字
    this.lpos = obj.lpos || []; // 组件字体位置
    this.labelDirection = obj.labelDirection || null; // 组件字体方向
    this.lsize = obj.lsize || 34; // 组件字体大小
    this.length = obj.length; // 组件长度
    this.code = obj.code || null;
    this.color = obj.color; // 组件颜色
    this.hasI = obj.hasI; // 是否有电
    this.noLine = obj.noLine || false; // 电阻是否绘制横线
    this.linkTo = obj.linkTo || null; // 关联关系
    this.powerFrom = obj.powerFrom || []; // 电力来源 child
    this.powerToChild = obj.powerToChild === false ? false : true; // 是否向子节点供电
    this.parent = null; // 父节点
    this.children = []; // 子节点
    this.links = new Set(); // 存储关联节点
    this.linkConfigs = new WeakMap(); // 存储关联配置
    this.message = obj.message;
    this.detail = null;
    this.belongStation = obj.stationName; // 所属站点

    // 保存组件配置  后续按组件类型/层级顺序顺序生成渲染  原因：部分组件可能重叠导致 组件层级问题影响对应组件操作
    saveComConfig(this, obj.color);
    // this.comp = create(this, obj.color);
    this.comp = null; // 组件元素实例
  }

  // 私有方法：生成随机ID
  _generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  // 状态访问器
  get state() {
    return this.displayState;
  }

  set state(newState) {
    // 设置按钮状态
    this._state = newState;
    this.displayState = newState;
    this._propagateState();
  }

  // 迭代方式添加子节点
  addChild(nodeData) {
    if (!nodeData.color && nodeData.color != 0) {
      nodeData.color = this.color;
    }
    if (!nodeData.stationName && nodeData.stationName != 0) {
      nodeData.stationName = this.belongStation;
    }
    const child = new StateNode(nodeData);
    child.parent = this;
    this.children.push(child);
    return child;
  }

  // 建立节点关联
  buildLink(targetNode, config = { bidirectional: true }) {
    this.links.add(targetNode);

    if (config.bidirectional !== false) {
      targetNode.links.add(this);
    }
  }

  // 非递归的状态传播方法
  _propagateState(otherPower, context = {}) {
    const visited = new Set();
    const queue = [{ node: this, context }];
    const linkedNodeQueue = []; // 关联节点队列   关联节点最后处理
    let aa = [];

    while (queue.length > 0) {
      const { node, context } = queue.shift();
      if (queue.length === 0) {
        queue.push(...linkedNodeQueue);
        linkedNodeQueue.length = 0;
      }
      // const { fromParent = null, fromChild = null, fromLink = null } = context;
      // 跳过已处理节点
      if (visited.has(node)) continue;
      visited.add(node);

      // 获取当前电路组件联通状态
      let nodeState = includesNames.includes(node.name) ? node.state : true;
      if (node.name === 'stationInLine') {
        node.hasI = nodeState;
      } else {
        // 无非三种情况  子节点、 父节点 、 关联节点
        // 父有没有电
        if (node.parent && node.parent.powerToChild) {
          // 父节点                   有电  且电力来源没我 或者有别的                 且 开关闭合
          if (node.parent.hasI && (!node.parent.powerFrom.includes(node.id) || node.parent.powerFrom.length > 1) && nodeState) {
            node.powerFrom.push(node.parent.id);
          } else {
            node.powerFrom = node.powerFrom.filter(item => item !== node.parent.id);
          }
        }

        // 子节点有没有电
        if (node.children.length > 0) {
          node.children.forEach(child => {
            // 子有电 且电力来源非当前节点  则当前节点通电 并且添加电力来源
            if (child.hasI && (!child.powerFrom.includes(node.id) || child.powerFrom.length > 1) && nodeState) {
              node.powerFrom.push(child.id);
            } else {
              node.powerFrom = node.powerFrom.filter(item => item !== child.id);
            }
          })
        }

        // 关联节点有没有电
        if (node.links.size > 0) {
          node.links.forEach(link => {
            // 有电  且不是自己的电力来源  则添加为电力来源
            if (link.hasI && (!link.powerFrom.includes(node.id) || link.powerFrom.length > 1) && link.powerFrom.length > 0 && nodeState) {
              node.powerFrom.push(link.id);
            } else {
              node.powerFrom = node.powerFrom.filter(item => item !== link.id);
            }
          });
        }

        if (!nodeState) {
          node.powerFrom = []
        }

        // 去重一下
        node.powerFrom = Array.from(new Set(node.powerFrom));
        // 有没有电 要看有没有电力来源

        node.hasI = node.powerFrom.length > 0;
      }

      // 传播限制条件： 根据高低压 颜色判断  110kV 0  35kV 1  6kV 2  低压无法向高压传播
      // 来源父: 则向子节点传播
      // 遍历子节点
      if (node.powerToChild) {
        (node.children || []).forEach(child => {
          let childState = includesNames.includes(child.name) ? child.state : true;
          // 子节点颜色 大于等于 父节点颜色  则不传播
          if (childState) {
            queue.push({
              node: child,
              context: { ...context, fromParent: node, fromChild: null, fromLink: null }
            });
          }
        })
      }

      // 来源子: 则向父节点传播
      if (node.parent) {
        // 父节点颜色 大于等于 子节点颜色  则不传播
        if (true) {
          queue.push({
            node: node.parent,
            context: { ...context, fromParent: null, fromChild: node, fromLink: null }
          });
        }
      }

      // 来源关联节点: 则向关联节点传播  排除掉来源
      node.links.forEach(linkedNode => {
        let linkedNodeState = includesNames.includes(linkedNode.name) ? linkedNode.state : true;
        // 关联节点颜色 大于等于 父节点颜色  则不传播
        if (linkedNodeState) {
          // queue.push({
          //   node: linkedNode,
          //   context: { ...context, fromParent: null, fromChild: null, fromLink: node }
          // });
          linkedNodeQueue.push({
            node: linkedNode,
            context: { ...context, fromParent: null, fromChild: null, fromLink: node }
          });
        }
      });

      // 根据是否有电 更新组件颜色
      updateComponentColor(node, node.hasI);
    }
  }
}
