import express from "express";
import http from "http";
import path from "path";
import { pkg, publicPath } from "@kwok/utils";
import middlewarePing from "../middlewares/middleware-ping";
import middlewareDevWebpack from "../middlewares/middleware-dev-webpack";
import middlewareRender from "../middlewares/middleware-render";

export default function createApp() {
  const app = express();

  app.use("/api/ping", middlewarePing);

  app.use(middlewareDevWebpack);

  app.listen = function (htmlTemplate = "index.html") {
    app.use(middlewareRender(htmlTemplate));

    const { port } = pkg.config;

    const server = http.createServer(app);

    server.listen(port, (err) => {
      if (err) throw err;
      // console.clear()
      console.log(`\nListening at http://localhost:${port}\n`);
    });
  };

  return app;
}
