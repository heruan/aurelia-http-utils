import { MediaType } from "./media-type";

export class ContentType {

    public static valueOf(value: string): ContentType {
        let params = value.split(";");
        let [ type, subtype ] = params.shift().split("/");
        return new ContentType(type, subtype, new Map<string, string>(<[string, string][]>params.map(param => {
            let indexOfEqualSign = param.indexOf("=");
            return [ param.substring(0, indexOfEqualSign), param.substring(indexOfEqualSign + 1) ];
        })));
    }

    public static APPLICATION_JSON = ContentType.valueOf(MediaType.APPLICATION_JSON);

    public static APPLICATION_JSON_PATCH = ContentType.valueOf(MediaType.APPLICATION_JSON_PATCH);

    protected type: string;

    protected subtype: string;

    protected params: Map<string, string>;

    public constructor(type: string, subtype: string = "*", params: Map<string, string> = new Map<string, string>()) {
        this.type = type;
        this.subtype = subtype;
        this.params = params;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): ContentType {
        this.type = type;
        return this;
    }

    public getSubtype(): string {
        return this.subtype;
    }

    public setSubtype(subtype: string): ContentType {
        this.subtype = subtype;
        return this;
    }

    public getParam(name: string): string {
        return this.params.get(name);
    }

    public setParam(name: string, value: string): ContentType {
        this.params.set(name, value);
        return this;
    }

    public toString(): string {
        let string = this.type + "/" + this.subtype;
        if (this.params.size > 0) {
            string += ";" + Array.from(this.params).map(param => param.join("=")).join(";");
        }
        return string;
    }

}
