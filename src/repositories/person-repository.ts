import { injectable } from 'tsyringe';
import { Person } from '../models/person';
import { Repository } from 'typeorm';
import AppDataSource from '../data-source';

@injectable()
export class PersonRepository {
    private repository: Repository<Person>;

    constructor() {
        this.repository = AppDataSource.getInstance().getRepository(Person);
    }

    public async save(person: Person): Promise<void> {
        await this.repository.save(person);
    }

    public async findAll(): Promise<Person[]> {
        return await this.repository.find();
    }
}