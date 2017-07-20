import { ResponderParams } from 'denali';
import ApplicationAction from '../application';
import createValidationErrors from '../../utils/create-validation-errors';

export default class CreateProject extends ApplicationAction {

  async respond(params: ResponderParams) {
    let post = this.db.create('project', params.body);
    let validation = post.validate();

    if (validation.hasErrors) {
      return this.render(422, validation.errors);
    }

    await post.save();

    this.render(201, post);
  }

}