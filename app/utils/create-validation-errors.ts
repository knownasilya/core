import { Errors as createError } from 'denali';
import { ValidationResult, ValidationError, ValidationErrorItem } from 'joi';

export default function createValidationErrors(validation: ValidationResult<any>): createError.HttpError[] {
  if (!validation) {
    return <createError.HttpError[]>[];
  }

  let error: ValidationError = validation.error;
  let errors = error.details.map((detail: ValidationErrorItem) => {
    let err = createError(422, detail.message, {
      source: {
        pointer: `/data/attributes/${detail.path}`
      }
    });

    return err;
  });

  return errors;
}