import {NumberUtils} from "./NumberUtils";
export * from "./NumberUtils";

declare global {
    interface Number {
        isEven(): boolean;
        max(num2: number): number;
        min(num2: number): number;

    }
}

Number.prototype.isEven = function (): boolean {
    return NumberUtils.isEven(this as number);
};

Number.prototype.max = function (num2: number): number {
    return NumberUtils.max(this as number, num2);
};

Number.prototype.min = function (num2: number): number {
    return NumberUtils.min(this as number, num2);
};
