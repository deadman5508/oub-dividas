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
exports.UpdatePersonaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdatePersonaService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, name, dowvalue = '0', cpf = '0', status = true, upvalue = '0', persona_id }) {
            //buscar informacoes sobre cliente premium
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    id: user_id
                },
                include: {
                    subscriptions: true
                }
            });
            //--caso eu queira bloquear quem nao eh premium
            // if(user?.subscriptions?.status !=='active'){
            //     throw new Error("Not Authorized")
            // }
            const persona = yield prisma_1.default.persona.update({
                where: {
                    id: persona_id
                },
                data: {
                    name: name,
                    cpf: cpf,
                    status: status === true ? true : false,
                    dowvalue: dowvalue,
                    upvalue: upvalue,
                }
            });
            return persona;
        });
    }
}
exports.UpdatePersonaService = UpdatePersonaService;
