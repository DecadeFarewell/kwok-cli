import express from 'express'

export default function createApp () {
  const app = express()

  app.listen = function () {
    app.listen(8820, () => {
      console.log('serve start at 8820')
    })
  }

  app.use(HealthMiddleWare)

  return app
}