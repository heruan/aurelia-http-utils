import { Headers } from "./headers";
import { HttpHeaders } from "./http-headers";
import { ContentType } from "./content-type";

export class Part {

    public headers: Headers = new Headers();

    public body: string | ArrayBuffer | ArrayBufferView | Blob;

    public constructor(body: string | ArrayBuffer | ArrayBufferView | Blob, type: ContentType) {
        this.body = body;
        this.headers.add(HttpHeaders.CONTENT_TYPE, type.toString());
    }

    public toBlob(): Blob {
        let headers = [];
        return new Blob()
    }

}
