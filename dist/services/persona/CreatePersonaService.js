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
exports.CreatePersonaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
//verificar se ele é premium , caso nao seja limitar a quantidade de pessoas
class CreatePersonaService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, name, upvalue, dowvalue, cpf }) {
            if (!name) {
                throw new Error("Error");
            }
            const userAlreadyExists = yield prisma_1.default.persona.findFirst({
                where: {
                    name: name
                }
            });
            if (userAlreadyExists) {
                throw new Error("Persona already exist");
            }
            //verificar quantas pessoas esse usuario ja cadastrou
            const myPersonas = yield prisma_1.default.persona.count({
                where: {
                    user_id: user_id
                }
            });
            //verificar se ele é premium , caso nao seja limitar a quantidade de pessoas
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    id: user_id
                },
                include: {
                    subscriptions: true
                }
            });
            //--- codigo para bloqueio caso o assinante nao seja premium
            // if (myPersonas >= 3 && user.subscriptions?.status!=="active"){
            //     throw new Error('Use premium para salvar seu dados online ')
            // }                   
            const persona = yield prisma_1.default.persona.create({
                data: {
                    name: name,
                    user_id: user_id,
                    upvalue: upvalue,
                    dowvalue: dowvalue,
                    cpf: cpf
                }
            });
            return persona;
        });
    }
}
exports.CreatePersonaService = CreatePersonaService;
