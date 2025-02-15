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
exports.ListDebtsSumService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListDebtsSumService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ debt_id }) {
            // Busca o débito e calcula a soma diretamente no banco
            const debt = yield prisma_1.default.debt.findUnique({
                where: { id: debt_id },
                include: {
                    item: true, // Se precisar listar os itens
                },
            });
            // Calcula a soma diretamente no Prisma
            const total = yield prisma_1.default.item.aggregate({
                where: { debt_id },
                _sum: {
                    value: true,
                },
            });
            // Retorna os dados do débito com o total dos itens
            return Object.assign(Object.assign({}, debt), { totalValue: total._sum.value || 0 });
        });
    }
}
exports.ListDebtsSumService = ListDebtsSumService;
