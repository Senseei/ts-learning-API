import { Person } from './../../models/person';
export class PersonDTO {
    private id: number;
    private name: string;
    private age: number;

    constructor(model: Person) {
        this.id = model.getId()!;
        this.name = model.getName();
        this.age = model.getAge();
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}