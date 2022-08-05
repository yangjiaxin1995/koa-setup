export default () => {
  return {
    type: 'checkbox',
    name: 'middleware',
    message: 'select middleware',
    choices: [
      {
        name: 'koaRouter',
      },
      {
        name: 'koaStatic',
      },
      {
        name: 'koaViews',
      },
      {
        name: 'koaBody',
      },
    ],
  };
};
