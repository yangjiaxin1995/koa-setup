export function createConfig(answer) {
  function haveMiddleware(name) {
    return answer.middleware.indexOf(name) !== -1;
  }

  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      router: haveMiddleware('koaRouter'),
      static: haveMiddleware('koaStatic'),
      views: haveMiddleware('koaViews'),
      body: haveMiddleware('koaBody'),
    },
  };

  return inputConfig;
}
