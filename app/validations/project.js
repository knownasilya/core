import joi from 'joi';
import Validation from './validation';
import providerSchema from './provider';

export default class ProviderValidation extends Validation {
  static schema = joi.object().keys({
    id: joi.string(),
    title: joi.string().required(),
    environments: joi.array(),
    provider: providerSchema.schema.required()
  })
}
