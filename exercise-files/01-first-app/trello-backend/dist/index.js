"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
var port = 4000;
var lists = [];
app.post("/save", function (req, res) {
    console.log(req.body);
    lists = req.body.lists;
    return res.json({ success: true });
});
app.get("/load", function (req, res) { return res.json({ lists: lists }); });
app.listen(port, function () {
    return console.log("Kanban backend running on http://localhost:" + port + "!");
});
