(function ($) {
  'use strict';
  $('*[data-show-hide]').click(function () {
    var $target = $($(this).data('show-hide'));
    $target[$target.is(':visible') ? 'hide' : 'show']();
  });
})(window.$);
