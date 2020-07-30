const path = require('path')
const threadLoader = require('thread-loader')
const webpack = require('webpack')
const jsWorkerCommonOptions = {
  workers: 2,
  workerParallelJobs: 50,
  poolParallelJobs: 50,
}

const babelWorkerOptions = {
  ...jsWorkerCommonOptions,
  name: 'babel-pool',
}

const tsWorkerOptions = {
  ...jsWorkerCommonOptions,
  name: 'ts-pool',
}

const appDirectory = path.resolve(__dirname, '../')

module.exports = ({ config, mode }) => {
  if (mode !== 'PRODUCTION') {
    threadLoader.warmup(babelWorkerOptions, ['babel-loader'])
    threadLoader.warmup(tsWorkerOptions, ['babel-loader'])
  }

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, './style'),
  })

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      { loader: 'cache-loader' },
      { loader: 'thread-loader', options: tsWorkerOptions },
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.story\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  })

  config.module.rules.push({
    test: /\.ttf$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: './fonts/[hash].[ext]',
        },
      },
    ],
    include: [path.resolve(appDirectory, './src/assets/Fonts'), path.resolve(appDirectory, 'node_modules/react-native-vector-icons')],
  })

  config.module.rules.push({
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
      path.resolve(appDirectory, 'src'),
      path.resolve(appDirectory, 'node_modules/react-navigation'),
      path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
      path.resolve(appDirectory, 'node_modules/react-native-snap-carousel'),
      path.resolve(appDirectory, 'node_modules/react-native-collapsible'),
      path.resolve(appDirectory, 'node_modules/react-native-icon-badge'),
      path.resolve(appDirectory, 'node_modules/react-native-iphone-x-helper'),
      path.resolve(appDirectory, 'node_modules/react-native-paper'),
      path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
      path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
      path.resolve(appDirectory, 'node_modules/react-native-platform-touchable'),
      path.resolve(appDirectory, 'node_modules/native-base-shoutem-theme'),
      path.resolve(appDirectory, 'node_modules/react-native-keyboard-aware-scroll-view'),
      path.resolve(appDirectory, 'node_modules/react-native-easy-grid'),
      path.resolve(appDirectory, 'node_modules/react-native-drawer'),
      path.resolve(appDirectory, 'node_modules/@codler/react-native-keyboard-aware-scroll-view'),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: true,
        presets: ['module:metro-react-native-babel-preset'],
      },
    },
  })
  // convert react-native to react-native-web for storybook
  config.resolve = {
    alias: {
      'react-native': 'react-native-web',
      'react-native-remote-svg': 'react-native-web',
      'lottie-react-native': 'react-native-web-lottie',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
    extensions: ['.web.js', '.js', '.ts', '.web.ts', '.tsx', '.web.tsx'],
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    })
  )

  return config
}
