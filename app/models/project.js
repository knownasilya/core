import { attr /* , hasOne, hasMany */ } from 'denali';
import ApplicationModel from './application';

export default class Project extends ApplicationModel {

  static title = attr('text');

}