import { Multipart } from "./multipart";
import { Part } from "./part";
import { ContentType } from "./content-type";

export class MultipartRelated extends Multipart {

    public static CONTENT_ID: string = "Content-ID";

    protected type: ContentType;

    protected start: string;

    protected startInfo: string;

    protected root: Part;

    protected parts: Map<string, Part> = new Map<string, Part>();

    public constructor(type: ContentType, boundary?: string) {
        super(boundary);
        this.type = type;
    }

    public addRootPart(part: Part, id: string = part.headers.get(MultipartRelated.CONTENT_ID)[0], info?: string): MultipartRelated {
        this.start = id;
        this.startInfo = info;
        return this.addPart(part, id);
    }

    public addPart(part: Part, id: string = part.headers.get(MultipartRelated.CONTENT_ID)[0]): MultipartRelated {
        part.headers.set(MultipartRelated.CONTENT_ID, id);
        this.parts.set(id, part);
        return this;
    }

    public toBlob(): Blob {
        let type = new ContentType("multipart", "related").setParam("boundary", this.boundary).setParam("type", this.type.toString());
        if (this.start) {
            type.setParam("start", this.start);
        }
        if (this.startInfo) {
            type.setParam("start-info", this.startInfo);
        }
        return new Blob([
            ...Array.from(this.parts.values()).reduce((parts, part) => parts.concat(["--" + this.boundary + "\r\n", part.headers.toString(), "\r\n\r\n", part.body, "\r\n" ]), []),
            "--" + this.boundary + "--"
        ], {
            type: type.toString()
        });
    }
}
