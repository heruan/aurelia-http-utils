import { Multipart } from "./multipart";
import { Part } from "./part";
import { ContentType } from "./content-type";
export declare class MultipartRelated extends Multipart {
    static CONTENT_ID: string;
    protected type: ContentType;
    protected start: string;
    protected startInfo: string;
    protected root: Part;
    protected parts: Map<string, Part>;
    constructor(type: ContentType, boundary?: string);
    addRootPart(part: Part, id?: string, info?: string): MultipartRelated;
    addPart(part: Part, id?: string): MultipartRelated;
    toBlob(): Blob;
}
