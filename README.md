# React Native Themes for Mobilefolk Team 

## Installation
1. install module 

```bash
npm install mobilefolk-themes-rn
```

or

```bash
yarn add mobilefolk-themes-rn
```
2. install @babel/plugin-proposal-decorators

```bash
npm install @babel/plugin-proposal-decorators --save-dev
```

3. create babel.config.js

```bash
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ]
};
```

## Usage

1. example

```bash
@withTheme
export default class App extends Component<Props> {
  render() {
    return (
      <View
        cls="flx-i aic jcc"
      >

      </View>
    );
  }
}
```

2. prop cls

styleStatic

```bash
    styleStatic = [
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
  ]
```

dyamicStyle

```bash
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
  }
```
