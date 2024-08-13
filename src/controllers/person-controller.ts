import { PersonService } from './../services/person-service';
import { Request, Response, Router } from 'express';

export class PersonController {
  private personService: PersonService;
  private router: Router;

  constructor() {
    this.personService = new PersonService();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.findAll.bind(this));
    this.router.post('/', this.save.bind(this));
  }

  public getRouter(): Router {
    return this.router;
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