"use strict";
var Multipart = (function () {
    function Multipart(boundary) {
        this.boundary = boundary || "--------------------------------" + new Date().getTime();
    }
    return Multipart;
}());
exports.Multipart = Multipart;

//# sourceMappingURL=multipart.js.map
