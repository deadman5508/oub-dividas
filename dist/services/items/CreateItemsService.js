"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateItemsService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ debt_id, name, persona_id, value }) {
            if (!name || !persona_id || !value || !debt_id) {
                throw new Error("Error");
            }
            const item = yield prisma_1.default.item.create({
                data: {
                    name: name,
                    persona_id: persona_id,
                    value: value,
                    debt_id: debt_id,
                }
            });
            return item;
        });
    }
}
exports.CreateItemsService = CreateItemsService;
