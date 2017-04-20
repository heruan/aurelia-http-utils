"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkHeaderParser = (function () {
    function LinkHeaderParser() {
    }
    LinkHeaderParser.prototype.parse = function (headers) {
        var result = new Map();
        var relsRegExp = /\brel="?([^"]+)"?\s*;?/i;
        var keysRegExp = /(\b[0-9a-z\.-]+\b)/gi;
        var sourceRegExp = /^<(.*)>/;
        for (var i = 0; i < headers.length; i++) {
            var entry = headers[i].trim();
            var rels = relsRegExp.exec(entry);
            if (rels) {
                var keys = rels[1].match(keysRegExp);
                var source = sourceRegExp.exec(entry)[1];
                var kLength = keys.length;
                for (var k = 0; k < kLength; k += 1) {
                    result.set(keys[k], source);
                }
            }
        }
        return result;
    };
    return LinkHeaderParser;
}());
exports.LinkHeaderParser = LinkHeaderParser;

//# sourceMappingURL=link-header-parser.js.map
