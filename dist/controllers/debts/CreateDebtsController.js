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
exports.CreateDebtsController = void 0;
const CreateDebtsService_1 = require("../../services/debts/CreateDebtsService");
class CreateDebtsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, vdate, vcard, cvccard, value, description, persona_id, number, } = request.body;
                // Obter user_id do middleware de autenticação
                const user_id = request.user_id;
                if (!user_id) {
                    return response.status(401).json({ error: "Unauthorized" });
                }
                // Instanciar o serviço
                const createDebtsService = new CreateDebtsService_1.CreateDebtsService();
                // Executar o serviço
                const debt = yield createDebtsService.execute({
                    name,
                    value,
                    number,
                    description,
                    persona_id,
                    cvccard,
                    vcard,
                    vdate,
                    user_id,
                });
                // Retornar a dívida criada
                return response.status(201).json(debt);
            }
            catch (error) {
                // Retornar erro em caso de exceção
                return response
                    .status(400)
                    .json({ error: error.message || "Unexpected error occurred." });
            }
        });
    }
}
exports.CreateDebtsController = CreateDebtsController;
