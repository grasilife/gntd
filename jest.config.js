module.exports = {
  //verbose,用于显示每个测试用例的通过与否
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  //collectCoverageFrom：为数组中匹配的文件收集覆盖率信息，即使并没有为该文件写相关的测试代码，需要将collectCoverage设置为true，或者通过--corverage参数来调用jest。
  collectCoverageFrom: [
    "src/utils/**/*.{js,vue}",
    "!src/utils/auth.js",
    "!src/utils/request.js",
    "src/components/**/*.{js,vue}"
  ],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};

// %stmts是语句覆盖率（statement coverage）：是不是每个语句都执行了？
// %Branch分支覆盖率（branch coverage）：是不是每个if代码块都执行了？
// %Funcs函数覆盖率（function coverage）：是不是每个函数都调用了？
// %Lines行覆盖率（line coverage）：是不是每一行都执行了？
