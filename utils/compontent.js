// 组件创建
const create = (process, color, child) => {
    // 判断是否为主入口，主入口则直接显示正常色
    if (process.mainEntry) {
    color = data.colorType.normal[child.color];
    }
    if (process.name === 'entry') {
    process.comp = createAccessPoint({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    } else if (process.name === 'switch') {
    process.comp = createSwitch({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, item: process });
    } else if (process.name === 'line') {
    process.comp = createLine({ x: process.pos[0], y: process.pos[1], direction: process.direction, length: process.length, color: color });
    } else if (process.name === 'resistor') {
    process.comp = createResistor({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, item: process });
    } else if (process.name === 'capacitor') {
    process.comp = createCapacitor({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    } else if (process.name === 'IPT') {
    process.comp = createIPT({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    } else if (process.name === 'lineBold') {
    process.comp = createLineBold({ x: process.pos[0], y: process.pos[1], length: process.length, direction: process.direction, color: color });
    } else if (process.name === 'SSZPoint') {
    process.comp = createSSZPoint({ x: process.pos[0], y: process.pos[1], color: color });
    } else if (process.name === 'SZPoint') {
    process.comp = createSSZPoint({ x: process.pos[0], y: process.pos[1], color: color, r: data.components.SZPoint.radius });
    } else if (process.name === 'linePoint') {
    process.comp = createLinePoint({ x: process.pos[0], y: process.pos[1], color: color, lw: process.lw, w: process.w });
    } else if (process.name === 'lineSwitch') {
    process.comp = createLineSwitch({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, item: process });
    } else if (process.name === 'directionDouble') {
    process.comp = createDirectionDouble({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, length: process.length });
    } else if (process.name === 'directionDoubleResistor') {
    process.comp = createDirectionDoubleResistor({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, length: process.length, item: process });
    } else if (process.name === 'directionSingle') {
    process.comp = createDirectionSingle({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    } else if (process.name === 'coilDouble') {
    process.comp = createCoilDouble({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    } else if (process.name === 'coilDoubleEmpty') {
    process.comp = createCoilDoubleEmpty({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color, length: process.length, step: process.step, item: process });
    } else if (process.name === 'PT') {
    process.comp = createPT({ x: process.pos[0], y: process.pos[1], direction: process.direction, color: color });
    }
    // 生成文本
    if (process.label) {
    const { lsize = 14 } = process;
    const font_color = '#ffffff';
    if (process.labelDirection === 'vertical') {
        // label.attr("writing-mode", "tb-rl") 非中文字符 旋转了
        // 循环便利label 的每个字符
        const lineHeight = 13;

        const labelArr = splitByChineseToArray(process.label);
        labelArr.forEach((item, index) => {
        svg.append("text").attr("x", process.lpos[0]).attr("y", process.lpos[1] + lsize * (index + 1)).attr("font-size", lsize).attr('fill', theme.textColor).attr('width', 12).attr('text-anchor', 'middle').text(item)
        })
    } else {
        const label = svg.append("text").attr("x", process.lpos[0]).attr("y", process.lpos[1]).attr("font-size", lsize).attr('fill', theme.textColor).text(process.label);
    }
    }
    if (process.children) {
    process.children.forEach((child1) => {
        create(child1, color, child);
    });
    }
}
// 处理文本
const splitByChineseToArray = (text) => {
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
    if (item.state === 1) {
        handle.attr("transform", `rotate(-45, ${x + w}, ${y + h / 2})`);
        item.state = 0;
    } else {
        handle.attr("transform", `rotate(-20, ${x + w}, ${y + h / 2})`);
        item.state = 1;
    }
    // console.log('1:', item.code, item.state)
    updateState();
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

// 创建导线开关
const createLineSwitch = ({ x = 0, y = 0, direction = 'right', color = 'green', item = {} }) => {
    const h = 3
    const group = svg.append("g").attr('x', x).attr('y', y);
    const line = group.append("rect").attr("x", x).attr("y", y).attr("width", 16).attr("height", h).attr("fill", color);
    line.attr("transform", `rotate(${item.state === 0 ? -45 : -10}, ${x}, ${y + h / 2})`).style('cursor', 'pointer')
    .on('click', () => {
        if (item.state === 1) {
        line.attr("transform", `rotate(-45, ${x}, ${y + h / 2})`);
        item.state = 0;
        } else {
        line.attr("transform", `rotate(-10, ${x}, ${y + h / 2})`);
        item.state = 1;
        }
        updateState();
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
const createLine = ({ x = 0, y = 0, direction = 'horizontal', length = 20, color = 'green' }) => {
    const line = svg.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", 3).attr("fill", color);
    if (direction === 'vertical') {
    line.attr("transform", `rotate(-90, ${x + length / 2}, ${y + length / 2})`);
    }
    return line;
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

    if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + lw + w / 2}, ${y + lw / 2})`);
    }
    group.on('click', () => {
    item.state = item.state === 1 ? 0 : 1;
    updateState();
    });
    return group;
}

// 创建粗线
const createLineBold = ({ x = 0, y = 0, direction = 'horizontal', length = 100, color = 'green' }) => {
    const line = svg.append("rect").attr("x", x).attr("y", y).attr("width", length).attr("height", 10).attr("fill", color);
    if (direction === 'vertical') {
    // console.log('line:', direction)

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
    if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + (length + 2 * l) / 2}, ${y})`);
    }
    group.on('click', () => {
    item.state = item.state === 1 ? 0 : 1;
    // console.log('1:', item.code, item.state)
    updateState();
    });
    return group;
}

// 实心线圈
const createCoilDouble = ({ x = 0, y = 0, direction = 'horizontal', length = 50, h = 10, l2 = 3, h2 = 16, step = 20, color = 'green' }) => {
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


    if (direction === 'vertical') {
    group.attr("transform", `rotate(-90, ${x + length / 2}, ${y + h / 2})`);
    }
    group.on('click', () => {
    console.log(item, 'item.state');
    item.state = item.state === 1 ? 0 : 1;
    updateState();
    });
    return group;
}



// 创建灯泡
const createLamp = ({ x = 0, y = 0, w = 20, direction = 'horizontal', color = 'green' }) => {
}