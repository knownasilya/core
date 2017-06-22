import ApplicationAction from '../application';

export default class ListProjects extends ApplicationAction {

  async respond() {
    return await this.db.all('project');
  }

}
