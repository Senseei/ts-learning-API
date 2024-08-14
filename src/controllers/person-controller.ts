import { PersonService } from './../services/person-service';
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';

@injectable()
export class PersonController {

  constructor(
    @inject('PersonService') private service: PersonService
  ) {}

  public findAll(req: Request, res: Response): void {
    const persons = this.service.findAll();
    res.send(persons);
  }

  public save(req: Request, res: Response): void {
    const { name, age } = req.body;
    this.service.save(name, age);
    res.send('Person saved successfully');
  }

}