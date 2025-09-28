export type BusinessProps = {
  cnpj: string;
  doingBusinessAs: string;
  website?: string;
  email?: string;
  type: 'matriz' | 'filial';
  parentBusinessId?: string;
};
