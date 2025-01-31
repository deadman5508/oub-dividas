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
exports.UpdateDebtController = void 0;
const UpdateDebtService_1 = require("../../services/debts/UpdateDebtService");
class UpdateDebtController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = request.user_id;
            const { name, vdate, vcard, cvccard, value, description, persona_id, number, status, debt_id } = request.body;
            const updateDebt = new UpdateDebtService_1.UpdateDebtService();
            const debt = yield updateDebt.execute({
                user_id,
                name,
                value,
                number,
                description,
                persona_id,
                cvccard,
                vcard,
                vdate,
                debt_id,
                status
            });
            return response.json(debt);
        });
    }
}
exports.UpdateDebtController = UpdateDebtController;
