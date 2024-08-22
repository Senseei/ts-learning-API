// src/routes/index.ts
import "reflect-metadata";
import { Router } from "express";
import { container } from "tsyringe";
import { PersonRouter } from "./person-router";
import DIContainerConfig from "./di-container.config";

export class IndexRouter {
    public static registerRouters(): Router {
        DIContainerConfig.registerOnContainer();
        DIContainerConfig.registerSingletons();

        const router = Router();

        router.use("/persons", container.resolve(PersonRouter).getRouter());

        return router;
    }
}
