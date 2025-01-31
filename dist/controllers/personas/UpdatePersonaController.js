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
exports.UpdatePersonaController = void 0;
const UpdatePersonaService_1 = require("../../services/persona/UpdatePersonaService");
class UpdatePersonaController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = request.user_id;
            const { name, status, persona_id, cpf, dowvalue, upvalue } = request.body;
            const updatePersona = new UpdatePersonaService_1.UpdatePersonaService();
            const persona = yield updatePersona.execute({
                user_id,
                cpf,
                dowvalue,
                name,
                persona_id,
                status,
                upvalue
            });
            return response.json(persona);
        });
    }
}
exports.UpdatePersonaController = UpdatePersonaController;
