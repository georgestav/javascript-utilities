"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtils_1 = require("./StringUtils");
__exportStar(require("./StringUtils"), exports);
String.prototype.capitalizeFirstLetter = function () {
    return StringUtils_1.StringUtils.capitalizeFirstLetter(this);
};
String.prototype.sanitize = function () {
    return StringUtils_1.StringUtils.sanitize(this);
};
String.prototype.isEmpty = function () {
    return StringUtils_1.StringUtils.isEmpty(this);
};
String.prototype.toCamelCase = function () {
    return StringUtils_1.StringUtils.toCamelCase(this);
};
String.prototype.toKebabCase = function () {
    return StringUtils_1.StringUtils.toKebabCase(this);
};
String.prototype.removeSpaces = function () {
    return StringUtils_1.StringUtils.removeSpaces(this);
};
String.prototype.truncate = function (length) {
    return StringUtils_1.StringUtils.truncate(this, length);
};
String.prototype.reverse = function () {
    return StringUtils_1.StringUtils.reverse(this);
};
String.prototype.wordCount = function () {
    return StringUtils_1.StringUtils.wordCount(this);
};
String.prototype.isAlphanumeric = function () {
    return StringUtils_1.StringUtils.isAlphanumeric(this);
};
String.prototype.equals = function (second, caseInsensitive = false) {
    return StringUtils_1.StringUtils.equals(this, second, caseInsensitive);
};
String.prototype.compareTo = function (second) {
    return StringUtils_1.StringUtils.compareTo(this, second);
};
