import {NumberUtils} from "../CustomNumber";

describe('NumberUtils', () => {
    describe('static methods', () => {
        test('isEven should determine if a number is even', () => {
            expect(NumberUtils.isEven(0)).toBe(true);
            expect(NumberUtils.isEven(1)).toBe(false);
            expect(NumberUtils.isEven(2)).toBe(true);
        });

        test('max should return the maximum of two numbers', () => {
            expect(NumberUtils.max(1, 2)).toBe(2);
            expect(NumberUtils.max(-1, -2)).toBe(-1);
            expect(NumberUtils.max(0, 0)).toBe(0);
        });

        test('min should return the minimum of two numbers', () => {
            expect(NumberUtils.min(1, 2)).toBe(1);
            expect(NumberUtils.min(-1, -2)).toBe(-2);
            expect(NumberUtils.min(0, 0)).toBe(0);
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