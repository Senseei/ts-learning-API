import { injectable, inject } from 'tsyringe';
import { Person } from '../models/person';
import { Repository } from '../interfaces/repository';

@injectable()
export class PersonService {
    
    constructor(
        @inject('PersonRepository') private repository: Repository<Person>
    ) {}
    
    public save(name: string, age: number): void {
        const person = new Person(name, age);
        this.repository.save(person);
    }
    
    public findAll(): Person[] {
        return this.repository.findAll();
    }
}