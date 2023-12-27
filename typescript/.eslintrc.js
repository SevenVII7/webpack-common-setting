module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      1,
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        bracketSpacing: true,
        trailingComma: 'none',
        printWidth: 150,
        htmlWhitespaceSensitivity: 'ignore',
        tabWidth: 2
      }
    ],
    'no-control-regex': 0,
    'no-empty': 'warn', // 禁止出现空语句块
    'no-func-assign': 'error', // 禁止对Function声明重新赋值
    'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
    'no-empty-function': 'warn', // 禁止出现空的函数块
    'no-var': 'error', // 禁止出现var用let和const代替
    'no-delete-var': 'off', // 允许出现delete变量的使用
    'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
    'space-before-blocks': 'warn', // 要求在块之前使用一致的空格
    'space-unary-ops': 'warn', // 要求在一元操作符前后使用一致的空格
    'arrow-spacing': 'warn', // 要求箭头函数的箭头前后使用一致的空格
    'array-bracket-spacing': 'warn', // 要求数组方括号中使用一致的空格
    eqeqeq: 'error', // 要求使用 === 和 !==
    camelcase: 'warn', // 要求使用骆驼拼写法命名约定
    quotes: ['warn', 'single', 'avoid-escape'], // 要求统一使用单引号符号
    'no-duplicate-case': 'error' // 禁止出现重复case
  }
}
