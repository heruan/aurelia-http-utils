export declare class ContentType {
    static APPLICATION_JSON: ContentType;
    static APPLICATION_JSON_PATCH: ContentType;
    type: string;
    protected subtype: string;
    protected params: Map<string, string>;
    constructor(type: string, subtype?: string, params?: Map<string, string>);
    getType(): string;
    setType(type: string): ContentType;
    getSubtype(): string;
    setSubtype(subtype: string): ContentType;
    getParam(name: string): string;
    setParam(name: string, value: string): ContentType;
    toString(): string;
    static valueOf(value: string): ContentType;
}
