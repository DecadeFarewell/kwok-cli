import fs from "fs";
import path from "path"
import { cwdPath, pkg } from "@kwok/utils";

export default function HtmlMiddleware(htmlTemplate) {
  const { cdn = "" } = pkg.config;

  const urlPrefix = process.env.NODE_ENV === "development" ? "" : cdnUrl;

  let template = "";

  if (htmlTemplate) {
    template = fs
      .readFileSync(path.resolve(cwdPath, "src", "views", htmlTemplate))
      .toString()
  }

  return (req, res) => {
    if (req.reactContext?.status) {
      res.status(req.reactContext?.status);
      res.location(req.reactContext?.url);
      res.end();
    } else {
      const css = req.manifestContext.css.map(
        (item) =>
          `<link rel="stylesheet" crossorigin='anonymous' href="${urlPrefix}${item.src}">`
      );
      const js = [];
      // todo: 乾坤框架支持 - 什么意思？
      // const mainjs = req.manifestContext.js[req.manifestContext.js.length - 1];

      // if (mainjs) {
      //   const mainjsPath = mainjs.src.split('/')
      //   mainjsPath[mainjsPath.length - 1] = '';
      //   js.push(`<script>window['__webpack_public_path__'] = "${urlPrefix}${mainjsPath.join('/')}"</script>`)
      // }
      // 乾坤框架支持 end
      req.manifestContext.js.map(
        (item) => {
          js.push(`<script crossorigin='anonymous' src="${urlPrefix}${item.src}"></script>`)
        }
      );
      const meta = [];
      meta.push(
        `<meta name="noderunenv" content="${process.env.NODE_RUN_ENV || "local"
        }" />`
      );

      const html = template
        .replace("<!-- META -->", meta.join(""))
        .replace("<!-- STYLESHEET -->", css.join(""))
        .replace(
          "<!-- CONTENT -->",
          // todo: ssr渲染 - 暂不支持
          `<div id="app">${req.reactContext?.renderToString}</div>`
        )
        .replace("<!-- JAVASCRIPT -->", js.join(""));

      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    }
  };
}
