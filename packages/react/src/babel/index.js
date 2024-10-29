
export default function babelConfig() {
  return {
    plugins: [
      process.env.NODE_ENV === 'development' && 
      require.resolve('react-refresh/babel')
    ].filter(Boolean),
    presets: [
      ['@babel/preset-react', {
        // 指定如何处理 React 的运行时（runtime）转换
        // classic： 要求在每个使用 JSX 的文件中都要显式地导入React。
        // automatic： 自动为每个文件添加必要的React导入（如果没有显式导入的话）
        runtime: 'automatic',
      }],
    ],
  };
}


