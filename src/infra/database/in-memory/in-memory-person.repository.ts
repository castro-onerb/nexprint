import { Person } from '@/domain/identity/person/person.entity';
import { PersonRepository } from '@/domain/identity/person/repositories/person.repository';

export class InMemoryPersonRepository implements PersonRepository {
  private items: Person[] = [];

  async save(person: Person): Promise<void> {
    this.items.push(person);
  }

  async findById(id: string): Promise<Person | null> {
    return this.items.find((p) => p.id.toString() === id) || null;
  }

  async findAll(): Promise<Person[]> {
    return this.items;
  }
}
