export class Headers {

    private headers: Map<string, { name: string, values: string[] }>;

    public constructor() {
        this.headers = new Map<string, { name: string, values: string[] }>();
    }

    public add(name: string, ...values: string[]): Headers {
        if (this.has(name)) {
            this.headers.get(name.toLowerCase()).values.push(...values);
            return this;
        } else {
            return this.set(name, ...values);
        }
    }

    public set(name: string, ...values: string[]): Headers {
        this.headers.set(name.toLowerCase(), { name, values });
        return this;
    }

    public get(name: string): string[] {
        return this.has(name) ? this.headers.get(name.toLowerCase()).values : null;
    }

    public has(name: string): boolean {
        return this.headers.has(name.toLowerCase());
    }

    public toString(): string {
        return Array.from(this.headers.values()).reduce<string[]>((headers, header) => headers.concat(header.values.map(value => `${header.name}: ${value}`)), []).join("\r\n");
    }

}
