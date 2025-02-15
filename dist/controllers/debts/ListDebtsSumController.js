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
exports.ListDebtsSumController = void 0;
const ListDebtsSumService_1 = require("../../services/debts/ListDebtsSumService");
class ListDebtsSumController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const debt_id = request.query.debt_id; // Pegando debt_id da query
            const listDebtsSumService = new ListDebtsSumService_1.ListDebtsSumService();
            const debt = yield listDebtsSumService.execute({
                debt_id
            });
            return response.json(debt);
        });
    }
}
exports.ListDebtsSumController = ListDebtsSumController;
