export default () => {
  return {
    type: 'input',
    name: 'port',
    message: 'set port number',
    default() {
      return 8080;
    },
  };
};
