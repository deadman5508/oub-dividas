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
exports.DetailPersonaController = void 0;
const DetailPersonaService_1 = require("../../services/persona/DetailPersonaService");
class DetailPersonaController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona_id = request.query.persona_id;
            const detailPersona = new DetailPersonaService_1.DetailPersonaService();
            const persona = yield detailPersona.execute({
                persona_id,
            });
            return response.json(persona);
        });
    }
}
exports.DetailPersonaController = DetailPersonaController;
