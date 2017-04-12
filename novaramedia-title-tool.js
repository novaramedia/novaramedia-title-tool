(function( $ ) {
  'use strict';

  // AudioTool object
  var TitleTool = {
    debounceTimer: null,
    debounceTime: 750,

    init: function() {
       var _this = this;

       _this.bind();

     },

    bind: function() {
      var _this = this;

      $('#title').on('input', function() {

        clearTimeout(_this.debounceTimer);
        _this.debounceTimer = setTimeout(function() {

          _this.enforceTitleStyle();

        }, _this.debounceTime)

      });

    },

    enforceTitleStyle: function() {
      var _this = this;
      var raw = $('#title').val();

      $('#title').val(TitleCase.titleCase(raw));

    },

  };

  // ported from: https://www.npmjs.com/package/ap-style-title-case
  var TitleCase = {
    stopwords: 'a an and at but by for in nor of on or so the to up yet'.split(' '),

    titleCase: function(str) {
      var _this = this;

      if (!str) return null
      if (!str.length) return null

      var words = str.trim().split(/\s+/)

      return words
        .map((word, index) => {
          if (index === 0) return _this.capitalize(word)
          if (index === words.length - 1) return _this.capitalize(word)
          if (_this.stopwords.indexOf(word.toLowerCase()) > -1) return word.toLowerCase()
          return _this.capitalize(word)
        })
        .join(' ')
    },

    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },

  };

  $(window).load(function() {
    TitleTool.init();
  });

})( jQuery );