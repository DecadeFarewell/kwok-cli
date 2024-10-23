export default function RenderMiddleware(view = "index.html") {
  return [
    (req, res, next) => {
      // eslint-disable-next-line
      require('./variableMiddleware').default(req, res, next);
    },
    (req, res, next) => {
      // eslint-disable-next-line
      require('./manifestMiddleware').default(req, res, next);
    },
    (req, res, next) => {
      // eslint-disable-next-line
      require('./HtmlMiddleware').default(view)(req, res, next);
    },
  ];
}