"use strict";
var Headers = (function () {
    function Headers() {
        this.headers = new Map();
    }
    Headers.prototype.add = function (name) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (this.has(name)) {
            (_a = this.headers.get(name.toLowerCase()).values).push.apply(_a, values);
            return this;
        }
        else {
            return this.set.apply(this, [name].concat(values));
        }
        var _a;
    };
    Headers.prototype.set = function (name) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        this.headers.set(name.toLowerCase(), { name: name, values: values });
        return this;
    };
    Headers.prototype.get = function (name) {
        return this.has(name) ? this.headers.get(name.toLowerCase()).values : null;
    };
    Headers.prototype.has = function (name) {
        return this.headers.has(name.toLowerCase());
    };
    Headers.prototype.toString = function () {
        return Array.from(this.headers.values()).reduce(function (headers, header) { return headers.concat(header.values.map(function (value) { return header.name + ": " + value; })); }, []).join("\r\n");
    };
    return Headers;
}());
exports.Headers = Headers;
