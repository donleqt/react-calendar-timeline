'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _generic = require('../utility/generic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Range = function (_Component) {
  _inherits(Range, _Component);

  function Range(props) {
    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.state = {
      rangeId: (0, _generic._get)(props.range, props.keys.rangeIdKey),
      rangeTimeStart: (0, _generic._get)(props.range, props.keys.rangeTimeStartKey),
      rangeTimeEnd: (0, _generic._get)(props.range, props.keys.rangeTimeEndKey)
    };
    return _this;
  }

  _createClass(Range, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.height === this.props.height && nextProps.headerHeight === this.props.headerHeight && nextProps.keys === this.props.keys && nextProps.range === this.props.range);
    }
  }, {
    key: 'left',
    value: function left(canvasTimeStart, rangeTimeStart, ratio) {
      if (rangeTimeStart < canvasTimeStart) {
        return 0;
      }

      if (rangeTimeStart > canvasTimeStart) {
        return Math.round((rangeTimeStart - canvasTimeStart) * ratio);
      }
    }
  }, {
    key: 'width',
    value: function width(canvasTimeEnd, canvasTimeStart, canvasWidth, left, rangeTimeEnd, ratio) {
      if (rangeTimeEnd < canvasTimeEnd) {
        return Math.round((rangeTimeEnd - canvasTimeStart) * ratio - left);
      }

      if (rangeTimeEnd > canvasTimeEnd) {
        return canvasWidth;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          rangeTimeStart = _state.rangeTimeStart,
          rangeTimeEnd = _state.rangeTimeEnd;

      if (rangeTimeStart !== null && rangeTimeEnd !== null) {
        var _props = this.props,
            canvasTimeEnd = _props.canvasTimeEnd,
            canvasTimeStart = _props.canvasTimeStart,
            canvasWidth = _props.canvasWidth;

        var ratio = canvasWidth / (canvasTimeEnd - canvasTimeStart);
        var top = this.props.headerHeight;
        var height = this.props.height - this.props.headerHeight;
        var left = this.left(canvasTimeStart, rangeTimeStart, ratio);
        var width = this.width(canvasTimeEnd, canvasTimeStart, canvasWidth, left, rangeTimeEnd, ratio);

        var styles = {
          top: top + 'px',
          left: left + 'px',
          height: height + 'px',
          width: width + 'px'
        };

        var classNames = 'rct-range' + (this.props.range.className ? ' ' + this.props.range.className : '');
        return _react2.default.createElement('div', { className: classNames, style: styles });
      } else {
        return null;
      }
    }
  }]);

  return Range;
}(_react.Component);

Range.propTypes = {
  canvasTimeStart: _react2.default.PropTypes.number.isRequired,
  canvasTimeEnd: _react2.default.PropTypes.number.isRequired,
  canvasWidth: _react2.default.PropTypes.number.isRequired,
  height: _react2.default.PropTypes.number.isRequired,
  headerHeight: _react2.default.PropTypes.number.isRequired,
  keys: _react2.default.PropTypes.object.isRequired,
  range: _react2.default.PropTypes.object.isRequired
};
exports.default = Range;


Range.defaultProps = {};