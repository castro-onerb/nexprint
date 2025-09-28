import { AppError } from '@/core/errors/app-error';

export class CNPJRequired extends AppError {
  constructor() {
    super('O CNPJ é obrigatório.', { code: 'business_domain.cnpj_required' });
  }
}

export class DoingBusinessAsRequired extends AppError {
  constructor() {
    super('O nome fantasia é necessário.', { code: 'business_domain.doing_business_as_required' });
  }
}
