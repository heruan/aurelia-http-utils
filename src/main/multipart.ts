export class Multipart {

    protected boundary: string;

    public constructor(boundary?: string) {
        this.boundary = boundary || "--------------------------------" + new Date().getTime();
    }

}
