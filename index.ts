import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colors = {
  red: '#DA6771',
  redLight: '#e5949b',
  green: '#4EB071',
  greenDim: '#275839',
  yellow: '#fff099',
  blue: '#399EF4',
  blueLight: '#9fcff9',
  pink: '#B168DF',
  teal: '#21C5C7',
  grey: '#535a6b',
  accent: '#e0ed36',
  accentDim: '#c3ce2f'
}

const colorSet: IColorSet = {
  base: {
    background: '#181818',
    foreground: '#efefef',
    color1: colors.accent,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow,
  },
  syntax: {
    identifier: colors.blueLight,
    string: colors.red,
    number: colors.redLight,
    keyword: colors.blue,
    boolean: colors.blue,
    function: colors.teal,
    functionCall: colors.yellow,
    storage: colors.blue,
    comment: colors.grey,
    class: colors.teal,
    classMember: colors.teal,
    type: colors.green,
    cssClass: colors.blue,
    cssId: colors.red,
    cssTag: colors.teal,
    markdownQuote: '#c0c0c0'
  },
  ui: {
    cursor: '#ffffff',
    guide: '#263040',
    invisibles: '#263040',
    rangeHighlight: '#263040',
    // Bright red 50% opacity
    findMatchHighlight: '#cb606080',
    // Brighter red 50% opacity
    currentFindMatchHighlight: '#ff777780',
    selection: '#42400f',
    selectionHighlight: '#42400f80',
    // White with ~10% opacity
    wordHighlight: '#ffffff18',
    wordHighlightStrong: '#ffffff18',
    activeLinkForeground: colors.accent
  },
  terminal: {
    black: '#666666',
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.pink,
    cyan: colors.teal,
    white: '#efefef',
    brightBlack: '#666666',
    brightRed: colors.red,
    brightGreen: colors.green,
    brightYellow: colors.yellow,
    brightBlue: colors.blue,
    brightMagenta: colors.pink,
    brightCyan: colors.teal,
    brightWhite: '#efefef'
  },
  overrides: {
    "diffEditor.insertedTextBackground": "#182818",
    "diffEditor.removedTextBackground": "#261616",
    "editorGutter.modifiedBackground": colors.green,
    "editorGutter.addedBackground": "#399EF4",
    "editorGutter.deletedBackground": colors.red,
    "gitDecoration.modifiedResourceForeground": colors.green,
    "gitDecoration.deletedResourceForeground": colors.red,
    "gitDecoration.untrackedResourceForeground": "#399EF4",
    "gitDecoration.conflictingResourceForeground": "#fff099",
    "gitDecoration.ignoredResourceForeground": "#535a6b",
    "editorError.foreground": colors.red,
    "editorWhitespace.foreground": "#404040",
    "editorIndentGuide.activeBackground": "#535353"
  }
};

generateTheme('Sapphire', colorSet, path.join(__dirname, 'theme.json'));

colorSet.base.background = '#262626'
generateTheme('Sapphire (Bright)', colorSet, path.join(__dirname, 'theme-bright.json'));

colorSet.base.background = '#060606'
generateTheme('Sapphire (Dim)', colorSet, path.join(__dirname, 'theme-dim.json'));
