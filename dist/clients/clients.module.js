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
const clients_service_1 = require("./application/services/clients.service");
const clientSchema_1 = require("./infra/schema/clientSchema");
const findClients_controller_1 = require("./infra/controllers/findClients.controller");
const findEmail_controller_1 = require("./infra/controllers/findEmail.controller");
const registerClient_controller_1 = require("./infra/controllers/registerClient.controller");
const clientsById_controller_1 = require("./infra/controllers/clientsById.controller");
const removeClient_controller_1 = require("./infra/controllers/removeClient.controller");
const createUseCase_1 = require("./application/useCases/createUseCase");
const clientMappers_1 = require("./infra/repositories/clientMappers");
const clientRepository_1 = require("./infra/repositories/clientRepository");
let ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule;
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: clientSchema_1.Client.name, schema: clientSchema_1.ClientSchema },
            ])
        ],
        controllers: [
            findClients_controller_1.findClientController,
            findEmail_controller_1.findEmailController,
            registerClient_controller_1.registerClientController,
            clientsById_controller_1.IdFindController,
            removeClient_controller_1.removeClientController
        ],
        providers: [
            clients_service_1.ClientService,
            createUseCase_1.CreateClientUseCase,
            clientRepository_1.ClientRepository,
            clientMappers_1.ClientMapper
        ],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map