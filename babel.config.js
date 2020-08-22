// babel.config.js 파일
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins 추가 하면 됨
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~', // root 지시자를 ~ 로 설정
        rootPathSuffix: 'MyApp', // rakun_app 폴더를 root 폴더로 설정
      }
    ]
  ],
};
