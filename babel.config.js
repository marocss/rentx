module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo', 
      // 'module:metro-react-native-babel-preset' // this gives error on react native reanimation (dont know why dont ask me took me a lot of time just to figure out the error)
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      'react-native-reanimated/plugin'
    ]
  };
};
