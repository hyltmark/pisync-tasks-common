'use strict';

module.exports = function($, cb) {

  $.notifier.log('Begin upload', 'info');

  var path = $.projectConfig.path
  , fileName = $.projectConfig.id + '.gz'

  $.local.packFile(sourcePath, targetFileName, function success(source) {

    var target = projectConfig.remote.tmpDir + fileName;

    $.remote.transferFile(ssh, source, target, function(err) {
      cb(err);
    });

  }, function failure(err) {
    cb(err);
  });

};