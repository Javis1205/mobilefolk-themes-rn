'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.build = exports.withTheme = exports.styles = void 0);
var _createClass = (function() {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    return function(e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  _get = function t(e, r, n) {
    null === e && (e = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (void 0 === o) {
      var i = Object.getPrototypeOf(e);
      return null === i ? void 0 : t(i, r, n);
    }
    if ('value' in o) return o.value;
    var a = o.get;
    return void 0 !== a ? a.call(n) : void 0;
  },
  _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol
            ? 'symbol'
            : typeof t;
        },
  _extends =
    Object.assign ||
    function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }
      return t;
    },
  _react = require('react'),
  _react2 = _interopRequireDefault(_react),
  _reactNative = require('react-native'),
  _classnames = require('classnames'),
  _classnames2 = _interopRequireDefault(_classnames);
function _interopRequireDefault(t) {
  return t && t.__esModule ? t : { default: t };
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function');
}
function _possibleConstructorReturn(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
function _toArray(t) {
  return Array.isArray(t) ? t : Array.from(t);
}
function _toConsumableArray(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
    return r;
  }
  return Array.from(t);
}
var styleStatic = [
    {
      absolute: { position: 'absolute' },
      fullParent: { top: 0, left: 0, right: 0, bottom: 0 },
      absoluteFill: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    {
      bhl: { borderWidth: _reactNative.StyleSheet.hairlineWidth },
      bthl: { borderTopWidth: _reactNative.StyleSheet.hairlineWidth },
      brhl: { borderRightWidth: _reactNative.StyleSheet.hairlineWidth },
      bbhl: { borderBottomWidth: _reactNative.StyleSheet.hairlineWidth },
      blhl: { borderLeftWidth: _reactNative.StyleSheet.hairlineWidth },
      'br--bottom': { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
      'br--top': { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      'br--left': { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
      'br--right': { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
      'bt--gray': { borderTopColor: '#d8d8d8' }
    },
    {
      ovh: { overflow: 'hidden', elevation: 1 },
      'flx-i': { flex: 1 },
      'flx-grow': { flexGrow: 1 },
      'flx-row': { flexDirection: 'row' },
      'flx-row-reverse': { flexDirection: 'row-reverse' },
      'flx-col-reverse': { flexDirection: 'column-reverse' },
      'flx-wrap': { flexWrap: 'wrap' },
      aifs: { alignItems: 'flex-start' },
      aic: { alignItems: 'center' },
      aife: { alignItems: 'flex-end' },
      asfs: { alignSelf: 'flex-start' },
      asc: { alignSelf: 'center' },
      asfe: { alignSelf: 'flex-end' },
      ass: { alignSelf: 'stretch' },
      jcfs: { justifyContent: 'flex-start' },
      jcfe: { justifyContent: 'flex-end' },
      jcc: { justifyContent: 'center' },
      jcsb: { justifyContent: 'space-between' },
      jcsa: { justifyContent: 'space-around' }
    },
    {
      normal: { fontWeight: 'normal' },
      b: { fontWeight: 'bold' },
      fw1: { fontWeight: '100' },
      fw2: { fontWeight: '200' },
      fw3: { fontWeight: '300' },
      fw4: { fontWeight: '400' },
      fw5: { fontWeight: '500' },
      fw6: { fontWeight: '600' },
      fw7: { fontWeight: '700' },
      fw8: { fontWeight: '800' },
      fw9: { fontWeight: '900' }
    },
    {
      'rm-contain': { resizeMode: 'contain' },
      'rm-cover': { resizeMode: 'cover' },
      'rm-stretch': { resizeMode: 'stretch' }
    },
    {
      'o-100': { opacity: 1 },
      'o-90': { opacity: 0.9 },
      'o-80': { opacity: 0.8 },
      'o-70': { opacity: 0.7 },
      'o-60': { opacity: 0.6 },
      'o-50': { opacity: 0.5 },
      'o-40': { opacity: 0.4 },
      'o-30': { opacity: 0.3 },
      'o-20': { opacity: 0.2 },
      'o-10': { opacity: 0.1 },
      'o-05': { opacity: 0.05 },
      'o-025': { opacity: 0.025 },
      'o-0': { opacity: 0 }
    },
    {
      fullView: { width: '100%', height: '100%' },
      fullWidth: { width: '100%' },
      fullheight: { height: '100%' }
    },
    {
      i: { fontStyle: 'italic' },
      tl: { textAlign: 'left' },
      tc: { textAlign: 'center' },
      tr: { textAlign: 'right' },
      tj: { textAlign: 'justify' },
      tavt: { textAlignVertical: 'top' },
      underline: { textDecorationLine: 'underline' }
    }
  ],
  dyamicStyle = {
    top: function(t) {
      return { top: Number(t) };
    },
    'top-': function(t) {
      return { top: Number(t) };
    },
    left: function(t) {
      return { left: Number(t) };
    },
    right: function(t) {
      return { right: Number(t) };
    },
    bottom: function(t) {
      return { bottom: Number(t) };
    },
    'bottom-': function(t) {
      return { bottom: Number(t) };
    },
    bdWidth: function(t) {
      return { borderWidth: Number(t) };
    },
    bdbWidth: function(t) {
      return { borderBottomWidth: Number(t) };
    },
    bdtWidth: function(t) {
      return { borderTopWidth: Number(t) };
    },
    bdfWidth: function(t) {
      return { borderLeftWidth: Number(t) };
    },
    bdrWidth: function(t) {
      return { borderRightWidth: Number(t) };
    },
    bdRadius: function(t) {
      return { borderRadius: Number(t) };
    },
    bdtlRadius: function(t) {
      return { borderTopLeftRadius: Number(t) };
    },
    bdtrRadius: function(t) {
      return { borderTopRightRadius: Number(t) };
    },
    bdblRadius: function(t) {
      return { borderBottomLeftRadius: Number(t) };
    },
    bdbrRadius: function(t) {
      return { borderBottomRightRadius: Number(t) };
    },
    flex: function(t) {
      return { flex: Number(t) };
    },
    f: function(t) {
      return { fontSize: Number(t) };
    },
    fs: function(t) {
      return { fontSize: Number(t) * _reactNative.PixelRatio.getFontScale() };
    },
    height: function(t) {
      return t && t.indexOf('%') > -1 ? { height: t } : { height: Number(t) };
    },
    maxHeight: function(t) {
      return t && t.indexOf('%') > -1
        ? { maxHeight: t }
        : { maxHeight: Number(t) };
    },
    minHeight: function(t) {
      return t && t.indexOf('%') > -1
        ? { minHeight: t }
        : { minHeight: Number(t) };
    },
    circle: function(t) {
      var e = Number(t);
      return { height: e, width: e, borderRadius: e / 2 };
    },
    square: function(t) {
      var e = Number(t);
      return { height: e, width: e };
    },
    zIndex: function(t) {
      return { zIndex: Number(t) };
    },
    elevation: function(t) {
      return { elevation: Number(t) };
    },
    p: function(t) {
      return { padding: Number(t) };
    },
    m: function(t) {
      return { margin: Number(t) };
    },
    mv: function(t) {
      return { marginVertical: Number(t) };
    },
    mh: function(t) {
      return { marginHorizontal: Number(t) };
    },
    mt: function(t) {
      return { marginTop: Number(t) };
    },
    ml: function(t) {
      return { marginLeft: Number(t) };
    },
    mr: function(t) {
      return { marginRight: Number(t) };
    },
    mb: function(t) {
      return { marginBottom: Number(t) };
    },
    pv: function(t) {
      return { paddingVertical: Number(t) };
    },
    ph: function(t) {
      return { paddingHorizontal: Number(t) };
    },
    pt: function(t) {
      return { paddingTop: Number(t) };
    },
    pl: function(t) {
      return { paddingLeft: Number(t) };
    },
    pr: function(t) {
      return { paddingRight: Number(t) };
    },
    pb: function(t) {
      return { paddingBottom: Number(t) };
    },
    width: function(t) {
      return t && t.indexOf('%') > -1 ? { width: t } : { width: Number(t) };
    },
    maxWidth: function(t) {
      return t && t.indexOf('%') > -1
        ? { maxWidth: t }
        : { maxWidth: Number(t) };
    },
    minWidth: function(t) {
      return t && t.indexOf('%') > -1
        ? { minWidth: t }
        : { minWidth: Number(t) };
    }
  },
  styles = (exports.styles = {}),
  options = {
    colors: {},
    fonts: {},
    clsPropName: 'cls',
    clsMaps: {},
    fn: _extends({}, dyamicStyle)
  },
  transformStyle = function(t, e, r) {
    var n = null,
      o = void 0;
    if (
      (void 0 !== r &&
        (o =
          'string' == typeof r
            ? r
            : Array.isArray(r)
            ? _classnames2.default.apply(void 0, _toConsumableArray(r))
            : (0, _classnames2.default)(r)),
      o)
    ) {
      n = Array.isArray(e)
        ? e.slice()
        : null !== e && 'object' === (void 0 === e ? 'undefined' : _typeof(e))
        ? [e]
        : [];
      for (
        var i = o
            .replace(/-/g, '_')
            .replace(/__/g, '_-')
            .split(' '),
          a = 0;
        a < i.length;
        a++
      ) {
        var u = i[a];
        if (u.length > 0) {
          var l = styles[u];
          if (!l) {
            var f = _toArray(u.split(/_(?=[^_])/)),
              s = f[0],
              c = f.slice(1);
            'function' == typeof options.fn[s] &&
              (l = options.fn[s].apply(t, c));
          }
          l
            ? Array.isArray(l)
              ? Array.prototype.push.apply(n, l)
              : n.push(l)
            : console.warn("style '" + u + "' not found");
        }
      }
    }
    return n;
  },
  recursiveStyle = function t(e) {
    if (_react2.default.isValidElement(e)) {
      var r = e.props,
        n = {},
        o = !1,
        i = {};
      if (options.clsPropName)
        for (var a in ((i[options.clsPropName] = 'style'), r))
          'Cls' === a.substr(-options.clsPropName.length) &&
            (i[a] =
              a.substr(0, a.length - options.clsPropName.length) + 'Style');
      for (var u in (Object.assign(i, options.clsMap), i)) {
        var l = i[u],
          f = transformStyle(e, r[l], r[u]);
        f && ((n[l] = f), (o = !0));
      }
      var s = r.children;
      if (Array.isArray(s)) {
        s = _react2.default.Children.toArray(s);
        for (var c = 0; c < s.length; c++) {
          var d = s[c];
          if (_react2.default.isValidElement(d)) {
            var b = t(d);
            b !== d && ((o = !0), (s[c] = b));
          }
        }
      } else {
        var p = t(s);
        p !== s && ((o = !0), (s = p));
      }
      if (o) return _react2.default.cloneElement(e, n, s);
    }
    return e;
  },
  withTheme = (exports.withTheme = function(t) {
    if (t.prototype && 'render' in t.prototype) {
      var e = t,
        r = (function(t) {
          function r() {
            return (
              _classCallCheck(this, r),
              _possibleConstructorReturn(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments)
              )
            );
          }
          return (
            _inherits(r, e),
            _createClass(r, [
              {
                key: 'render',
                value: function() {
                  return recursiveStyle(
                    _get(
                      r.prototype.__proto__ ||
                        Object.getPrototypeOf(r.prototype),
                      'render',
                      this
                    ).call(this)
                  );
                }
              }
            ]),
            r
          );
        })();
      return (r.displayName = e.displayName || e.name), r;
    }
    var n = t;
    return function() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      return recursiveStyle(n.apply(this, e));
    };
  }),
  build = (exports.build = function(t, e) {
    var r = {};
    if (
      (Array.isArray(styleStatic) &&
        styleStatic.forEach(function(t) {
          return Object.assign(r, t);
        }),
      t.colors && 'object' === _typeof(t.colors))
    )
      for (var n in t.colors) {
        var o = t.colors[n];
        (r[n] = { color: o }),
          (r['bg-' + n] = { backgroundColor: o }),
          (r['bd-' + n] = { borderColor: o }),
          (r['tint-' + n] = { tintColor: o });
      }
    if (t.fontFamilys && 'object' === _typeof(t.fontFamilys))
      for (var i in t.fontFamilys)
        r['ff-' + i] = { fontFamily: t.fontFamilys[i] };
    Object.assign(styles, e.create(hyphensToUnderscores(r)));
  }),
  hyphensToUnderscores = function(t) {
    var e = {};
    for (var r in t) e[r.replace(/-/g, '_')] = t[r];
    return e;
  };
