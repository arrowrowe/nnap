(function () {

  var versions = [];
  for (var key in process.versions) {
    versions.push('<li>' + key + '@' + process.versions[key] + '</li>');
  }
  var versionsDescription = versions.join('');

  document.getElementById('versions').innerHTML = versionsDescription;

})();
