import ApplicationAction from '../application';

export default class CreateProject extends ApplicationAction {

  async respond({ body }) {
    let post = await this.db.create('project', body).save();
    this.render(201, post);
  }

}
