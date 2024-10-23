"use strict";

module.exports = {
  optimization: {
    // 是否启用代码压缩，压缩会删除已经标记过的无用代码，使用的是webpack(v5)自带的 terser-webpack-plugin 插件
    minimize: process.env.NODE_ENV !== "development",
    // note:开发环境下没有压缩的必要
    usedExports: process.env.NODE_ENV !== "development",
    // 启用或禁用tree shaking
    runtimeChunk: "single",
    // 将运行时代码提取到单独的
    moduleIds: 'deterministic',
    // 一种选择模块id的算法，看不懂,主打听劝 emm....
    splitChunks: {
      chunks: "all",
      // 将第三方库提取到单独的 vendor chunk 中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW1pemF0aW9uIiwibWluaW1pemUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ1c2VkRXhwb3J0cyIsInJ1bnRpbWVDaHVuayIsIm1vZHVsZUlkcyIsInNwbGl0Q2h1bmtzIiwiY2h1bmtzIiwiY2FjaGVHcm91cHMiLCJ2ZW5kb3IiLCJ0ZXN0IiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL3dlYnBhY2sub3B0aW1pemF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpbWl6YXRpb246IHtcbiAgICAvLyDmmK/lkKblkK/nlKjku6PnoIHljovnvKnvvIzljovnvKnkvJrliKDpmaTlt7Lnu4/moIforrDov4fnmoTml6DnlKjku6PnoIHvvIzkvb/nlKjnmoTmmK93ZWJwYWNrKHY1KeiHquW4pueahCB0ZXJzZXItd2VicGFjay1wbHVnaW4g5o+S5Lu2XG4gICAgbWluaW1pemU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsIC8vIG5vdGU65byA5Y+R546v5aKD5LiL5rKh5pyJ5Y6L57yp55qE5b+F6KaBXG4gICAgdXNlZEV4cG9ydHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsIC8vIOWQr+eUqOaIluemgeeUqHRyZWUgc2hha2luZ1xuICAgIHJ1bnRpbWVDaHVuazogXCJzaW5nbGVcIiwgLy8g5bCG6L+Q6KGM5pe25Luj56CB5o+Q5Y+W5Yiw5Y2V54us55qEXG4gICAgbW9kdWxlSWRzOiAnZGV0ZXJtaW5pc3RpYycsIC8vIOS4gOenjemAieaLqeaooeWdl2lk55qE566X5rOV77yM55yL5LiN5oeCLOS4u+aJk+WQrOWKnSBlbW0uLi4uXG4gICAgc3BsaXRDaHVua3M6IHtcbiAgICAgIGNodW5rczogXCJhbGxcIixcbiAgICAgIC8vIOWwhuesrOS4ieaWueW6k+aPkOWPluWIsOWNleeLrOeahCB2ZW5kb3IgY2h1bmsg5LitXG4gICAgICBjYWNoZUdyb3Vwczoge1xuICAgICAgICB2ZW5kb3I6IHtcbiAgICAgICAgICB0ZXN0OiAvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLFxuICAgICAgICAgIG5hbWU6ICd2ZW5kb3JzJyxcbiAgICAgICAgICBjaHVua3M6ICdhbGwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDZkMsWUFBWSxFQUFFO0lBQ1o7SUFDQUMsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLGFBQWE7SUFBRTtJQUNsREMsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLGFBQWE7SUFBRTtJQUNyREUsWUFBWSxFQUFFLFFBQVE7SUFBRTtJQUN4QkMsU0FBUyxFQUFFLGVBQWU7SUFBRTtJQUM1QkMsV0FBVyxFQUFFO01BQ1hDLE1BQU0sRUFBRSxLQUFLO01BQ2I7TUFDQUMsV0FBVyxFQUFFO1FBQ1hDLE1BQU0sRUFBRTtVQUNOQyxJQUFJLEVBQUUsd0JBQXdCO1VBQzlCQyxJQUFJLEVBQUUsU0FBUztVQUNmSixNQUFNLEVBQUU7UUFDVjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=