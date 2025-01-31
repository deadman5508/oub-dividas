"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserConstroller_1 = require("./controllers/user/CreateUserConstroller");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const UpdateUserController_1 = require("./controllers/user/UpdateUserController");
const CreatPersonaController_1 = require("./controllers/personas/CreatPersonaController");
const isAuthenticated_1 = require("./midddlewares/isAuthenticated");
const ListPersonaController_1 = require("./controllers/personas/ListPersonaController");
const UpdatePersonaController_1 = require("./controllers/personas/UpdatePersonaController");
const ChekSubsController_1 = require("./controllers/personas/ChekSubsController");
const CountPersonaConstroller_1 = require("./controllers/personas/CountPersonaConstroller");
const DetailPersonaController_1 = require("./controllers/personas/DetailPersonaController");
const CreateDebtsController_1 = require("./controllers/debts/CreateDebtsController");
const DetailDebtController_1 = require("./controllers/debts/DetailDebtController");
const UpdateDebtController_1 = require("./controllers/debts/UpdateDebtController");
const ListDebtsController_1 = require("./controllers/debts/ListDebtsController");
const CreateItemsController_1 = require("./controllers/item/CreateItemsController");
const ListItemsController_1 = require("./controllers/item/ListItemsController");
const UpdateItemsController_1 = require("./controllers/item/UpdateItemsController");
const DeleteItemsController_1 = require("./controllers/item/DeleteItemsController");
const DeleteDebtsControler_1 = require("./controllers/debts/DeleteDebtsControler");
const DeletePersonaController_1 = require("./controllers/personas/DeletePersonaController");
const router = (0, express_1.Router)();
exports.router = router;
// router.get('/teste', (req:Request, res:Response)=>{
//     return res.json({ok:true})
// })
//----rotas User-----
router.post('/users', new CreateUserConstroller_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAutheticated, new DetailUserController_1.DetailUserController().handle);
router.put('/users', isAuthenticated_1.isAutheticated, new UpdateUserController_1.UpdateUserController().handle);
//--rostas Pesoas---
router.post('/persona', isAuthenticated_1.isAutheticated, new CreatPersonaController_1.CreatPersonaController().handle);
router.get('/personas', isAuthenticated_1.isAutheticated, new ListPersonaController_1.ListPersonaController().handle);
router.put('/persona', isAuthenticated_1.isAutheticated, new UpdatePersonaController_1.UpdatePersonaController().handle);
router.get('/persona/check', isAuthenticated_1.isAutheticated, new ChekSubsController_1.CheckSubsController().handle);
router.get('/persona/count', isAuthenticated_1.isAutheticated, new CountPersonaConstroller_1.CountPersonaController().handle);
router.get('/persona/detail', isAuthenticated_1.isAutheticated, new DetailPersonaController_1.DetailPersonaController().handle);
router.delete('/persona/delete/:persona_id', isAuthenticated_1.isAutheticated, new DeletePersonaController_1.DeletePersonaController().handle);
//--rotas debitos
router.post('/debt', isAuthenticated_1.isAutheticated, new CreateDebtsController_1.CreateDebtsController().handle);
router.get('/debt/detail', isAuthenticated_1.isAutheticated, new DetailDebtController_1.DetailDebtController().handle);
router.put('/debt', isAuthenticated_1.isAutheticated, new UpdateDebtController_1.UpdateDebtController().handle);
router.get("/debts", isAuthenticated_1.isAutheticated, new ListDebtsController_1.ListDebtsController().handle);
router.get("/debts/all", isAuthenticated_1.isAutheticated, new ListDebtsController_1.ListDebtsController().handle);
router.delete("/debt/delete/:debt_id", isAuthenticated_1.isAutheticated, new DeleteDebtsControler_1.DeleteDebtsController().handle);
//--rotas de items
router.post('/item', isAuthenticated_1.isAutheticated, new CreateItemsController_1.CreateItemsController().handle);
router.get('/items', isAuthenticated_1.isAutheticated, new ListItemsController_1.ListItemsController().handle);
router.put('/item', isAuthenticated_1.isAutheticated, new UpdateItemsController_1.UpdateItemsController().handle);
router.delete('/item/delete/:item_id', isAuthenticated_1.isAutheticated, new DeleteItemsController_1.DeleteItemsController().handle);
