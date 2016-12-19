"use strict";
var media_type_1 = require("./media-type");
var ContentType = (function () {
    function ContentType(type, subtype, params) {
        if (subtype === void 0) { subtype = "*"; }
        if (params === void 0) { params = new Map(); }
        this.type = type;
        this.subtype = subtype;
        this.params = params;
    }
    ContentType.prototype.getType = function () {
        return this.type;
    };
    ContentType.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    ContentType.prototype.getSubtype = function () {
        return this.subtype;
    };
    ContentType.prototype.setSubtype = function (subtype) {
        this.subtype = subtype;
        return this;
    };
    ContentType.prototype.getParam = function (name) {
        return this.params.get(name);
    };
    ContentType.prototype.setParam = function (name, value) {
        this.params.set(name, value);
        return this;
    };
    ContentType.prototype.toString = function () {
        var string = this.type + "/" + this.subtype;
        if (this.params.size > 0) {
            string += ";" + Array.from(this.params).map(function (param) { return param.join("="); }).join(";");
        }
        return string;
    };
    ContentType.valueOf = function (value) {
        var params = value.split(";");
        var _a = params.shift().split("/"), type = _a[0], subtype = _a[1];
        return new ContentType(type, subtype, new Map(params.map(function (param) {
            var indexOfEqualSign = param.indexOf("=");
            return [param.substring(0, indexOfEqualSign), param.substring(indexOfEqualSign + 1)];
        })));
    };
    return ContentType;
}());
ContentType.APPLICATION_JSON = ContentType.valueOf(media_type_1.MediaType.APPLICATION_JSON);
ContentType.APPLICATION_JSON_PATCH = ContentType.valueOf(media_type_1.MediaType.APPLICATION_JSON_PATCH);
exports.ContentType = ContentType;

//# sourceMappingURL=content-type.js.map
