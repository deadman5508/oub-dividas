import { Request, Response } from "express";
import { ListDebtsSumService } from "../../services/debts/ListDebtsSumService";

class ListDebtsSumController {
  async handle(request: Request, response: Response) {
      const debt_id = request.query.debt_id as string; // Pegando debt_id da query

      const listDebtsSumService = new ListDebtsSumService();
      const debt = await listDebtsSumService.execute({ 
        debt_id 
    });
      
      return response.json(debt); 
  }
}

export { ListDebtsSumController };
