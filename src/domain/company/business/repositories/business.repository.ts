import { Business } from '@/domain/company/business/business.entity';

export abstract class BusinessRepository {
  abstract create(data: Business): Promise<void>;
  abstract findByCNPJ(cnpj: string): Promise<Business | null>;
  abstract findById(id: string): Promise<Business | null>;
  abstract findAll(): Promise<Business[]>;
}
