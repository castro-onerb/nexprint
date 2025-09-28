import { Person } from '@/domain/identity/person/person.entity';
import { PersonRepository } from '@/domain/identity/person/repositories/person.repository';

export class InMemoryPersonRepository implements PersonRepository {
  private persons: Person[] = [];

  async save(person: Person): Promise<void> {
    this.persons.push(person);
  }

  async findById(id: string): Promise<Person | null> {
    return this.persons.find((p) => p.id.toString() === id) || null;
  }

  async findAll(): Promise<Person[]> {
    return this.persons;
  }
}
