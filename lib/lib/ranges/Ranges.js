'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Range = require('./Range');

var _Range2 = _interopRequireDefault(_Range);

var _generic = require('../utility/generic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ranges = function (_Component) {
  _inherits(Ranges, _Component);

  function Ranges() {
    _classCallCheck(this, Ranges);

    return _possibleConstructorReturn(this, (Ranges.__proto__ || Object.getPrototypeOf(Ranges)).apply(this, arguments));
  }

  _createClass(Ranges, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.height === this.props.height && nextProps.keys === this.props.keys && nextProps.headerHeight === this.props.headerHeight && (0, _generic.arraysEqual)(nextProps.ranges, this.props.ranges) && nextProps.visibleTimeStart === this.props.visibleTimeStart && nextProps.visibleTimeEnd === this.props.visibleTimeEnd);
    }
  }, {
    key: 'getVisibleRanges',
    value: function getVisibleRanges(visibleTimeStart, visibleTimeEnd, ranges) {
      return ranges.reduce(function (acc, range) {
        if (visibleTimeStart < range.end && visibleTimeEnd > range.start) {
          acc.push(range);
          return acc;
        } else {
          return acc;
        }
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visibleTimeStart = _props.visibleTimeStart,
          visibleTimeEnd = _props.visibleTimeEnd;
      var _props$keys = this.props.keys,
          rangeIdKey = _props$keys.rangeIdKey,
          rangeTimeStartKey = _props$keys.rangeTimeStartKey,
          rangeTimeEndKey = _props$keys.rangeTimeEndKey;

      this.props.ranges.map(function (e) {
        e.start = e[rangeTimeStartKey];
        e.end = e[rangeTimeEndKey];
      });
      var visibleRanges = this.getVisibleRanges(visibleTimeStart, visibleTimeEnd, this.props.ranges);
      return _react2.default.createElement(
        'div',
        { className: 'rct-ranges' },
        visibleRanges.map(function (range) {
          return _react2.default.createElement(_Range2.default, { canvasTimeStart: _this2.props.canvasTimeStart,
            canvasTimeEnd: _this2.props.canvasTimeEnd,
            canvasWidth: _this2.props.canvasWidth,
            className: range.className,
            height: _this2.props.height,
            headerHeight: _this2.props.headerHeight,
            key: (0, _generic._get)(range, rangeIdKey),
            keys: _this2.props.keys,
            range: range,
            rangeStart: range.start,
            rangeEnd: range.end });
        })
      );
    }
  }]);

  return Ranges;
}(_react.Component);

Ranges.propTypes = {
  canvasTimeEnd: _propTypes2.default.number.isRequired,
  canvasTimeStart: _propTypes2.default.number.isRequired,
  canvasWidth: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  headerHeight: _propTypes2.default.number.isRequired,
  keys: _propTypes2.default.object.isRequired,
  ranges: _propTypes2.default.array.isRequired,
  visibleTimeStart: _propTypes2.default.any.isRequired,
  visibleTimeEnd: _propTypes2.default.any.isRequired
};
exports.default = Ranges;