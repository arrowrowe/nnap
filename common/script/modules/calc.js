module.exports = {
  test: function (command) {
    return /^[0-9]+$/.test(command);
  },
  run: function () {
    console.log('calc receive %s', this.command);
  }
};
