export declare class CustomString extends String {
    constructor(value: string);
    valueOf(): string;
    /**
     * Capitalize the first letter of the string.
     */
    capitalizeFirstLetter(): CustomString;
    /**
     * Sanitize the string.
     */
    sanitize(): CustomString;
    /**
     * Check if the string is empty.
     */
    isEmpty(): boolean;
    /**
     * Reverse the string.
     */
    reverse(): CustomString;
    /**
     * Truncate the string.
     */
    truncate(length: number): CustomString;
    /**
     * Count the number of words in the string.
     */
    wordCount(): number;
    /**
     * Get the raw string representation.
     */
    toValue(): string;
    /**
     * Check if this string equals another string (case-sensitive by default).
     */
    equals(other: string, caseInsensitive?: boolean): boolean;
    /**
     * Compare lexicographical order with another string.
     * @returns -1 if the instance string comes before, 1 if after, and 0 if equal.
     */
    compareTo(other: string): number;
    /**
     * Check if this string starts with a given prefix.
     */
    startsWith(prefix: string): boolean;
    /**
     * Check if this string ends with a given suffix.
     */
    endsWith(suffix: string): boolean;
    /**
     * Capitalize the first letter of a string
     * @param string Input string
     * @returns String with the first letter capitalized
     */
    static capitalizeFirstLetter(string: string): string;
    /**
     * Sanitize a string: removes special characters, replaces spaces with hyphens, converts to lowercase
     * @param string Input string
     * @returns Sanitized string
     */
    static sanitize(string: string): string;
    /**
     * Check if a string is empty (null, undefined, or just whitespace)
     * @param string Input string
     * @returns Boolean value based on emptiness.
     */
    static isEmpty(string: string): boolean;
    /**
     * Check if a string is not empty
     * @param string Input string
     * @returns Boolean value based on non-emptiness
     */
    static isNotEmpty(string: string): boolean;
    /**
     * Converts a string to camelCase
     * @param string Input string
     * @returns String in camelCase format
     */
    static toCamelCase(string: string): string;
    /**
     * Converts a string to kebab-case
     * @param string Input string
     * @returns String in kebab-case format.
     */
    static toKebabCase(string: string): string;
    /**
     * Remove all spaces from a string
     * @param string Input string
     * @returns String without any spaces.
     */
    static removeSpaces(string: string): string;
    /**
     * Truncate a string to a fixed length, appending <code>...</code> if it's too long
     * @param string Input string
     * @param length Max length of string
     * @returns Truncated string.
     */
    static truncate(string: string, length: number): string;
    /**
     * Reverse a string
     * @param string Input string
     * @returns Reversed string
     */
    static reverse(string: string): string;
    /**
     * Count the count of words in a string
     * @param string Input string
     * @returns Number of words in the string
     */
    static wordCount(string: string): number;
    /**
     * Check if a string contains only alphanumeric characters
     * @param string Input string
     * @returns Boolean indicating if the string is alphanumeric.
     */
    static isAlphanumeric(string: string): boolean;
    /**
     * Static method to compare if two strings are equal.
     */
    static equals(first: string, second: string, caseInsensitive?: boolean): boolean;
    /**
     * Static method to compare the lexicographical order of two strings.
     * @returns -1 if `first` comes before `second`, 1 of after, and 0 if equal.
     */
    static compareTo(first: string, second: string): number;
    /**
     * Static method to check if a string starts with a given prefix.
     */
    static startsWith(value: string, prefix: string): boolean;
    /**
     * Static method to check if a string ends with a given suffix.
     */
    static endsWith(value: string, suffix: string): boolean;
    static from(value: string): CustomString;
}
