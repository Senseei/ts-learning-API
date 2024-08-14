// src/routes/index.ts
import "reflect-metadata";
import { Router } from "express";
import { container } from "tsyringe";
import { PersonRouter } from "./person-router";
import DIContainerConfig from "./di-container.config";

DIContainerConfig.registerOnContainer();
DIContainerConfig.registerSingletons();

const router = Router();

router.use("/persons", container.resolve(PersonRouter).getRouter());

export default router;
