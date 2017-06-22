import ApplicationAction from '../application';

export default class CreateProject extends ApplicationAction {

  async respond({ body }) {
    let post = this.db.create('project', body);
    let validation = post.validate();
    
    if (validation.error) {
      return this.render(400, validation.error);
    }

    await post.save();

    this.render(201, post);
  }

}
