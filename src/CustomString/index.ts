import {StringUtils} from "./StringUtils";

export * from "./StringUtils";

declare global {
    interface String {
        /**
         * Converts the first letter of a string to uppercase and leaves the rest unchanged.
         *
         * @return {string} The string with its first letter capitalized.
         */
        capitalizeFirstLetter(): string;

        /**
         * Cleanses the input by removing, escaping, or replacing unwanted or harmful content to ensure safety and correctness.
         *
         * @return {string} The sanitized string after processing.
         */
        sanitize(): string;

        /**
         * Checks if the target entity is empty.
         *
         * @return {boolean} True if the entity is empty, false otherwise.
         */
        isEmpty(): boolean;

        /**
         * Converts a given string to camel case formatting.
         * The method assumes input words are separated by spaces, underscores, or hyphens.
         *
         * @return {string} Returns the input string transformed into camel case.
         */
        toCamelCase(): string;

        /**
         * Converts the given string to kebab-case, where words are separated by hyphens.
         * All uppercase letters are converted to lowercase, and any non-alphanumeric characters
         * are removed or replaced as necessary.
         *
         * @return {string} The transformed string in kebab-case format.
         */
        toKebabCase(): string;

        /**
         * Removes all spaces from the input string and returns the modified string.
         *
         * @return {string} The string with all spaces removed.
         */
        removeSpaces(): string;

        /**
         * Truncates the string to a specified length.
         *
         * @param {number} length - The maximum allowed length of the string.
         * @return {string} The truncated string, ensuring it does not exceed the specified length.
         */
        truncate(length: number): string;

        /**
         * Reverses the characters in the string and returns the reversed string.
         *
         * @return {string} The reversed string.
         */
        reverse(): string;

        /**
         * Calculates and returns the total number of words in a given text input.
         *
         * @return {number} The total count of words in the provided text.
         */
        wordCount(): number;

        /**
         * Determines whether the input string contains only alphanumeric characters (letters and numbers).
         * It typically excludes any special characters or whitespace.
         *
         * @return {boolean} Returns true if the string is alphanumeric, otherwise false.
         */
        isAlphanumeric(): boolean;

        /**
         * Compares the current string with the provided string to determine if they are equal.
         * Optionally ignores case sensitivity based on the provided flag.
         *
         * @param {string} second - The string to compare with the current string.
         * @param {boolean} [caseInsensitive] - Optional flag indicating if the comparison should ignore case sensitivity. Defaults to false.
         * @return {boolean} Returns true if the strings are equal, otherwise false.
         */
        equals(second: string, caseInsensitive?: boolean): boolean;

        /**
         * Compares the current string with another string lexicographically.
         *
         * @param {string} second - The string to compare with the current string.
         * @return {number} A negative number if the current string is lexicographically less than the second string,
         *                  zero if both are equal, or a positive number if the current string is lexicographically greater.
         */
        compareTo(second: string): number;
    }
}

String.prototype.capitalizeFirstLetter = function (): string {
    return StringUtils.capitalizeFirstLetter(this as string);
};

String.prototype.sanitize = function (): string {
    return StringUtils.sanitize(this as string);
};

String.prototype.isEmpty = function (): boolean {
    return StringUtils.isEmpty(this as string);
};

String.prototype.toCamelCase = function (): string {
    return StringUtils.toCamelCase(this as string);
};

String.prototype.toKebabCase = function (): string {
    return StringUtils.toKebabCase(this as string);
};

String.prototype.removeSpaces = function (): string {
    return StringUtils.removeSpaces(this as string);
};

String.prototype.truncate = function (length: number): string {
    return StringUtils.truncate(this as string, length);
};

String.prototype.reverse = function (): string {
    return StringUtils.reverse(this as string);
};

String.prototype.wordCount = function (): number {
    return StringUtils.wordCount(this as string);
};

String.prototype.isAlphanumeric = function (): boolean {
    return StringUtils.isAlphanumeric(this as string);
};

String.prototype.equals = function (second: string, caseInsensitive: boolean = false): boolean {
    return StringUtils.equals(this as string, second, caseInsensitive);
};

String.prototype.compareTo = function (second: string): number {
    return StringUtils.compareTo(this as string, second);
};
