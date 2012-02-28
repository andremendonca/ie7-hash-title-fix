/*
 * Version: 0.0.1
 * Author: André Mendonça
 */
(function() {
    var cleanTitle = function(title) {
        if (title.indexOf('#') != -1) {
            var cleanedTitle = title.substring(0, title.indexOf('#'));
            title = cleanedTitle
        }
        return title;
    };
    var oldTitle = document.title || '';
    document.title = cleanTitle(oldTitle);
    document.onpropertychange = function() {
      var docTitle = document.title || '';
      if (window.event.propertyName != 'title' || docTitle === oldTitle) {
          return;
      }
      document.title = cleanTitle(docTitle);
    }
})();
