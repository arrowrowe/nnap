var ink = module.exports = {
  packages: {
    public: {
      calc: require('./modules/calc')
    },
    private: {
      pw: require('./modules/pw')
    }
  },
  window: null,
  command: '',
  refresh: function () {
    var name;
    if (/^[a-zA-Z][a-zA-Z0-9] /.test(ink.command)) {
      name = ink.command.substr(0, 2);
      if (name in ink.packages.private) {
        ink.packages.private[name].run.call(ink);
        return;
      }
    }
    for (name in ink.packages.public) {
      var pkg = ink.packages.public[name];
      if (pkg.test(ink.command)) {
        pkg.run.call(ink);
      }
    }
  },
  register: function (window, $in) {
    ink.window = window;
    $in.on('keyup change', function () {
      var command = window.$(this).val();
      if (command !== ink.command) {
        ink.command = command;
        ink.refresh();
      }
    });
  }
};
