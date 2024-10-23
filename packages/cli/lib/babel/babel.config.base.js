"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 基础配置
var _default = exports.default = {
  sourceMaps: true,
  // 生成sourceMap
  compact: false,
  // 输出的代码是否进行紧凑压缩
  minified: false,
  // 输出代码是否进行最小化压缩处理
  babelrc: false,
  // 不读取外部的配置文件
  assumptions: {
    noClassCalls: true
  },
  ignore: ["**/*.d.ts"],
  // 排除d.ts声明文件的编译
  presets: [["@babel/preset-env", {
    modules: false
  }],
  // 允许使用最新的 JavaScript 特性 && 不用转化模块 保持es导入
  ["@babel/preset-typescript", {
    isTSX: true,
    allExtensions: true
  }] // 支持ts
  ],
  plugins: [["@babel/plugin-proposal-export-default-from"],
  // 支持导出默认值
  ["@babel/plugin-proposal-decorators", {
    legacy: true
  }] // 支持 class 装饰器（没什么用吧 emm...）
  ]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0Iiwic291cmNlTWFwcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImJhYmVscmMiLCJhc3N1bXB0aW9ucyIsIm5vQ2xhc3NDYWxscyIsImlnbm9yZSIsInByZXNldHMiLCJtb2R1bGVzIiwiaXNUU1giLCJhbGxFeHRlbnNpb25zIiwicGx1Z2lucyIsImxlZ2FjeSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWJlbC9iYWJlbC5jb25maWcuYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDln7rnoYDphY3nva5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlTWFwczogdHJ1ZSwgLy8g55Sf5oiQc291cmNlTWFwXG4gIGNvbXBhY3Q6IGZhbHNlLCAvLyDovpPlh7rnmoTku6PnoIHmmK/lkKbov5vooYzntKflh5HljovnvKlcbiAgbWluaWZpZWQ6IGZhbHNlLCAvLyDovpPlh7rku6PnoIHmmK/lkKbov5vooYzmnIDlsI/ljJbljovnvKnlpITnkIZcbiAgYmFiZWxyYzogZmFsc2UsIC8vIOS4jeivu+WPluWklumDqOeahOmFjee9ruaWh+S7tlxuICBhc3N1bXB0aW9uczogeyBub0NsYXNzQ2FsbHM6IHRydWUgfSxcbiAgaWdub3JlOiBbXCIqKi8qLmQudHNcIl0sIC8vIOaOkumZpGQudHPlo7DmmI7mlofku7bnmoTnvJbor5FcbiAgcHJlc2V0czogW1xuICAgIFtcIkBiYWJlbC9wcmVzZXQtZW52XCIsIHsgbW9kdWxlczogZmFsc2UgfV0sIC8vIOWFgeiuuOS9v+eUqOacgOaWsOeahCBKYXZhU2NyaXB0IOeJueaApyAmJiDkuI3nlKjovazljJbmqKHlnZcg5L+d5oyBZXPlr7zlhaVcbiAgICBbXCJAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHRcIiwgeyBpc1RTWDogdHJ1ZSwgYWxsRXh0ZW5zaW9uczogdHJ1ZSB9XSwgLy8g5pSv5oyBdHNcbiAgXSxcbiAgcGx1Z2luczogW1xuICAgIFtcIkBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZXhwb3J0LWRlZmF1bHQtZnJvbVwiXSwgLy8g5pSv5oyB5a+85Ye66buY6K6k5YC8XG4gICAgW1wiQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzXCIsIHsgbGVnYWN5OiB0cnVlIH1dLCAvLyDmlK/mjIEgY2xhc3Mg6KOF6aWw5Zmo77yI5rKh5LuA5LmI55So5ZCnIGVtbS4uLu+8iVxuICBdLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQSxHQUNlO0VBQ2JDLFVBQVUsRUFBRSxJQUFJO0VBQUU7RUFDbEJDLE9BQU8sRUFBRSxLQUFLO0VBQUU7RUFDaEJDLFFBQVEsRUFBRSxLQUFLO0VBQUU7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQUU7RUFDaEJDLFdBQVcsRUFBRTtJQUFFQyxZQUFZLEVBQUU7RUFBSyxDQUFDO0VBQ25DQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7RUFBRTtFQUN2QkMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxtQkFBbUIsRUFBRTtJQUFFQyxPQUFPLEVBQUU7RUFBTSxDQUFDLENBQUM7RUFBRTtFQUMzQyxDQUFDLDBCQUEwQixFQUFFO0lBQUVDLEtBQUssRUFBRSxJQUFJO0lBQUVDLGFBQWEsRUFBRTtFQUFLLENBQUMsQ0FBQyxDQUFFO0VBQUEsQ0FDckU7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyw0Q0FBNEMsQ0FBQztFQUFFO0VBQ2hELENBQUMsbUNBQW1DLEVBQUU7SUFBRUMsTUFBTSxFQUFFO0VBQUssQ0FBQyxDQUFDLENBQUU7RUFBQTtBQUU3RCxDQUFDIiwiaWdub3JlTGlzdCI6W119