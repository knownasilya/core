import ApplicationAction from '../application';

export default class ShowProject extends ApplicationAction {

  async respond({ params }) {
    return this.db.find('project', params.id);
  }

}
