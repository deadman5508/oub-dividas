import { Request, Response } from "express";
import { CreateDebtsService } from "../../services/debts/CreateDebtsService";

class CreateDebtsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        vdate,
        vcard,
        cvccard,
        value,
        description,
        persona_id,
        number,
      } = request.body;

      // Obter user_id do middleware de autenticação
      const user_id = request.user_id;
      if (!user_id) {
        return response.status(401).json({ error: "Unauthorized" });
      }

      // Instanciar o serviço
      const createDebtsService = new CreateDebtsService();

      // Executar o serviço
      const debt = await createDebtsService.execute({
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
    } catch (error) {
      // Retornar erro em caso de exceção
      return response
        .status(400)
        .json({ error: error.message || "Unexpected error occurred." });
    }
  }
}

export { CreateDebtsController };
