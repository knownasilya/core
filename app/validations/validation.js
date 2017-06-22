import joi from 'joi';

export default class Validation {
  static validate(item, alternateSchema) {
    let schema = this.schema;
    let validateOptions = {
      allowUnknown: true
    };
    let validation;

    if (alternateSchema) {
      validation = joi.validate(item, alternateSchema, validateOptions);
    } else {
      if (!schema) {
        throw new Error('Schema not defined on validation');
      }
      validation = joi.validate(item, schema, validateOptions);
    }

    return validation;
  }
}