"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomString_1 = require("../CustomString");
describe('StringUtils', () => {
    describe('static methods', () => {
        test('capitalizeFirstLetter should capitalize the first letter', () => {
            const result = CustomString_1.StringUtils.capitalizeFirstLetter("hello world");
            expect(result).toBe("Hello world");
        });
        test('sanitize should remove special characters and replace spaces with hyphens', () => {
            const result = CustomString_1.StringUtils.sanitize("Hello@World!");
            expect(result).toBe("Hello-World");
        });
        test('isEmpty should return true for empty or whitespace strings', () => {
            expect(CustomString_1.StringUtils.isEmpty("")).toBe(true);
            expect(CustomString_1.StringUtils.isEmpty("   ")).toBe(true);
            expect(CustomString_1.StringUtils.isEmpty("abc")).toBe(false);
        });
        test('toKebabCase should convert a string to kebab-case', () => {
            const result = CustomString_1.StringUtils.toKebabCase("Hello World Example");
            expect(result).toBe("hello-world-example");
        });
        test('reverse should reverse a string', () => {
            const result = CustomString_1.StringUtils.reverse("hello");
            expect(result).toBe("olleh");
        });
        test('sanitize should handle edge cases with leading/trailing special characters', () => {
            expect(CustomString_1.StringUtils.sanitize("@Hello@World!")).toBe("Hello-World");
            expect(CustomString_1.StringUtils.sanitize("   Leading and trailing spaces   ")).toBe("Leading-and-trailing-spaces");
            expect(CustomString_1.StringUtils.sanitize("Multiple    spaces here")).toBe("Multiple-spaces-here");
            expect(CustomString_1.StringUtils.sanitize("___underscore_test___")).toBe("underscore-test");
        });
        test('truncate should handle very short strings or lengths smaller than ellipsis length', () => {
            expect(CustomString_1.StringUtils.truncate("Hi", 1)).toBe("...");
            expect(CustomString_1.StringUtils.truncate("Hi", 3)).toBe("...");
            expect(CustomString_1.StringUtils.truncate("Hello", 5)).toBe("Hello"); // Equal in length
            expect(CustomString_1.StringUtils.truncate("Hello World", 8)).toBe("Hello...");
        });
        test('reverse should handle special characters and empty strings', () => {
            expect(CustomString_1.StringUtils.reverse("")).toBe("");
            expect(CustomString_1.StringUtils.reverse("a")).toBe("a");
            expect(CustomString_1.StringUtils.reverse("racecar")).toBe("racecar"); // Palindrome
            expect(CustomString_1.StringUtils.reverse("123@abc")).toBe("cba@321");
        });
        test('isEmpty should correctly handle null and undefined', () => {
            // @ts-expect-error
            expect(CustomString_1.StringUtils.isEmpty(null)).toBe(true);
            // @ts-expect-error
            expect(CustomString_1.StringUtils.isEmpty(undefined)).toBe(true);
            expect(CustomString_1.StringUtils.isEmpty("   ")).toBe(true);
            expect(CustomString_1.StringUtils.isEmpty("test")).toBe(false);
        });
        test('equals should respect case sensitivity', () => {
            expect(CustomString_1.StringUtils.equals("hello", "hello")).toBe(true);
            expect(CustomString_1.StringUtils.equals("hello", "Hello")).toBe(false);
            expect(CustomString_1.StringUtils.equals("hello", "Hello", true)).toBe(true); // Case insensitive
        });
        test('toCamelCase should convert strings to camelCase correctly', () => {
            expect(CustomString_1.StringUtils.toCamelCase("hello world")).toBe("helloWorld");
            expect(CustomString_1.StringUtils.toCamelCase("Hello-World-Example")).toBe("helloWorldExample");
            expect(CustomString_1.StringUtils.toCamelCase("snake_case_format")).toBe("snakeCaseFormat");
            expect(CustomString_1.StringUtils.toCamelCase("alreadyCamelCase")).toBe("alreadyCamelCase");
        });
        test('toKebabCase should convert strings to kebab-case correctly', () => {
            expect(CustomString_1.StringUtils.toKebabCase("hello world")).toBe("hello-world");
            expect(CustomString_1.StringUtils.toKebabCase("HelloWorldExample")).toBe("hello-world-example");
            expect(CustomString_1.StringUtils.toKebabCase("multiple_Cases_used")).toBe("multiple-cases-used");
            expect(CustomString_1.StringUtils.toKebabCase("already-kebab-case")).toBe("already-kebab-case");
        });
        test('isAlphanumeric should correctly identify alphanumeric strings', () => {
            expect(CustomString_1.StringUtils.isAlphanumeric("hello123")).toBe(true);
            expect(CustomString_1.StringUtils.isAlphanumeric("HelloWorld")).toBe(true);
            expect(CustomString_1.StringUtils.isAlphanumeric("abc!123")).toBe(false);
            expect(CustomString_1.StringUtils.isAlphanumeric(" ")).toBe(false);
        });
        test('wordCount should handle whitespace correctly', () => {
            expect(CustomString_1.StringUtils.wordCount("This is a test")).toBe(4);
            expect(CustomString_1.StringUtils.wordCount("   Leading and trailing whitespace   ")).toBe(4);
            expect(CustomString_1.StringUtils.wordCount("")).toBe(0);
            expect(CustomString_1.StringUtils.wordCount("SingleWord")).toBe(1);
        });
    });
    describe('instance methods', () => {
        test('capitalizeFirstLetter should capitalize the instance string', () => {
            const customString = "hello";
            const result = customString.capitalizeFirstLetter();
            expect(result).toBe("Hello");
        });
        test('reverse should reverse the instance string', () => {
            const customString = "hello";
            const result = customString.reverse();
            expect(result).toBe("olleh");
        });
        test('isEmpty should return true for an empty instance string', () => {
            const customString = "";
            expect(customString.isEmpty()).toBe(true);
        });
        test('truncate should truncate the string and append "..."', () => {
            const customString = "This is a test string.";
            const truncated = customString.truncate(10);
            expect(truncated).toBe("This is...");
        });
        test('wordCount should return the correct number of words', () => {
            const customString = "This is a test string";
            const count = customString.wordCount();
            expect(count).toBe(5);
        });
        test('equals should compare StringUtils instances correctly', () => {
            const customString = "hello";
            expect(customString.equals("hello")).toBe(true);
            expect(customString.equals("Hello")).toBe(false);
            expect(customString.equals("Hello", true)).toBe(true); // Case insensitive
        });
        test('sanitize should sanitize the instance string', () => {
            const customString = "Hello @there!";
            const sanitized = customString.sanitize();
            expect(sanitized).toBe("Hello-there");
        });
        test('compareTo should correctly compare StringUtils instances', () => {
            const customString = "apple";
            expect(customString.compareTo("apple")).toBe(0);
            expect(customString.compareTo("banana")).toBe(-1);
            expect(customString.compareTo("ant")).toBe(1);
        });
    });
});
