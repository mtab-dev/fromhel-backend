"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const clients_service_1 = require("./domain/services/clients.service");
const client_entity_1 = require("./domain/schema/client.entity");
const findClients_controller_1 = require("./application/controllers/findClients.controller");
const findEmail_controller_1 = require("./application/controllers/findEmail.controller");
const registerClient_controller_1 = require("./application/controllers/registerClient.controller");
const clientsById_controller_1 = require("./application/controllers/clientsById.controller");
const removeClient_controller_1 = require("./application/controllers/removeClient.controller");
let ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule;
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: client_entity_1.Client.name, schema: client_entity_1.ClientSchema },
            ]),
        ],
        controllers: [
            findClients_controller_1.findClientController,
            findEmail_controller_1.findEmailController,
            registerClient_controller_1.registerClientController,
            clientsById_controller_1.IdFindController,
            removeClient_controller_1.removeClientController
        ],
        providers: [clients_service_1.ClientService],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map