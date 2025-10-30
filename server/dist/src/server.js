"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_express_1 = __importDefault(require("vite-express"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
vite_express_1.default.config({
    inlineViteConfig: {
        base: '',
        build: { outDir: '../dist' },
    },
});
vite_express_1.default.listen(app, 3000, () => console.info('Server is listening (3000)...'));
