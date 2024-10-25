"use strict";

var _vue = require("vue");
var _App = _interopRequireDefault(require("./App.vue"));
require("@/assets/style/index.css");
var _elementPlus = _interopRequireDefault(require("element-plus"));
require("element-plus/dist/index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const app = (0, _vue.createApp)(_App.default);
console.log('app: ===12', app);
app.use(_elementPlus.default);
app.mount('#app');
//# sourceMappingURL=main.js.map