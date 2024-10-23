import { requireManifest, cwdPath } from "@fdd/utils";

const manifestList = [];

export default function HtmlManifestMiddleware(req, res, next) {
  const list = [...manifestList, requireManifest(cwdPath)];
  list.forEach((item) => {
    //  main 是 entry 默认的。
    req.manifestContext.css.push(
      ...(item.entrypoints?.main?.assets?.css || [])
    );
    req.manifestContext.js.push(...(item.entrypoints?.main?.assets?.js || []));
  });
  next();
}
