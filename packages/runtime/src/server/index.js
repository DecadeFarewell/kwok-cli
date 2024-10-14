// export createApp from './createApp'

import express from 'express'
import http from "http";
import { pkg } from '@kwok/utils'
import middlewarePing from '../middlewares/middleware-ping'

export function createApp () {
  const app = express()

  app.use("/api/ping", middlewarePing);

  app.listen = function () {
    const { port } = pkg.config

    const server = http.createServer(app);

    server.listen(port, (err) => {
      if (err) throw err;
      // console.clear()
      console.log(
        `\nListening at http://localhost:${port}\n`
      );
    });
  }

  return app
}