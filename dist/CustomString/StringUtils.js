"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
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
}
exports.StringUtils = StringUtils;
