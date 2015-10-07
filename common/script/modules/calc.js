module.exports = {
  test: function (command) {
    return /^[0-9+\-*\/()]+$/.test(command);
  },
  run: function () {
    try {
      this.add(eval(this.command));
    } catch (e) {
      this.add('calc receive "' + this.command + '"');
    }
  }
};
