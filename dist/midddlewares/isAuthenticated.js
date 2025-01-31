"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutheticated = isAutheticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAutheticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        request.user_id = sub;
        // console.log(sub)
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
