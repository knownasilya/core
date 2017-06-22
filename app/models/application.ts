import { Model } from 'denali';
import * as joi from 'joi';


export default class ApplicationModel extends Model {

  static abstract = true;

  validate(alternateSchema) {
    let record = this.record;
    let schema = this.constructor.validations;
    let validateOptions = {
      allowUnknown: true
    };

    if (alternateSchema) {
      return joi.validate(record, alternateSchema, validateOptions);
    }

    if (!schema) {
      throw new Error('Schema not defined on validation');
    }

    return joi.validate(record, schema, validateOptions);
  }

}
