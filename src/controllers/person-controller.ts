import { PersonService } from './../services/person-service';
import { Request, Response, Router } from 'express';

export class PersonController {
  private personService: PersonService;
  private Router: Router;

  constructor() {
    this.personService = new PersonService();
    this.Router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.Router.get('/', this.findAll.bind(this));
    this.Router.post('/', this.save.bind(this));
  }

  public getRouter(): Router {
    return this.Router;
  }

  public findAll(req: Request, res: Response): void {
    const persons = this.personService.findAll();
    res.send(persons);
  }

  public save(req: Request, res: Response): void {
    const { name, age } = req.body;
    this.personService.save(name, age);
    res.send('Person saved successfully');
  }

}