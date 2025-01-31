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
exports.CreateItemsController = void 0;
const CreateItemsService_1 = require("../../services/items/CreateItemsService");
class CreateItemsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { debt_id, name, persona_id, value } = request.body;
            const createItemsController = new CreateItemsService_1.CreateItemsService();
            const Items = yield createItemsController.execute({
                debt_id,
                name,
                persona_id,
                value
            });
            return response.json(Items);
        });
    }
}
exports.CreateItemsController = CreateItemsController;
