"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
class NumberUtils {
    /**
     * Returns true if the number is even, false if odd.
     */
    static isEven(num) {
        return num % 2 === 0;
    }
    /**
     * Returns the maximum between two numbers.
     */
    static max(num1, num2) {
        return Math.max(num1, num2);
    }
    /**
     * Returns the minimum between two numbers.
     */
    static min(num1, num2) {
        return Math.min(num1, num2);
    }
}
exports.NumberUtils = NumberUtils;
