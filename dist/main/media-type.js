"use strict";
var MediaType = (function () {
    function MediaType() {
    }
    return MediaType;
}());
exports.MediaType = MediaType;
MediaType.APPLICATION_JSON = "application/json";
MediaType.APPLICATION_JSON_SCHEMA = "application/schema+json";
MediaType.APPLICATION_JSON_PATCH = "application/json-patch+json";
MediaType.APPLICATION_FORM_URLENCODED = "application/x-www-form-urlencoded";
MediaType.MULTIPART_FORM_DATA = "multipart/form-data";
MediaType.TEXT_PLAIN = "text/plain";
MediaType.WILDCARD = "*/*";