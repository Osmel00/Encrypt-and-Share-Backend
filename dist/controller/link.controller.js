"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKey = exports.addLinks = void 0;
const link_schema_1 = __importDefault(require("../model/link.schema"));
const addLinks = async (req, res) => {
    const { key } = req.body;
    await link_schema_1.default.create({ link: key }).then((model) => res.status(200).send(model)).catch((err) => console.log(err));
};
exports.addLinks = addLinks;
const getKey = async (req, res) => {
    const { key } = req.params;
    //console.log(key)
    await link_schema_1.default.findOneAndDelete({ link: key }).then(link => (link === null || link === void 0 ? void 0 : link.length) !== 0 ? res.status(200).json({ ok: true, link }) : res.status(404).json({ ok: false, link })).catch((err) => res.status(500).send(err));
}; //
exports.getKey = getKey;
