import joi from 'joi';
import Validation from './validation';

export default class ProviderValidation extends Validation {
  static schema = joi.object().keys({
    type: joi.string().only([
      'github',
      'bitbucket',
      'gitlab'
    ])
  });
}
