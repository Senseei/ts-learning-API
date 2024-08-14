import { injectable, inject } from 'tsyringe';
import { Person } from '../models/person';
import { Repository } from '../interfaces/repository';
import { PersonDTO } from '../dtos/person/person-dto';

@injectable()
export class PersonService {
    
    constructor(
        @inject('PersonRepository') private repository: Repository<Person>
    ) {}
    
    public save(name: string, age: number): PersonDTO {
        const person = new Person(name, age);
        this.repository.save(person);
        return new PersonDTO(person);
    }
    
    public findAll(): PersonDTO[] {
        const result = this.repository.findAll();
        return result.map(person => new PersonDTO(person));
    }
}