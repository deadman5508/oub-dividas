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
exports.DeletePersonaController = void 0;
const DeletePersonaService_1 = require("../../services/persona/DeletePersonaService");
class DeletePersonaController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { persona_id } = request.params;
                // Valida se o parâmetro foi fornecido
                if (!persona_id) {
                    return response.status(400).json({ error: "O parâmetro 'debt_id' é obrigatório." });
                }
                // Instancia o serviço e executa
                const deletePersonaService = new DeletePersonaService_1.DeletePersonaService();
                yield deletePersonaService.execute({
                    persona_id
                });
                // Retorna resposta de sucesso
                return response.status(200).json({ message: "Dívida deletada com sucesso!" });
            }
            catch (error) {
                // Tratamento de erros
                if (error.message === "Dívida não encontrada.") {
                    return response.status(404).json({ error: "Dívida não encontrada." });
                }
                if (error.message === "A pessoa/empresa nao pode ser excluida pois esta associada a debitos.") {
                    return response.status(400).json({ error: "A pessoa/empresa nao pode ser excluida pois esta associada a debitos." });
                }
                // Erros genéricos
                console.error(error);
                return response.status(500).json({ error: "Erro interno no servidor." });
            }
        });
    }
}
exports.DeletePersonaController = DeletePersonaController;
