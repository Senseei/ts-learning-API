// src/di-container.ts
import "reflect-metadata";
import { container } from "tsyringe";
import { PersonRepository } from "../repositories/person-repository";
import { PersonService } from "../services/person-service";
import { PersonController } from "../controllers/person-controller";
import { PersonRouter } from "./person-router";


export default class DIContainerConfig {
    
    public static registerOnContainer(): void {
        // Registering classes in the DI container
        container.register('PersonRepository', PersonRepository);
        container.register('PersonService', PersonService);
        container.register('PersonController', PersonController);
    }

    public static registerSingletons(): void {
        container.registerSingleton('PersonRouter', PersonRouter);
    }
}
