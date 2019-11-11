module.exports = {
    root: true,
    "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true,
      "amd": true
    },
    "extends": [
      "standard",
      "plugin:flowtype/recommended",
      "eslint:recommended", 
      "plugin:vue/essential"
    ], // 继承标准规则
    plugins: [
      "html", // 使用eslint-plugin-html
      'vue',
      'flowtype'
    ],
    "settings": {
      "flowtype": {
          "onlyFilesWithFlowAnnotation": true,// 只检查 声明 flow语法的文件
      }
    },
    "parserOptions": {
      parser: "babel-eslint", //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
      "ecmaFeatures": {
        "globalReturn": true,
        "generators": false,
        "objectLiteralDuplicateProperties": false,
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module" // 按照模块的方式解析
    },
    "rules": {
      "linebreak-style": [0 ,"error", "windows"],
      "indent": [0, 4], // error类型，缩进4个空格
      'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
      'eol-last': 0, // 不检测新文件末尾是否有空行
      'semi': [0, 'always'], // 必须在语句后面加分号
      "quotes": [0, "double"],// 字符串没有使用单引号
      "no-console": ["error",{allow:["log","warn"]}],// 允许使用console.log()
      "arrow-parens": 0,
      "no-new":0,//允许使用 new 关键字
      "object-curly-spacing": [0, "never"],
      "no-undef": 0, // 关闭全局变量检测
      "import/no-duplicates": [0],
      "spaced-comment": 0,
      "comma-dangle": [0, "never"],
      "no-trailing-spaces": 0,
      "space-infix-ops": 0,
      "padded-blocks": 0,
      "brace-style": [0, "1tbs"],
      "space-before-blocks": [0, "always"],
      "semi-spacing": [0, {"before": false, "after": true}],
      "no-dupe-keys": 0,
      "camelcase": 0,
      "keyword-spacing": 0,
      "prefer-promise-reject-errors": 0,
      "no-multiple-empty-lines": [0, {"max": 2}],
      "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
      "arrow-spacing": 0,
      "no-extra-semi": 0,
    },
    globals:{// 允许全局变量,将$设置为true，表示允许使用全局变量$
      "document": true,
      "localStorage": true,
      "window": true,
      "jQuery":true,
      $:true
    }
  };