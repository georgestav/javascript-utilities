export * from "./StringUtils";
declare global {
    interface String {
        capitalizeFirstLetter(): string;
        sanitize(): string;
        isEmpty(): boolean;
        toCamelCase(): string;
        toKebabCase(): string;
        removeSpaces(): string;
        truncate(length: number): string;
        reverse(): string;
        wordCount(): number;
        isAlphanumeric(): boolean;
        equals(second: string, caseInsensitive?: boolean): boolean;
        compareTo(second: string): number;
    }
}
