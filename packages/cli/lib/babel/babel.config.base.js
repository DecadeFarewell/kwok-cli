"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 基础配置
var _default = exports.default = {
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
  presets: [["@babel/preset-typescript", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiYmFiZWxyYyIsImFzc3VtcHRpb25zIiwibm9DbGFzc0NhbGxzIiwiaWdub3JlIiwicHJlc2V0cyIsImlzVFNYIiwiYWxsRXh0ZW5zaW9ucyIsInBsdWdpbnMiLCJsZWdhY3kiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFiZWwvYmFiZWwuY29uZmlnLmJhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5Z+656GA6YWN572uXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBhY3Q6IGZhbHNlLCAvLyDovpPlh7rnmoTku6PnoIHmmK/lkKbov5vooYzntKflh5HljovnvKlcbiAgbWluaWZpZWQ6IGZhbHNlLCAvLyDovpPlh7rku6PnoIHmmK/lkKbov5vooYzmnIDlsI/ljJbljovnvKnlpITnkIZcbiAgYmFiZWxyYzogZmFsc2UsIC8vIOS4jeivu+WPluWklumDqOeahOmFjee9ruaWh+S7tlxuICBhc3N1bXB0aW9uczogeyBub0NsYXNzQ2FsbHM6IHRydWUgfSxcbiAgaWdub3JlOiBbXCIqKi8qLmQudHNcIl0sIC8vIOaOkumZpGQudHPlo7DmmI7mlofku7bnmoTnvJbor5FcbiAgcHJlc2V0czogW1xuICAgIFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiLCB7IGlzVFNYOiB0cnVlLCBhbGxFeHRlbnNpb25zOiB0cnVlIH1dLCAvLyDmlK/mjIF0c1xuICBdLFxuICBwbHVnaW5zOiBbXG4gICAgW1wiQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1leHBvcnQtZGVmYXVsdC1mcm9tXCJdLCAvLyDmlK/mjIHlr7zlh7rpu5jorqTlgLxcbiAgICBbXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnNcIiwgeyBsZWdhY3k6IHRydWUgfV0sIC8vIOaUr+aMgSBjbGFzcyDoo4XppbDlmajvvIjmsqHku4DkuYjnlKjlkKcgZW1tLi4u77yJXG4gIF0sXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQSxDQUFBQyxPQUFBLEdBQ2U7RUFDYkMsT0FBTyxFQUFFLEtBQUs7RUFBRTtFQUNoQkMsUUFBUSxFQUFFLEtBQUs7RUFBRTtFQUNqQkMsT0FBTyxFQUFFLEtBQUs7RUFBRTtFQUNoQkMsV0FBVyxFQUFFO0lBQUVDLFlBQVksRUFBRTtFQUFLLENBQUM7RUFDbkNDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztFQUFFO0VBQ3ZCQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLDBCQUEwQixFQUFFO0lBQUVDLEtBQUssRUFBRSxJQUFJO0lBQUVDLGFBQWEsRUFBRTtFQUFLLENBQUMsQ0FBQyxDQUFFO0VBQUEsQ0FDckU7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyw0Q0FBNEMsQ0FBQztFQUFFO0VBQ2hELENBQUMsbUNBQW1DLEVBQUU7SUFBRUMsTUFBTSxFQUFFO0VBQUssQ0FBQyxDQUFDLENBQUU7RUFBQTtBQUU3RCxDQUFDIiwiaWdub3JlTGlzdCI6W119