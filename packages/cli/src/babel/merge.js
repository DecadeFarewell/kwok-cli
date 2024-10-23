export default function (...arg) {
  let config = {};
  arg.map((item) => {
    const plugins = [...(config?.plugins || []), ...(item?.plugins || [])];
    const presets = [...(config?.presets || []), ...(item?.presets || [])];
    config = {
      ...config,
      ...item,
      plugins,
      presets,
    };
  });

  return config;
}
