export declare class Headers {
    private headers;
    constructor();
    add(name: string, ...values: string[]): Headers;
    set(name: string, ...values: string[]): Headers;
    get(name: string): string[];
    has(name: string): boolean;
    toString(): string;
}
