"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = webpackConfig;
const {
  VueLoaderPlugin
} = require("vue-loader");
function webpackConfig(babel) {
  return {
    plugins: [new VueLoaderPlugin(), require("unplugin-vue-setup-extend-plus/webpack").default({
      /* options */
    })],
    module: {
      rules: [{
        test: /\.vue$/,
        use: [{
          loader: "vue-loader",
          options: {
            // 标签之间的空格
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      }, {
        test: /\.svg$/,
        // svg的vue组件化
        // 当规则匹配时，只使用第一个匹配规则。
        oneOf: [{
          // svg vue 组件化
          use: ["vue-loader", "vue-svg-loader"]
        }, {
          type: "asset/resource"
        }]
      }]
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJWdWVMb2FkZXJQbHVnaW4iLCJyZXF1aXJlIiwid2VicGFja0NvbmZpZyIsImJhYmVsIiwicGx1Z2lucyIsImRlZmF1bHQiLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJ1c2UiLCJsb2FkZXIiLCJvcHRpb25zIiwiY29tcGlsZXJPcHRpb25zIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwib25lT2YiLCJ0eXBlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYnBhY2svaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBWdWVMb2FkZXJQbHVnaW4gfSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWJwYWNrQ29uZmlnKGJhYmVsKSB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgbmV3IFZ1ZUxvYWRlclBsdWdpbigpLFxuICAgICAgcmVxdWlyZShcInVucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy93ZWJwYWNrXCIpLmRlZmF1bHQoe1xuICAgICAgICAvKiBvcHRpb25zICovXG4gICAgICB9KSxcbiAgICBdLFxuICAgIG1vZHVsZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC52dWUkLyxcbiAgICAgICAgICB1c2U6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbG9hZGVyOiBcInZ1ZS1sb2FkZXJcIixcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIC8vIOagh+etvuS5i+mXtOeahOepuuagvFxuICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczogeyBwcmVzZXJ2ZVdoaXRlc3BhY2U6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuc3ZnJC8sIC8vIHN2Z+eahHZ1Zee7hOS7tuWMllxuICAgICAgICAgIC8vIOW9k+inhOWImeWMuemFjeaXtu+8jOWPquS9v+eUqOesrOS4gOS4quWMuemFjeinhOWImeOAglxuICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIHN2ZyB2dWUg57uE5Lu25YyWXG4gICAgICAgICAgICAgIHVzZTogW1widnVlLWxvYWRlclwiLCBcInZ1ZS1zdmctbG9hZGVyXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJhc3NldC9yZXNvdXJjZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNO0VBQUVBO0FBQWdCLENBQUMsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUVsQyxTQUFTQyxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0MsT0FBTztJQUNMQyxPQUFPLEVBQUUsQ0FDUCxJQUFJSixlQUFlLENBQUMsQ0FBQyxFQUNyQkMsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUNJLE9BQU8sQ0FBQztNQUN4RDtJQUFBLENBQ0QsQ0FBQyxDQUNIO0lBQ0RDLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsQ0FDTDtRQUNFQyxJQUFJLEVBQUUsUUFBUTtRQUNkQyxHQUFHLEVBQUUsQ0FDSDtVQUNFQyxNQUFNLEVBQUUsWUFBWTtVQUNwQkMsT0FBTyxFQUFFO1lBQ1A7WUFDQUMsZUFBZSxFQUFFO2NBQUVDLGtCQUFrQixFQUFFO1lBQU07VUFDL0M7UUFDRixDQUFDO01BRUwsQ0FBQyxFQUNEO1FBQ0VMLElBQUksRUFBRSxRQUFRO1FBQUU7UUFDaEI7UUFDQU0sS0FBSyxFQUFFLENBQ0w7VUFDRTtVQUNBTCxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCO1FBQ3RDLENBQUMsRUFDRDtVQUNFTSxJQUFJLEVBQUU7UUFDUixDQUFDO01BRUwsQ0FBQztJQUVMO0VBQ0YsQ0FBQztBQUNIIiwiaWdub3JlTGlzdCI6W119