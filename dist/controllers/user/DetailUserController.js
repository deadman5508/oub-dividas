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
exports.DetailUserController = void 0;
const DetailUserService_1 = require("../../services/user/DetailUserService");
class DetailUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = request.user_id;
            // console.log(user_id)
            const userdetailService = new DetailUserService_1.DetailUserService();
            const detailUser = yield userdetailService.execute(user_id);
            return response.json(detailUser);
        });
    }
}
exports.DetailUserController = DetailUserController;
