import { Model, Errors } from 'denali';
import { validate, Schema, ValidationResult } from 'joi';
import createValidationErrors from '../utils/create-validation-errors';

export interface CoreValidationResult {
  hasErrors: boolean;
  errors: Errors.HttpError[];
}

export default class ApplicationModel extends Model {

  static abstract = true;

  validate(alternateSchema: Schema): Error | CoreValidationResult {
    let record = this.record;
    let schema: Schema = this.constructor.validations;
    let validateOptions = {
      allowUnknown: true
    };

    if (alternateSchema) {
      let validation = validate(record, alternateSchema, validateOptions);
      let hasErrors = !!validation.error;

      return <CoreValidationResult>{
        hasErrors,
        errors: hasErrors ? createValidationErrors(validation) : []
      };
    }

    if (!schema) {
      throw new Error('Schema not defined on validation');
    }

    let validation = validate(record, schema, validateOptions);
    let hasErrors = !!validation.error;

    return <CoreValidationResult>{
      hasErrors,
      errors: hasErrors ? createValidationErrors(validation) : []
    };
  }

}
