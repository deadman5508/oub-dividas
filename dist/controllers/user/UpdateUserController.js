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
exports.UpdateUserController = void 0;
const UpdateUseService_1 = require("../../services/user/UpdateUseService");
class UpdateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = request.body;
                const user_id = request.user_id;
                // Validação básica para o campo "name"
                if (!name || typeof name !== "string" || name.trim() === "") {
                    return response.status(400).json({ error: "Nome inválido ou não fornecido" });
                }
                const updateUser = new UpdateUseService_1.UpdateUserService();
                const user = yield updateUser.execute({
                    user_id,
                    name
                });
                return response.json(user);
            }
            catch (err) {
                console.error("Erro ao atualizar Usuario:", err.message);
                return response.status(500).json({ error: err.message || "Erro interno do servidor" });
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
