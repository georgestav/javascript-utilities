import {StringUtils} from "./StringUtils";
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
