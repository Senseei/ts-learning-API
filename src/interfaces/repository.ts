export interface Repository<T> {
    findAll(): T[];
    save(entity: T): void;
}