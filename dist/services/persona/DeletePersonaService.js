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
exports.DeletePersonaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeletePersonaService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ persona_id }) {
            var _b;
            const debt = yield prisma_1.default.debt.findFirst({
                where: {
                    persona_id: persona_id
                },
                include: {
                    persona: true
                }
            });
            if (((_b = debt === null || debt === void 0 ? void 0 : debt.persona) === null || _b === void 0 ? void 0 : _b.id) === persona_id) {
                throw new Error('A pessoa/empresa nao pode ser excluida pois esta associada a debitos.');
            }
            const persona = yield prisma_1.default.persona.delete({
                where: {
                    id: persona_id
                }
            });
            return persona;
        });
    }
}
exports.DeletePersonaService = DeletePersonaService;
