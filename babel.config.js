module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "corejs": 3,
      "targets": "> 1%, last 2 versions, ie >= 8",
      "debug": false
    }]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": false
    }]
  ]
}