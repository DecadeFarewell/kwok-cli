export default function VariableMiddleware(req, res, next) {
  req.manifestContext = {
    css: [],
    js: [],
  };
  req.view = ""; // html 模板
  // ssr相关 （暂时用不上）
  req.reactContext = {
    renderToString: "",
    storeToString: "{}",
  };
  next();
}
