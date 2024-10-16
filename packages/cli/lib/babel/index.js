"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerBabel = registerBabel;
function registerBabel() {
  require('@babel/register')({
    // 支持在node环境下使用 ES6+ 语法
    presets: ['@babel/preset-env'],
    // 支持导出默认值，如 export a from 'b'
    plugins: ["@babel/plugin-proposal-export-default-from"]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWdpc3RlckJhYmVsIiwicmVxdWlyZSIsInByZXNldHMiLCJwbHVnaW5zIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2JhYmVsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gcmVnaXN0ZXJCYWJlbCgpIHtcbiAgcmVxdWlyZSgnQGJhYmVsL3JlZ2lzdGVyJykoe1xuICAgIC8vIOaUr+aMgeWcqG5vZGXnjq/looPkuIvkvb/nlKggRVM2KyDor63ms5VcbiAgICBwcmVzZXRzOiBbJ0BiYWJlbC9wcmVzZXQtZW52J10sXG4gICAgLy8g5pSv5oyB5a+85Ye66buY6K6k5YC877yM5aaCIGV4cG9ydCBhIGZyb20gJ2InXG4gICAgcGx1Z2luczogW1wiQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1leHBvcnQtZGVmYXVsdC1mcm9tXCJdXG4gIH0pO1xufVxuXG5leHBvcnQge1xuICByZWdpc3RlckJhYmVsXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxTQUFTQSxhQUFhQSxDQUFBLEVBQUc7RUFDdkJDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pCO0lBQ0FDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQzlCO0lBQ0FDLE9BQU8sRUFBRSxDQUFDLDRDQUE0QztFQUN4RCxDQUFDLENBQUM7QUFDSiIsImlnbm9yZUxpc3QiOltdfQ==