import { UserRepository } from '@/domain/identity/user/repositories/user.repository';
import { User } from '@/domain/identity/user/user.entity';

export class InMemoryUserRepository implements UserRepository {
  private items: User[] = [];

  async save(user: User): Promise<void> {
    this.items.push(user);
  }

  async findById(id: string): Promise<User | null> {
    return this.items.find((u) => u.id.toString() === id) || null;
  }

  async findAll(): Promise<User[]> {
    return this.items;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.items.find((u) => u.email === email) || null;
  }
}
