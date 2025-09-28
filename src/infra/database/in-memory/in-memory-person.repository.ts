import { Person } from '@/domain/identity/person/person.entity';
import { PersonRepository } from '@/domain/identity/person/repositories/person.repository';

export class InMemoryPersonRepository implements PersonRepository {
  private persons: Person[] = [];

  async save(person: Person): Promise<void> {
    this.persons.push(person);
    console.log('in-memory-save', person);
    console.log('in-memory-local', this.persons);
  }

  async findById(id: string): Promise<Person | null> {
    console.log('in-memory-find-by', this.persons);
    return this.persons.find((p) => p.id.toString() === id) || null;
  }

  async findAll(): Promise<Person[]> {
    return this.persons;
  }
}
