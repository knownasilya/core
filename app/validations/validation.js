import joi from 'joi';

export default class Validation {
  static validate(item, alternateSchema) {
    let schema = this.schema;
    let validateOptions = {
      allowUnknown: true
    };

    if (alternateSchema) {
      return joi.validate(item, alternateSchema, validateOptions);
    }

    if (!schema) {
      throw new Error('Schema not defined on validation');
    }

    return joi.validate(item, schema, validateOptions);
  }
}