"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_1 = __importDefault(require("./api/images"));
var routes = (0, express_1.Router)();
routes.use(images_1.default);
routes.get("/", function (req, res) {
    res.send("\n    <p>Main route for image processing API\n    use the url below to get images</p>\n    <p>http://localhost:3000/api/images?fileName={image_name}&width={image_width}&height={image_height}</p>\n    ");
});
exports.default = routes;
