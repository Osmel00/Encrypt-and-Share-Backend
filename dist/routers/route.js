"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const link_controller_1 = require("../controller/link.controller");
const router = express_1.default.Router();
router.post('/', link_controller_1.addLinks);
router.get('/:key', link_controller_1.getKey);
module.exports = router;
