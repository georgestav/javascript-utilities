export * from "./NumberUtils";
declare global {
    interface Number {
        isEven(): boolean;
        max(num2: number): number;
        min(num2: number): number;
    }
}
