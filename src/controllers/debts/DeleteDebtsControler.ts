import { Request, Response } from "express";
import { DeleteDebtsService } from "../../services/debts/DeleteDebtsService";

class DeleteDebtsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { debt_id } = request.params;

      // Valida se o parâmetro foi fornecido
      if (!debt_id) {
        return response.status(400).json({ error: "O parâmetro 'debt_id' é obrigatório." });
      }

      // Instancia o serviço e executa
      const deleteDebtsService = new DeleteDebtsService();
      await deleteDebtsService.execute({
         debt_id 
        });

      // Retorna resposta de sucesso
      return response.status(200).json({ message: "Dívida deletada com sucesso!" });
    } catch (error: any) {
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
  }
}

export { DeleteDebtsController };
