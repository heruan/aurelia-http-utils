"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var multipart_1 = require("./multipart");
var content_type_1 = require("./content-type");
var MultipartRelated = (function (_super) {
    __extends(MultipartRelated, _super);
    function MultipartRelated(type, boundary) {
        var _this = _super.call(this, boundary) || this;
        _this.parts = new Map();
        _this.type = type;
        return _this;
    }
    MultipartRelated.prototype.addRootPart = function (part, id, info) {
        if (id === void 0) { id = part.headers.get(MultipartRelated.CONTENT_ID)[0]; }
        this.start = id;
        this.startInfo = info;
        return this.addPart(part, id);
    };
    MultipartRelated.prototype.addPart = function (part, id) {
        if (id === void 0) { id = part.headers.get(MultipartRelated.CONTENT_ID)[0]; }
        part.headers.set(MultipartRelated.CONTENT_ID, id);
        this.parts.set(id, part);
        return this;
    };
    MultipartRelated.prototype.toBlob = function () {
        var _this = this;
        var type = new content_type_1.ContentType("multipart", "related").setParam("boundary", this.boundary).setParam("type", this.type.toString());
        if (this.start) {
            type.setParam("start", this.start);
        }
        if (this.startInfo) {
            type.setParam("start-info", this.startInfo);
        }
        return new Blob(Array.from(this.parts.values()).reduce(function (parts, part) { return parts.concat(["--" + _this.boundary + "\r\n", part.headers.toString(), "\r\n\r\n", part.body, "\r\n"]); }, []).concat([
            "--" + this.boundary + "--"
        ]), {
            type: type.toString()
        });
    };
    return MultipartRelated;
}(multipart_1.Multipart));
MultipartRelated.CONTENT_ID = "Content-ID";
exports.MultipartRelated = MultipartRelated;

//# sourceMappingURL=multipart-related.js.map
