import { AppError } from '../errors/app-error';

export class ValidationError extends AppError {
  public readonly details: Record<string, string>;

  constructor(details: Record<string, string>, context: string, legend?: string) {
    super(legend ?? 'Tivemos um erro ao validar os dados.', { code: `${context}.bad_request` });
    this.details = details;
  }
}
