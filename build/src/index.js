"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("../routes/diaries"));
const app = express_1.default();
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    console.log('Are we playing tennis?');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
const PORT = 3003;
app.listen(PORT, () => {
    console.log('Server started on port 3003.');
});
