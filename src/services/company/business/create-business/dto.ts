export type CreateBusinessDTO = {
  cnpj: string;
  doing_business_as: string;
  website?: string;
  email?: string;
  type?: 'matriz' | 'filial';
};
