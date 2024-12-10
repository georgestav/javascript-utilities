"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomString = void 0;
class CustomString extends String {
    constructor(value) {
        super(value); // Call the built-in String constructor
    }
    // Return the primitive string value
    valueOf() {
        return this.toString();
    }
    // ---------- Instance Methods ----------
    /**
     * Capitalize the first letter of the string.
     */
    capitalizeFirstLetter() {
        if (this.isEmpty())
            return this;
        return new CustomString(CustomString.capitalizeFirstLetter(this.toString()));
    }
    /**
     * Sanitize the string.
     */
    sanitize() {
        return new CustomString(CustomString.sanitize(this.toString()));
    }
    /**
     * Check if the string is empty.
     */
    isEmpty() {
        return CustomString.isEmpty(this.toString());
    }
    /**
     * Reverse the string.
     */
    reverse() {
        return new CustomString(CustomString.reverse(this.toString()));
    }
    /**
     * Truncate the string.
     */
    truncate(length) {
        return new CustomString(CustomString.truncate(this.toString(), length));
    }
    /**
     * Count the number of words in the string.
     */
    wordCount() {
        return CustomString.wordCount(this.toString());
    }
    /**
     * Get the raw string representation.
     */
    toValue() {
        return this.toString();
    }
    /**
     * Check if this string equals another string (case-sensitive by default).
     */
    equals(other, caseInsensitive = false) {
        return CustomString.equals(this.toString(), other, caseInsensitive);
    }
    /**
     * Compare lexicographical order with another string.
     * @returns -1 if the instance string comes before, 1 if after, and 0 if equal.
     */
    compareTo(other) {
        return CustomString.compareTo(this.toString(), other);
    }
    /**
     * Check if this string starts with a given prefix.
     */
    startsWith(prefix) {
        return CustomString.startsWith(this.toString(), prefix);
    }
    /**
     * Check if this string ends with a given suffix.
     */
    endsWith(suffix) {
        return CustomString.endsWith(this.toString(), suffix);
    }
    // ---------- Static Methods ----------
    /**
     * Capitalize the first letter of a string
     * @param string Input string
     * @returns String with the first letter capitalized
     */
    static capitalizeFirstLetter(string) {
        if (this.isEmpty(string))
            return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    /**
     * Sanitize a string: removes special characters, replaces spaces with hyphens, converts to lowercase
     * @param string Input string
     * @returns Sanitized string
     */
    static sanitize(string) {
        if (this.isEmpty(string))
            return string;
        return string
            .replace(/[^a-zA-Z0-9]+/g, "-") // Replace non-alphanumeric chars (including spaces) with hyphens
            .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
    }
    /**
     * Check if a string is empty (null, undefined, or just whitespace)
     * @param string Input string
     * @returns Boolean value based on emptiness.
     */
    static isEmpty(string) {
        return string === undefined || string === null || string.trim().length === 0;
    }
    /**
     * Check if a string is not empty
     * @param string Input string
     * @returns Boolean value based on non-emptiness
     */
    static isNotEmpty(string) {
        return !this.isEmpty(string);
    }
    /**
     * Converts a string to camelCase
     * @param string Input string
     * @returns String in camelCase format
     */
    static toCamelCase(string) {
        if (this.isEmpty(string))
            return string;
        if (!/[-_ ]/.test(string))
            return string;
        return string
            .toLowerCase()
            .replace(/[-_ ]+./g, (word) => word.charAt(word.length - 1).toUpperCase());
    }
    /**
     * Converts a string to kebab-case
     * @param string Input string
     * @returns String in kebab-case format.
     */
    static toKebabCase(string) {
        if (this.isEmpty(string))
            return string;
        return string
            .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
            .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
            .toLowerCase();
    }
    /**
     * Remove all spaces from a string
     * @param string Input string
     * @returns String without any spaces.
     */
    static removeSpaces(string) {
        if (this.isEmpty(string))
            return string;
        return string.replace(/\s+/g, "");
    }
    /**
     * Truncate a string to a fixed length, appending <code>...</code> if it's too long
     * @param string Input string
     * @param length Max length of string
     * @returns Truncated string.
     */
    static truncate(string, length) {
        if (this.isEmpty(string))
            return string;
        if (length <= 3)
            return "..."; // If length is too small for truncation, return only ellipsis
        if (string.length <= length)
            return string; // If string is shorter than required length, return string
        return string.slice(0, length - 3) + "..."; // Truncate and append ellipsis
    }
    /**
     * Reverse a string
     * @param string Input string
     * @returns Reversed string
     */
    static reverse(string) {
        if (this.isEmpty(string))
            return string;
        return string.split("").reverse().join("");
    }
    /**
     * Count the count of words in a string
     * @param string Input string
     * @returns Number of words in the string
     */
    static wordCount(string) {
        if (this.isEmpty(string))
            return 0;
        return string.trim().split(/\s+/).length;
    }
    /**
     * Check if a string contains only alphanumeric characters
     * @param string Input string
     * @returns Boolean indicating if the string is alphanumeric.
     */
    static isAlphanumeric(string) {
        if (this.isEmpty(string))
            return false;
        return /^[a-zA-Z0-9]+$/.test(string);
    }
    /**
     * Static method to compare if two strings are equal.
     */
    static equals(first, second, caseInsensitive = false) {
        if (caseInsensitive) {
            return first.toLowerCase() === second.toLowerCase();
        }
        return first === second;
    }
    /**
     * Static method to compare the lexicographical order of two strings.
     * @returns -1 if `first` comes before `second`, 1 of after, and 0 if equal.
     */
    static compareTo(first, second) {
        if (first < second)
            return -1;
        if (first > second)
            return 1;
        return 0;
    }
    /**
     * Static method to check if a string starts with a given prefix.
     */
    static startsWith(value, prefix) {
        return value.startsWith(prefix);
    }
    /**
     * Static method to check if a string ends with a given suffix.
     */
    static endsWith(value, suffix) {
        return value.endsWith(suffix);
    }
    static from(value) {
        if (typeof value !== "string") {
            throw new Error("CustomString can only be created from a string");
        }
        if (this.isEmpty(value)) {
            throw new Error("Cannot create a CustomString from an empty string");
        }
        return new CustomString(value);
    }
}
exports.CustomString = CustomString;
