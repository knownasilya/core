import ApplicationAction from './application';

export default class IndexAction extends ApplicationAction {

  async respond() {
    let models = await this.db.all('test');
    models.forEach(model => console.log(model.inspect()));
    return models;
  }

}
