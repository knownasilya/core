import ApplicationSerializer from './application';

export default class ProjectSerializer extends ApplicationSerializer {

  attributes = [
    'id',
    'title'
  ];

  relationships = {};

}
