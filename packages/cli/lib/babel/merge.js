"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(...arg) {
  let config = {};
  arg.map(item => {
    const plugins = [...(config?.plugins || []), ...(item?.plugins || [])];
    const presets = [...(config?.presets || []), ...(item?.presets || [])];
    config = {
      ...config,
      ...item,
      plugins,
      presets
    };
  });
  return config;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImFyZyIsImNvbmZpZyIsIm1hcCIsIml0ZW0iLCJwbHVnaW5zIiwicHJlc2V0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWJlbC9tZXJnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoLi4uYXJnKSB7XG4gIGxldCBjb25maWcgPSB7fTtcbiAgYXJnLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbnMgPSBbLi4uKGNvbmZpZz8ucGx1Z2lucyB8fCBbXSksIC4uLihpdGVtPy5wbHVnaW5zIHx8IFtdKV07XG4gICAgY29uc3QgcHJlc2V0cyA9IFsuLi4oY29uZmlnPy5wcmVzZXRzIHx8IFtdKSwgLi4uKGl0ZW0/LnByZXNldHMgfHwgW10pXTtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi5pdGVtLFxuICAgICAgcGx1Z2lucyxcbiAgICAgIHByZXNldHMsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBQUEsU0FBVSxHQUFHQyxHQUFHLEVBQUU7RUFDL0IsSUFBSUMsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBRUMsSUFBSSxJQUFLO0lBQ2hCLE1BQU1DLE9BQU8sR0FBRyxDQUFDLElBQUlILE1BQU0sRUFBRUcsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUlELElBQUksRUFBRUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLE1BQU1DLE9BQU8sR0FBRyxDQUFDLElBQUlKLE1BQU0sRUFBRUksT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUlGLElBQUksRUFBRUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFSixNQUFNLEdBQUc7TUFDUCxHQUFHQSxNQUFNO01BQ1QsR0FBR0UsSUFBSTtNQUNQQyxPQUFPO01BQ1BDO0lBQ0YsQ0FBQztFQUNILENBQUMsQ0FBQztFQUVGLE9BQU9KLE1BQU07QUFDZiIsImlnbm9yZUxpc3QiOltdfQ==