import ApplicationAction from '../application';

export default class UpdateProject extends ApplicationAction {

  async respond({ params, body }) {
    let post = await this.db.find('project', params.id);
    Object.assign(post, body);
    return await post.save();
  }

}
