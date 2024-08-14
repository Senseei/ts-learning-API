import { Person } from '../models/person';
import { Repository } from '../interfaces/repository';
import { injectable } from 'tsyringe';


@injectable()
export class PersonRepository implements Repository<Person> {
    private persons: Person[] = [];

    public save(person: Person): void {
        (person as any).id = this.persons.length + 1;
        this.persons.push(person);
    }

    public findAll(): Person[] {
        return this.persons;
    }
}