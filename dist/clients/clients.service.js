"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientService = class ClientService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async checkEmail(email) {
        const emailExist = await this.clientModel.findOne({ email }).exec();
        if (emailExist) {
            return true;
        }
        else {
            return false;
        }
    }
    async clientRegister(createClientDto) {
        try {
            await new this.clientModel(createClientDto).save();
            return 'Client created successfully';
        }
        catch (error) {
            return 'Client registration failed';
        }
    }
    async clientList() {
        try {
            return await this.clientModel.find().exec();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async clientListEmail(email) {
        try {
            return await this.clientModel.find({ email }).exec();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async clientListId(id) {
        try {
            return this.clientModel.find({ _id: id }).exec();
        }
        catch (error) {
            return 'Error at finding client';
        }
    }
    async clientListDate(createdAt) {
        return this.clientModel.findOne({ createdAt }).exec();
    }
    ;
    async clientDelete(id) {
        try {
            return await this.clientModel.deleteOne({ _id: id }).exec();
        }
        catch (error) {
            return 'Error deleting the client';
        }
    }
    async clientSort() {
        try {
            return this.clientModel.find().sort({ createdAt: -1 }).exec();
        }
        catch (error) {
            return error;
        }
    }
    ;
    async clientReset() {
        try {
            return await this.clientModel.deleteMany({}).exec();
        }
        catch (error) {
            return 'Error deleting the clients';
        }
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Client')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientService);
//# sourceMappingURL=clients.service.js.map