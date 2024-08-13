import { Person } from '../models/person';

export class PersonRepository {
    private persons: Person[] = [];

    public save(person: Person): void {
        this.persons.push(person);
    }

    public findAll(): Person[] {
        return this.persons;
    }
}