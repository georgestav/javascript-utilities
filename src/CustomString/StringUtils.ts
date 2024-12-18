export class StringUtils {
    /**
     * Capitalize the first letter of a string
     * @param string Input string
     * @returns String with the first letter capitalized
     */
    public static capitalizeFirstLetter(string: string): string {
        if (this.isEmpty(string)) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Sanitize a string: removes special characters, replaces spaces with hyphens, converts to lowercase
     * @param string Input string
     * @returns Sanitized string
     */
    public static sanitize(string: string): string {
        if (this.isEmpty(string)) return string;
        return string
            .replace(/[^a-zA-Z0-9]+/g, "-") // Replace non-alphanumeric chars (including spaces) with hyphens
            .replace(/^-+|-+$/g, "");      // Remove leading and trailing hyphens
    }

    /**
     * Check if a string is empty (null, undefined, or just whitespace)
     * @param string Input string
     * @returns Boolean value based on emptiness.
     */
    public static isEmpty(string: string): boolean {
        return string === undefined || string === null || string.trim().length === 0;
    }

    /**
     * Converts a string to camelCase
     * @param string Input string
     * @returns String in camelCase format
     */
    public static toCamelCase(string: string): string {
        if (this.isEmpty(string)) return string;
        if (!/[-_ ]/.test(string)) return string;
        return string
            .toLowerCase()
            .replace(/[-_ ]+./g, (word) => word.charAt(word.length - 1).toUpperCase());
    }

    /**
     * Converts a string to kebab-case
     * @param string Input string
     * @returns String in kebab-case format.
     */
    public static toKebabCase(string: string): string {
        if (this.isEmpty(string)) return string;
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
    public static removeSpaces(string: string): string {
        if (this.isEmpty(string)) return string;
        return string.replace(/\s+/g, "");
    }

    /**
     * Truncate a string to a fixed length, appending <code>...</code> if it's too long
     * @param string Input string
     * @param length Max length of string
     * @returns Truncated string.
     */
    public static truncate(string: string, length: number): string {
        if (this.isEmpty(string)) return string;
        if (length <= 3) return "..."; // If length is too small for truncation, return only ellipsis
        if (string.length <= length) return string; // If string is shorter than required length, return string
        return string.slice(0, length - 3) + "..."; // Truncate and append ellipsis
    }

    /**
     * Reverse a string
     * @param string Input string
     * @returns Reversed string
     */
    public static reverse(string: string): string {
        if (this.isEmpty(string)) return string;
        return string.split("").reverse().join("");
    }

    /**
     * Count the count of words in a string
     * @param string Input string
     * @returns Number of words in the string
     */
    public static wordCount(string: string): number {
        if (this.isEmpty(string)) return 0;
        return string.trim().split(/\s+/).length;
    }

    /**
     * Check if a string contains only alphanumeric characters
     * @param string Input string
     * @returns Boolean indicating if the string is alphanumeric.
     */
    public static isAlphanumeric(string: string): boolean {
        if (this.isEmpty(string)) return false;
        return /^[a-zA-Z0-9]+$/.test(string);
    }

    /**
     * Static method to compare if two strings are equal.
     */
    public static equals(first: string, second: string, caseInsensitive: boolean = false): boolean {
        if (caseInsensitive) {
            return first.toLowerCase() === second.toLowerCase();
        }
        return first === second;
    }

    /**
     * Static method to compare the lexicographical order of two strings.
     * @returns -1 if `first` comes before `second`, 1 of after, and 0 if equal.
     */
    public static compareTo(first: string, second: string): number {
        if (first < second) return -1;
        if (first > second) return 1;
        return 0;
    }

    /**
     * Static method to check if a string starts with a given prefix.
     */
    public static startsWith(value: string, prefix: string): boolean {
        return value.startsWith(prefix);
    }

    /**
     * Static method to check if a string ends with a given suffix.
     */
    public static endsWith(value: string, suffix: string): boolean {
        return value.endsWith(suffix);
    }
}