'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sen = function () {
  function Sen(app, data) {
    _classCallCheck(this, Sen);

    this.app = app;
    this.doc = document;
    this.data = data;
    this.createElement();
  }

  _createClass(Sen, [{
    key: 'getApp',
    value: function getApp() {
      return this.doc.getElementById(this.app);
    }
  }, {
    key: 'processTemplate',
    value: function processTemplate() {
      var r = /{(.*?)}/g;
      var arr;
      var t = '';
      while (arr = r.exec(this.data.template)) {
        var s = void 0;
        s = t.length > 0 ? t.replace(arr[0], this.data.data[arr[0].substr(1, arr[0].length - 2)], arr[0]) : this.data.template.replace(arr[0], this.data.data[arr[0].substr(1, arr[0].length - 2)], arr[0]);
        t = s;
      }
      return t;
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var selector = this.data.selector;
      var app = this.getApp();
      var h = this.processTemplate();
      var s = app.innerHTML.replace(selector, h);
      app.innerHTML = s;
    }
  }]);

  return Sen;
}();