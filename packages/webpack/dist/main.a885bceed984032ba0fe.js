"use strict";
(self["webpackChunk_kwok_webpack"] = self["webpackChunk_kwok_webpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me 123456';
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  element.appendChild(btn);
  return element;
}

//  document.body.appendChild(component());
var element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log('I get called from print.js 1234!');
  __webpack_require__.e(/*! import() */ "src_a_js").then(__webpack_require__.bind(__webpack_require__, /*! ./a */ "./src/a.js")).then(function (module) {
    var res = module.add(1, 2);
    console.log('res: ', res);
  });
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1729238460978
        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hODg1YmNlZWQ5ODQwMzJiYTBmZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNVO0FBQ2I7QUFFbkIsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ25CLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBRTNDRixPQUFPLENBQUNJLFNBQVMsR0FBR1Asa0RBQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUM7RUFFdERNLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGlCQUFpQjtFQUNqQ0QsR0FBRyxDQUFDRyxPQUFPLEdBQUdSLGlEQUFPO0VBRXJCRSxPQUFPLENBQUNPLFdBQVcsQ0FBQ0osR0FBRyxDQUFDO0VBRXZCLE9BQU9ILE9BQU87QUFDaEI7O0FBRUQ7QUFDQyxJQUFJQSxPQUFPLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQkUsUUFBUSxDQUFDTyxJQUFJLENBQUNELFdBQVcsQ0FBQ1AsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BCcEIsU0FBU0YsT0FBT0EsQ0FBQSxFQUFHO0VBQ2hDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQztFQUUvQyw4SEFBYSxDQUFDQyxJQUFJLENBQUMsVUFBQUMsTUFBTSxFQUFJO0lBQzNCLElBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRyxHQUFHLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7O0FDUEE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyxtS0FBZ0YsY0FBYyxnQkFBZ0I7QUFDOUk7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGt3b2svd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Aa3dvay93ZWJwYWNrLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL0Brd29rL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzZjODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgMTIzNDU2JztcbiAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgcmV0dXJuIGVsZW1lbnQ7XG4gfVxuXG4vLyAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4gbGV0IGVsZW1lbnQgPSBjb21wb25lbnQoKTsgLy8g5a2Y5YKoIGVsZW1lbnTvvIzku6XlnKggcHJpbnQuanMg5L+u5pS55pe26YeN5paw5riy5p+TXG4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMgMTIzNCEnKTtcblxuICBpbXBvcnQoJy4vYScpLnRoZW4obW9kdWxlID0+IHtcbiAgICBjb25zdCByZXMgPSBtb2R1bGUuYWRkKDEsIDIpXG4gICAgY29uc29sZS5sb2coJ3JlczogJywgcmVzKTtcbiAgfSlcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzI5MjM4NDYwOTc4XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZXNNb2R1bGVcIjp0cnVlfSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6WyJfIiwicHJpbnRNZSIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidG4iLCJpbm5lckhUTUwiLCJqb2luIiwib25jbGljayIsImFwcGVuZENoaWxkIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwibW9kdWxlIiwicmVzIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==