// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
getDefaultConfig.resolver.assetExts.push('cjs');

module.exports = getDefaultConfig;