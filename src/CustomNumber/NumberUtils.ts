export class NumberUtils {
    /**
     * Returns true if the number is even, false if odd.
     */
    public static isEven(num: number): boolean {
        return num % 2 === 0;
    }

    /**
     * Returns the maximum between two numbers.
     */
    public static max(num1: number, num2: number): number {
        return Math.max(num1, num2);
    }

    /**
     * Returns the minimum between two numbers.
     */
    public static min(num1: number, num2: number): number {
        return Math.min(num1, num2);
    }
}