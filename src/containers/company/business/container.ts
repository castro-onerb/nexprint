import { InMemoryBusinessRepository } from '@/infra/database/in-memory/in-memory-business.repository';
import { CreateBusinessService } from '@/services/company/business/create-business';

const businessRepo = new InMemoryBusinessRepository();

export const businessContainer = {
  businessRepo,
  createBusinessService: new CreateBusinessService(businessRepo),
};
