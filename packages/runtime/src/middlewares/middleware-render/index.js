export default function RenderMiddleware(htmlTemplate = "index.html") {
  return [
    (req, res, next) => {
      require('./variableMiddleware').default(req, res, next);
    },
    (req, res, next) => {
      require('./manifestMiddleware').default(req, res, next);
    },
    (req, res, next) => {
      require('./htmlMiddleware').default(htmlTemplate)(req, res, next);
    },
  ];
}