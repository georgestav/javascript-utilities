import { CustomString } from '../CustomString';

describe('CustomString', () => {
    describe('static methods', () => {
        test('capitalizeFirstLetter should capitalize the first letter', () => {
            const result = CustomString.capitalizeFirstLetter("hello world");
            expect(result).toBe("Hello world");
        });

        test('sanitize should remove special characters and replace spaces with hyphens', () => {
            const result = CustomString.sanitize("Hello@World!");
            expect(result).toBe("Hello-World");
        });

        test('isEmpty should return true for empty or whitespace strings', () => {
            expect(CustomString.isEmpty("")).toBe(true);
            expect(CustomString.isEmpty("   ")).toBe(true);
            expect(CustomString.isEmpty("abc")).toBe(false);
        });

        test('toKebabCase should convert a string to kebab-case', () => {
            const result = CustomString.toKebabCase("Hello World Example");
            expect(result).toBe("hello-world-example");
        });

        test('reverse should reverse a string', () => {
            const result = CustomString.reverse("hello");
            expect(result).toBe("olleh");
        });

        test('sanitize should handle edge cases with leading/trailing special characters', () => {
            expect(CustomString.sanitize("@Hello@World!")).toBe("Hello-World");
            expect(CustomString.sanitize("   Leading and trailing spaces   ")).toBe("Leading-and-trailing-spaces");
            expect(CustomString.sanitize("Multiple    spaces here")).toBe("Multiple-spaces-here");
            expect(CustomString.sanitize("___underscore_test___")).toBe("underscore-test");
        });

        test('truncate should handle very short strings or lengths smaller than ellipsis length', () => {
            expect(CustomString.truncate("Hi", 1)).toBe("...");
            expect(CustomString.truncate("Hi", 3)).toBe("...");
            expect(CustomString.truncate("Hello", 5)).toBe("Hello"); // Equal in length
            expect(CustomString.truncate("Hello World", 8)).toBe("Hello...");
        });

        test('reverse should handle special characters and empty strings', () => {
            expect(CustomString.reverse("")).toBe("");
            expect(CustomString.reverse("a")).toBe("a");
            expect(CustomString.reverse("racecar")).toBe("racecar"); // Palindrome
            expect(CustomString.reverse("123@abc")).toBe("cba@321");
        });

        test('isEmpty should correctly handle null and undefined', () => {
            // @ts-expect-error
            expect(CustomString.isEmpty(null)).toBe(true);
            // @ts-expect-error
            expect(CustomString.isEmpty(undefined)).toBe(true);
            expect(CustomString.isEmpty("   ")).toBe(true);
            expect(CustomString.isEmpty("test")).toBe(false);
        });

        test('equals should respect case sensitivity', () => {
            expect(CustomString.equals("hello", "hello")).toBe(true);
            expect(CustomString.equals("hello", "Hello")).toBe(false);
            expect(CustomString.equals("hello", "Hello", true)).toBe(true); // Case insensitive
        });

        test('toCamelCase should convert strings to camelCase correctly', () => {
            expect(CustomString.toCamelCase("hello world")).toBe("helloWorld");
            expect(CustomString.toCamelCase("Hello-World-Example")).toBe("helloWorldExample");
            expect(CustomString.toCamelCase("snake_case_format")).toBe("snakeCaseFormat");
            expect(CustomString.toCamelCase("alreadyCamelCase")).toBe("alreadyCamelCase");
        });

        test('toKebabCase should convert strings to kebab-case correctly', () => {
            expect(CustomString.toKebabCase("hello world")).toBe("hello-world");
            expect(CustomString.toKebabCase("HelloWorldExample")).toBe("hello-world-example");
            expect(CustomString.toKebabCase("multiple_Cases_used")).toBe("multiple-cases-used");
            expect(CustomString.toKebabCase("already-kebab-case")).toBe("already-kebab-case");
        });

        test('isAlphanumeric should correctly identify alphanumeric strings', () => {
            expect(CustomString.isAlphanumeric("hello123")).toBe(true);
            expect(CustomString.isAlphanumeric("HelloWorld")).toBe(true);
            expect(CustomString.isAlphanumeric("abc!123")).toBe(false);
            expect(CustomString.isAlphanumeric(" ")).toBe(false);
        });

        test('wordCount should handle whitespace correctly', () => {
            expect(CustomString.wordCount("This is a test")).toBe(4);
            expect(CustomString.wordCount("   Leading and trailing whitespace   ")).toBe(4);
            expect(CustomString.wordCount("")).toBe(0);
            expect(CustomString.wordCount("SingleWord")).toBe(1);
        });

        test('from should return a CustomString instance or throw for invalid input', () => {
            expect(CustomString.from("This is a test")).toBeInstanceOf(CustomString);

            expect(() => {
                // @ts-expect-error
                CustomString.from(123);
            }).toThrowError("CustomString can only be created from a string");

            expect(() => {
                CustomString.from("");
            }).toThrowError("Cannot create a CustomString from an empty string");
        });
    });

    describe('instance methods', () => {
        test('capitalizeFirstLetter should capitalize the instance string', () => {
            const customString = new CustomString("hello");
            const result = customString.capitalizeFirstLetter().toValue();
            expect(result).toBe("Hello");
        });

        test('reverse should reverse the instance string', () => {
            const customString = new CustomString("hello");
            const result = customString.reverse().toValue();
            expect(result).toBe("olleh");
        });

        test('isEmpty should return true for an empty instance string', () => {
            const customString = new CustomString("");
            expect(customString.isEmpty()).toBe(true);
        });

        test('truncate should truncate the string and append "..."', () => {
            const customString = new CustomString("This is a test string.");
            const truncated = customString.truncate(10).toValue();
            expect(truncated).toBe("This is...");
        });

        test('wordCount should return the correct number of words', () => {
            const customString = new CustomString("This is a test string");
            const count = customString.wordCount();
            expect(count).toBe(5);
        });

        test('equals should compare CustomString instances correctly', () => {
            const customString = new CustomString("hello");
            expect(customString.equals("hello")).toBe(true);
            expect(customString.equals("Hello")).toBe(false);
            expect(customString.equals("Hello", true)).toBe(true); // Case insensitive
        });

        test('sanitize should sanitize the instance string', () => {
            const customString = new CustomString("Hello @there!");
            const sanitized = customString.sanitize().toValue();
            expect(sanitized).toBe("Hello-there");
        });

        test('startsWith should test prefixes', () => {
            const customString = new CustomString("hello world");
            expect(customString.startsWith("hello")).toBe(true);
            expect(customString.startsWith("world")).toBe(false);
        });

        test('endsWith should test suffixes', () => {
            const customString = new CustomString("hello world");
            expect(customString.endsWith("world")).toBe(true);
            expect(customString.endsWith("hello")).toBe(false);
        });

        test('compareTo should correctly compare CustomString instances', () => {
            const customString = new CustomString("apple");
            expect(customString.compareTo("apple")).toBe(0);
            expect(customString.compareTo("banana")).toBe(-1);
            expect(customString.compareTo("ant")).toBe(1);
        });
    });
});