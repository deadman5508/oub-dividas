import { Request, Response, Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserConstroller";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreatPersonaController } from "./controllers/personas/CreatPersonaController";

import { isAutheticated } from "./midddlewares/isAuthenticated";
import { ListPersonaController } from "./controllers/personas/ListPersonaController";
import { UpdatePersonaController } from "./controllers/personas/UpdatePersonaController";
import { CheckSubsController } from "./controllers/personas/ChekSubsController";
import { CountPersonaController } from "./controllers/personas/CountPersonaConstroller";
import { DetailPersonaController } from "./controllers/personas/DetailPersonaController";
import { CreateDebtsController } from "./controllers/debts/CreateDebtsController";
import { DetailDebtController } from "./controllers/debts/DetailDebtController";
import { UpdateDebtController } from "./controllers/debts/UpdateDebtController";
import { ListDebtsController } from "./controllers/debts/ListDebtsController";
import { CreateItemsController } from "./controllers/item/CreateItemsController";
import { ListItemsController } from "./controllers/item/ListItemsController";
import { UpdateItemsController } from "./controllers/item/UpdateItemsController";
import { DeleteItemsController } from "./controllers/item/DeleteItemsController";
import { DeleteDebtsController } from "./controllers/debts/DeleteDebtsControler";
import { DeletePersonaController } from "./controllers/personas/DeletePersonaController";
import { ListDebtsSumController } from "./controllers/debts/ListDebtsSumController";
import { ListSumItemsController } from "./controllers/personas/ListSumItemsController";


const router = Router()

// router.get('/teste', (req:Request, res:Response)=>{
//     return res.json({ok:true})
// })

//----rotas User-----

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAutheticated, new DetailUserController().handle)
router.put('/users', isAutheticated, new UpdateUserController().handle)

//--rostas Pesoas---

router.post('/persona', isAutheticated, new CreatPersonaController().handle)
router.get('/personas',isAutheticated,new ListPersonaController().handle)
router.put('/persona',isAutheticated, new UpdatePersonaController().handle)
router.get('/persona/check', isAutheticated, new CheckSubsController().handle)
router.get('/persona/count',isAutheticated,new CountPersonaController().handle)
router.get('/persona/detail',isAutheticated, new DetailPersonaController().handle)
router.get('/persona/sum',isAutheticated, new ListSumItemsController().handle)
router.delete('/persona/delete/:persona_id',isAutheticated,new DeletePersonaController().handle)

//--rotas debitos

router.post('/debt',isAutheticated,new CreateDebtsController().handle)
router.get('/debt/detail',isAutheticated,new DetailDebtController().handle)
router.put('/debt',isAutheticated,new UpdateDebtController().handle)
router.get("/debts",isAutheticated,new ListDebtsController().handle)
router.get("/debts/sum",isAutheticated,new ListDebtsSumController().handle)
router.get("/debts/all",isAutheticated,new ListDebtsController().handle)
router.delete("/debt/delete/:debt_id",isAutheticated,new DeleteDebtsController().handle)

//--rotas de items
router.post('/item',isAutheticated,new CreateItemsController().handle)
router.get('/items',isAutheticated,new ListItemsController().handle)
router.put('/item',isAutheticated,new UpdateItemsController().handle)
router.delete('/item/delete/:item_id',isAutheticated,new DeleteItemsController().handle)



export {router}