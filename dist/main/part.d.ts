import { Headers } from "./headers";
import { ContentType } from "./content-type";
export declare class Part {
    headers: Headers;
    body: string | ArrayBuffer | ArrayBufferView | Blob;
    constructor(body: string | ArrayBuffer | ArrayBufferView | Blob, type: ContentType);
    toBlob(): Blob;
}
