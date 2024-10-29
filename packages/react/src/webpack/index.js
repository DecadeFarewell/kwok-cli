import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default function webpackConfig(babel) {
  return {
    plugins: [
      process.env.NODE_ENV === 'development' &&
      new ReactRefreshWebpackPlugin(),
      
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.svg$/,
          type: "asset/resource",
        },
      ],
    },
  };
}
