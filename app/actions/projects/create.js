import ApplicationAction from '../application';
import ProjectValidation from '../../validations/project';

export default class CreateProject extends ApplicationAction {

  async respond({ body }) {
    let validation = ProjectValidation.validate(body);
    
    if (validation.error) {
      return this.render(400, validation.error);
    }

    let post = await this.db.create('project', body).save();
    
    this.render(201, post);
  }

}
