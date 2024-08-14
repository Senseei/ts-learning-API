import { inject, singleton } from "tsyringe";
import { PersonController } from "../controllers/person-controller";
import { Router } from "express";

@singleton()
export class PersonRouter {
    private router: Router;

    constructor(
        @inject('PersonController') private controller: PersonController
    ) {
        this.router = Router();
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.get('/', this.controller.findAll.bind(this.controller));
        this.router.post('/', this.controller.save.bind(this.controller));
    }

    public getRouter(): Router {
        return this.router;
    }
}