import { attr /* , hasOne, hasMany */ } from 'denali';
import joi from 'joi';
import ApplicationModel from './application';

export default class ProviderModel extends ApplicationModel {

  static providerType = attr('text');

  static validations = joi.object().keys({
    providerType: joi.string().only([
      'github',
      'bitbucket',
      'gitlab'
    ])
  });
}
