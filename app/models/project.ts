import { attr /* , hasOne, hasMany */ } from 'denali';
import * as joi from 'joi';
import ApplicationModel from './application';
import Provider from './provider';

export default class Project extends ApplicationModel {

  static title = attr('text');
  static environments = attr('json');
  static provider = attr('json');

  static validations = joi.object().keys({
    id: joi.string(),
    title: joi.string().required(),
    environments: joi.array(),
    provider: Provider.validations.required()
  });

}
