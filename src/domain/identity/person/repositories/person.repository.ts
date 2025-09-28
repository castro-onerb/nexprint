import { Person } from '../person.entity';

export abstract class PersonRepository {
  abstract save(person: Person): Promise<void>;
  abstract findById(id: string): Promise<Person | null>;
  abstract findAll(): Promise<Person[]>;
}
