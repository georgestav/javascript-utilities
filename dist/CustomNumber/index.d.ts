export * from "./NumberUtils";
declare global {
    interface Number {
        /**
         * Determines if a number is even.
         *
         * @return {boolean} Returns true if the number is even, otherwise false.
         */
        isEven(): boolean;
        /**
         * Returns the greater of the two provided numbers.
         *
         * @param {number} num2 - The second number to compare.
         * @return {number} The greater number between the first number
         *                  (implicit in the method's context) and the second number provided.
         */
        max(num2: number): number;
        /**
         * Determines the smaller of two numbers: a fixed value and the input value.
         *
         * @param {number} num2 - The number to compare with the fixed value.
         * @return {number} The smaller of the fixed value and the input value.
         */
        min(num2: number): number;
    }
}
