import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    private id!: number;

    @Column()
    private name: string;

    @Column()
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}