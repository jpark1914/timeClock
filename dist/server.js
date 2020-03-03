"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;