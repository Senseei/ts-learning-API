import { PersonService } from './../services/person-service';
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';

@injectable()
export class PersonController {
    constructor(@inject('PersonService') private service: PersonService) {}

    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const persons = await this.service.findAll();
            return res.json(persons);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'An error occurred' });
        }
    }

    public async save(req: Request, res: Response): Promise<Response> {
        try {
            const { name, age } = req.body;
            const person = await this.service.save(name, age);
            return res.status(201).json(person);
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred' });
        }
    }
}
