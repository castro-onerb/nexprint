import { Business } from '@/domain/company/business/business.entity';
import { BusinessRepository } from '@/domain/company/business/repositories/business.repository';

export class InMemoryBusinessRepository implements BusinessRepository {
  items: Business[] = [];

  async create(business: Business): Promise<void> {
    this.items.push(business);
    return Promise.resolve();
  }

  findByCNPJ(cnpj: string): Promise<Business | null> {
    const business = this.items.find((item) => item.cnpj === cnpj);
    if (!business) {
      return Promise.resolve(null);
    }
    return Promise.resolve(business);
  }

  findById(id: string): Promise<Business | null> {
    const business = this.items.find((item) => item.id.toString() === id);
    if (!business) {
      return Promise.resolve(null);
    }
    return Promise.resolve(business);
  }

  findAll(): Promise<Business[]> {
    return Promise.resolve(this.items);
  }
}
