"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***

DIVINE

Started in 2017 by Leonardo Luarte (@lomefin)

****/

var IDAlgorhythm = function IDAlgorhythm() {
  _classCallCheck(this, IDAlgorhythm);
};

var Module11 = function () {
  function Module11() {
    _classCallCheck(this, Module11);
  }

  _createClass(Module11, [{
    key: "clean",
    value: function clean(string) {
      var onlyDigits = string.replace(/[\D]/g, "");
      if (onlyDigits.length < 2) return onlyDigits;
      var firstPart = onlyDigits.substr(0, onlyDigits.length - 1);
      var lastPart = onlyDigits.substr(onlyDigits.length - 1, onlyDigits.length);

      return firstPart + "-" + lastPart;
    }
  }, {
    key: "calculate",
    value: function calculate(string) {
      var multipliers = "32765432765432765432765432";
      var sum = 0;
      for (var i = 0; i < string.length; i++) {
        sum = sum + parseInt(string.charAt(i)) * parseInt(multipliers.charAt(i));
      }
      var dv = 11 - sum % 11;
    }
  }, {
    key: "verify",
    value: function verify(string, verification) {
      console.debug("Verifying ", string, " against ", verification);
      return this.calculate(string) == verification;
    }
  }, {
    key: "validate",
    value: function validate(event) {
      var id = this.clean(event.target.value);
      var split = id.split("-");
      this.verify(split[0], split[1]);
      event.target.value = id;
    }
  }]);

  return Module11;
}();

var Divine = function () {
  function Divine() {
    _classCallCheck(this, Divine);

    console.debug("Divine starting. Hallelluyah!");
    this.module11 = new Module11();
    this.findAllInputs();
  }

  _createClass(Divine, [{
    key: "findAllInputs",
    value: function findAllInputs() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = document.getElementsByClassName("needs-divine-validation")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var input = _step.value;

          input.addEventListener("keyup", function (event) {
            _this.module11.validate(event);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Divine;
}();

document.addEventListener("DOMContentLoaded", function (event) {
  var divine = new Divine();
});

// export default Divine;