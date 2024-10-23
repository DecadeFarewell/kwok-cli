import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { requireWebpackConfig } from "@kwok/utils";

function cssLoader(less = false, modules = false) {
  const {
    postcssLoaderOptions = {},
    sassLoaderOptions = {},
    lessLoaderOptions = {},
  } = requireWebpackConfig();

  const list = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: postcssLoaderOptions,
    },
  ];
  if (less) {
    return list.concat({
      loader: "less-loader",
      options: lessLoaderOptions,
    });
  } else {
    return list.concat({
      loader: "sass-loader",
      options: sassLoaderOptions,
    });
  }
}

// 样式配置
export default function () {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          oneOf: [
            {
              // svg vue 组件化
              resourceQuery: /module=true/,
              use: cssLoader(false, true),
            },
            {
              use: cssLoader(false, false),
            },
          ],
        },
        {
          test: /\.less$/,
          oneOf: [
            {
              // svg vue 组件化
              resourceQuery: /module=true/,
              use: cssLoader(true, true),
            },
            {
              use: cssLoader(true, false),
            },
          ],
        },
      ],
    },
  };
}
