import { Person } from '../models/person';
import { PersonRepository } from '../repositories/person-repository';

export class PersonService {
    private personRepository: PersonRepository;
    
    constructor(personRepository: PersonRepository) {
        this.personRepository = personRepository;
    }
    
    public save(name: string, age: number): void {
        const person = new Person(name, age);
        this.personRepository.save(person);
    }
    
    public findAll(): Person[] {
        return this.personRepository.findAll();
    }
}