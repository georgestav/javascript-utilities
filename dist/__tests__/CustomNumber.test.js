"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomNumber_1 = require("../CustomNumber");
describe('NumberUtils', () => {
    describe('static methods', () => {
        test('isEven should determine if a number is even', () => {
            expect(CustomNumber_1.NumberUtils.isEven(0)).toBe(true);
            expect(CustomNumber_1.NumberUtils.isEven(1)).toBe(false);
            expect(CustomNumber_1.NumberUtils.isEven(2)).toBe(true);
        });
        test('max should return the maximum of two numbers', () => {
            expect(CustomNumber_1.NumberUtils.max(1, 2)).toBe(2);
            expect(CustomNumber_1.NumberUtils.max(-1, -2)).toBe(-1);
            expect(CustomNumber_1.NumberUtils.max(0, 0)).toBe(0);
        });
        test('min should return the minimum of two numbers', () => {
            expect(CustomNumber_1.NumberUtils.min(1, 2)).toBe(1);
            expect(CustomNumber_1.NumberUtils.min(-1, -2)).toBe(-2);
            expect(CustomNumber_1.NumberUtils.min(0, 0)).toBe(0);
        });
    });
    describe('instance methods', () => {
        test('isEven should determine if the instance number is even', () => {
            const num = 2;
            expect(num.isEven()).toBe(true);
            const oddnum = 1;
            expect(oddnum.isEven()).toBe(false);
        });
        test('max should compare the instance number with another number and return the maximum', () => {
            const num = 1;
            expect(num.max(2)).toBe(2);
        });
        test('min should compare the instance number with another number and return the minimum', () => {
            const num = 1;
            expect(num.min(2)).toBe(1);
        });
    });
});
