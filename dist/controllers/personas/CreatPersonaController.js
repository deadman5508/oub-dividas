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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatPersonaController = void 0;
const CreatePersonaService_1 = require("../../services/persona/CreatePersonaService");
class CreatPersonaController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, upvalue, dowvalue, cpf } = request.body;
            const user_id = request.user_id;
            const createPersonaSerice = new CreatePersonaService_1.CreatePersonaService();
            const persona = yield createPersonaSerice.execute({
                user_id,
                name,
                upvalue,
                dowvalue,
                cpf,
            });
            return response.json(persona);
        });
    }
}
exports.CreatPersonaController = CreatPersonaController;
