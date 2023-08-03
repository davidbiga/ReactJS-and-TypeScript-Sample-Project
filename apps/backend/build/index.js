"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var nasa_1 = require("./controllers/nasa");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.get("/apods", function (req, res) { return res.send((0, nasa_1.getApods)()); });
app.listen(PORT, function () { return console.log("\u26A1Server is running here \uD83D\uDC49 https://localhost:".concat(PORT)); });
