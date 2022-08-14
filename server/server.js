"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Hanling GET / Request
app.get('/', (req, res) => {
    res.send("welcome to typescript backend!");
});
// Serve setup
app.listen(PORT, () => {
    console.log(`The application is listening`
        + `on port https://localhost:` + PORT);
});
