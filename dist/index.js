"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./routers/route"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api", (req, res) => {
    res.send("Hello");
});
app.use("/link", route_1.default);
//mongodb://localhost:27017
const connectDb = async () => {
    try {
        await mongoose_1.default.connect("mongodb://127.0.0.1:27017/encryptDB"
        //process.env.MONGODB_SERVER_URL as string,
        );
        console.log("Connected to DB");
    }
    catch (error) {
        console.log("Couldn't connect to DB", error);
    }
};
connectDb();
app.listen(port, () => {
    console.log("listening on http://localhost:" + port);
});
