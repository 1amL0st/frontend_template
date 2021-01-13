### Мой вебпак конфиг для фронтенд проектов. ###
TypeScript, React, Redux, SCSS, Eslint, Prettier.<br/>
DevServer загружает обновления в компоненты без потери состояния.

## Используется ##
* React-router
* classnames

## TODO ##
1. Переместить ~~.eslintrc~~ и tsconfig.json в ./configs
  1. .eslintrc перемещён, с использованием 
  ```js
    new EslintWebpackPlugin({
      overrideConfigFile: path.resolve(__dirname, './.eslintrc'),
    }
  ```
  2. С tsconfig(ом) проблема: если его переместить в configs, тогда vscode перестаёт видеть alias(ы)...
2. (Возможно?) Есть способ не использовать babel для работы "@pmmmwh/react-refresh-webpack-plugin" и "react-refresh", но я не уверен.