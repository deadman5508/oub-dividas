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
exports.DeleteItemsController = void 0;
const DeleteItemsService_1 = require("../../services/items/DeleteItemsService");
class DeleteItemsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { item_id } = request.params;
            const deleteItemController = new DeleteItemsService_1.DeleteItemsService();
            const item = yield deleteItemController.execute({
                item_id
            });
            return response.json({ message: `item deletado com sucesso` });
        });
    }
}
exports.DeleteItemsController = DeleteItemsController;
