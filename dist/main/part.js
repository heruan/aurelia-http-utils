"use strict";
var headers_1 = require("./headers");
var http_headers_1 = require("./http-headers");
var Part = (function () {
    function Part(body, type) {
        this.headers = new headers_1.Headers();
        this.body = body;
        this.headers.add(http_headers_1.HttpHeaders.CONTENT_TYPE, type.toString());
    }
    Part.prototype.toBlob = function () {
        var headers = [];
        return new Blob();
    };
    return Part;
}());
exports.Part = Part;
