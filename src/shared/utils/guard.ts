import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';

export type Validator<T> = {
  validate: (value: T[keyof T]) => boolean;
  message: string;
};

export type Rule<T> = {
  required?: boolean;
  regex?: RegExp;
  validate?: (value: T[keyof T]) => boolean;
  message: string;
};

export type ValidationRules<T> = Partial<Record<keyof T, Rule<T>>>;

export function validate<T extends object>(
  props: T,
  rules: ValidationRules<T>,
  context: string,
  legend?: string,
): Either<ValidationError, T> {
  const errors: Record<string, string> = {};

  for (const field of Object.keys(rules) as (keyof T)[]) {
    const rule = rules[field]!;
    const value = props[field];

    if (rule.required && (value === null || value === undefined || value === '')) {
      errors[field as string] = rule.message;
      continue;
    }

    if (rule.regex && typeof value === 'string' && !rule.regex.test(value)) {
      errors[field as string] = rule.message;
      continue;
    }

    if (rule.validate && !rule.validate(value)) {
      errors[field as string] = rule.message;
    }
  }

  if (Object.keys(errors).length > 0) {
    return left(new ValidationError(errors, context, legend));
  }

  return right(props);
}
