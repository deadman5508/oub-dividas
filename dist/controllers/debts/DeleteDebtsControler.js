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
exports.DeleteDebtsController = void 0;
const DeleteDebtsService_1 = require("../../services/debts/DeleteDebtsService");
class DeleteDebtsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { debt_id } = request.params;
                // Valida se o parâmetro foi fornecido
                if (!debt_id) {
                    return response.status(400).json({ error: "O parâmetro 'debt_id' é obrigatório." });
                }
                // Instancia o serviço e executa
                const deleteDebtsService = new DeleteDebtsService_1.DeleteDebtsService();
                yield deleteDebtsService.execute({
                    debt_id
                });
                // Retorna resposta de sucesso
                return response.status(200).json({ message: "Dívida deletada com sucesso!" });
            }
            catch (error) {
                // Tratamento de erros
                if (error.message === "Dívida não encontrada.") {
                    return response.status(404).json({ error: "Dívida não encontrada." });
                }
                if (error.message === "A dívida não pode ser excluída porque está associada a itens.") {
                    return response.status(400).json({ error: "A dívida está associada a itens e não pode ser excluída." });
                }
                // Erros genéricos
                console.error(error);
                return response.status(500).json({ error: "Erro interno no servidor." });
            }
        });
    }
}
exports.DeleteDebtsController = DeleteDebtsController;
