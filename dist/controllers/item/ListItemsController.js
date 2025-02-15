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
exports.ListItemsController = void 0;
const ListItemsService_1 = require("../../services/items/ListItemsService");
class ListItemsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { debt_id } = request.params;
            console.log("Recebendo requisição com debt_id:", debt_id);
            const listItems = new ListItemsService_1.ListItemsService();
            const items = yield listItems.execute({
                debt_id
            });
            // Se não houver itens com esse 'debt_id', retornamos um 404
            if (items.length === 0) {
                return response.status(404).json({ message: "Nenhum item encontrado para este debt_id." });
            }
            return response.json(items);
        });
    }
}
exports.ListItemsController = ListItemsController;
