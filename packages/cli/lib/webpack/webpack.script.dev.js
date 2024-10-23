"use strict";

var _babel = require("../babel");
module.exports = {
  entry: ["webpack-hot-middleware/client?reload=true"],
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [{
      test: /\.(js|ts|mjs|cjs|jsx|tsx)$/,
      exclude: /node_modules/,
      // 开发环境，排除node_modules编译，提高速度，正式环境需要，有些库语法不合规
      use: [{
        loader: "babel-loader",
        options: (0, _babel.babelOptionWebpack)()
        /**
         * 1. 支持ts、导出默认值、装饰器
         * 2. vue-loader
         * 3. 第三方库的按需加载
         * 4. sourceMap、preset-env
         * 5. 
         */
      }]
    }]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFiZWwiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5IiwiZGV2dG9vbCIsInBsdWdpbnMiLCJ3ZWJwYWNrIiwiSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4iLCJydWxlcyIsInRlc3QiLCJleGNsdWRlIiwidXNlIiwibG9hZGVyIiwib3B0aW9ucyIsImJhYmVsT3B0aW9uV2VicGFjayJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL3dlYnBhY2suc2NyaXB0LmRldi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYWJlbE9wdGlvbldlYnBhY2sgfSBmcm9tICcuLi9iYWJlbCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5OiBbXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlL2NsaWVudD9yZWxvYWQ9dHJ1ZVwiXSxcblxuICBkZXZ0b29sOiBcInNvdXJjZS1tYXBcIixcblxuICBwbHVnaW5zOiBbXG4gICAgbmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSxcbiAgXSxcbiAgbW9kdWxlOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLihqc3x0c3xtanN8Y2pzfGpzeHx0c3gpJC8sXG4gICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLCAvLyDlvIDlj5Hnjq/looPvvIzmjpLpmaRub2RlX21vZHVsZXPnvJbor5HvvIzmj5Dpq5jpgJ/luqbvvIzmraPlvI/njq/looPpnIDopoHvvIzmnInkupvlupPor63ms5XkuI3lkIjop4RcbiAgICAgICAgdXNlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiBcImJhYmVsLWxvYWRlclwiLFxuICAgICAgICAgICAgb3B0aW9uczogYmFiZWxPcHRpb25XZWJwYWNrKCksXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIDEuIOaUr+aMgXRz44CB5a+85Ye66buY6K6k5YC844CB6KOF6aWw5ZmoXG4gICAgICAgICAgICAgKiAyLiB2dWUtbG9hZGVyXG4gICAgICAgICAgICAgKiAzLiDnrKzkuInmlrnlupPnmoTmjInpnIDliqDovb1cbiAgICAgICAgICAgICAqIDQuIHNvdXJjZU1hcOOAgXByZXNldC1lbnZcbiAgICAgICAgICAgICAqIDUuIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLEtBQUssRUFBRSxDQUFDLDJDQUEyQyxDQUFDO0VBRXBEQyxPQUFPLEVBQUUsWUFBWTtFQUVyQkMsT0FBTyxFQUFFLENBQ1AsSUFBSUMsT0FBTyxDQUFDQywwQkFBMEIsQ0FBQyxDQUFDLENBQ3pDO0VBQ0ROLE1BQU0sRUFBRTtJQUNOTyxLQUFLLEVBQUUsQ0FDTDtNQUNFQyxJQUFJLEVBQUUsNEJBQTRCO01BQ2xDQyxPQUFPLEVBQUUsY0FBYztNQUFFO01BQ3pCQyxHQUFHLEVBQUUsQ0FDSDtRQUNFQyxNQUFNLEVBQUUsY0FBYztRQUN0QkMsT0FBTyxFQUFFLElBQUFDLHlCQUFrQixFQUFDO1FBQzVCO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ1UsQ0FBQztJQUVMLENBQUM7RUFFTDtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=