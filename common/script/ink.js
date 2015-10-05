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
  $in: null,
  command: '',
  refresh: function () {
    console.log('refresh [%s]', ink.command);
  },
  register: function (window, $in) {
    ink.window = window;
    ink.$in = $in;
    $in.on('keyup change', function () {
      var command = window.$(this).val();
      if (command !== ink.command) {
        ink.command = command;
        ink.refresh();
      }
    });
  }
};
