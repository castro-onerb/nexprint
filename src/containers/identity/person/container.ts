import { InMemoryPersonRepository } from '@/infra/database/in-memory/in-memory-person.repository';
import { CreatePersonService } from '@/services/identity/person/create-person';

const personRepo = new InMemoryPersonRepository();

export const personContainer = {
  personRepo,
  createPersonService: new CreatePersonService(personRepo),
};
