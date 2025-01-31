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
exports.CreateDebtsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateDebtsService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, vdate, user_id, vcard, cvccard, value, description, persona_id, number }) {
            if (!name || !persona_id || !user_id) {
                throw new Error("Error");
            }
            const userAlreadyExists = yield prisma_1.default.debt.findFirst({
                where: {
                    name: name,
                    persona_id: persona_id,
                    user_id
                }
            });
            if (userAlreadyExists) {
                throw new Error("Debts already exist");
            }
            const debt = yield prisma_1.default.debt.create({
                data: {
                    name: name,
                    persona_id: persona_id,
                    number: number,
                    value: value,
                    vcard: vcard,
                    cvccard: cvccard,
                    vdate: vdate,
                    description: description,
                    user_id: user_id
                }
            });
            return debt;
        });
    }
}
exports.CreateDebtsService = CreateDebtsService;
