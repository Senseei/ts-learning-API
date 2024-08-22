import { injectable, inject } from 'tsyringe';
import { Person } from '../models/person';
import { PersonRepository } from '../repositories/person-repository';
import { PersonDTO } from '../dtos/person/person-dto';

@injectable()
export class PersonService {
    constructor(@inject('PersonRepository') private repository: PersonRepository) {}

    public async save(name: string, age: number): Promise<PersonDTO> {
        const person = new Person(name, age);
        await this.repository.save(person);
        return new PersonDTO(person);
    }

    public async findAll(): Promise<PersonDTO[]> {
        const result = await this.repository.findAll();
        return result.map(person => new PersonDTO(person));
    }
}
