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
exports.DeleteDebtsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteDebtsService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ debt_id }) {
            var _b;
            const item = yield prisma_1.default.item.findFirst({
                where: {
                    debt_id: debt_id
                },
                include: {
                    debt: true
                }
            });
            if (((_b = item === null || item === void 0 ? void 0 : item.debt) === null || _b === void 0 ? void 0 : _b.id) === debt_id) {
                throw new Error("A dívida não pode ser excluída porque está associada a itens.");
            }
            const debt = yield prisma_1.default.debt.delete({
                where: {
                    id: debt_id
                }
            });
            return debt;
        });
    }
}
exports.DeleteDebtsService = DeleteDebtsService;
