import ApplicationAction from '../application';

export default class DestroyProject extends ApplicationAction {

  async respond({ params }) {
    let post = await this.db.find('project', params.id);
    await post.destroy();
    this.render(204);
  }

}
