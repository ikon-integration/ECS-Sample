import ECSDBUser from './ECSDBUser';
//
export default class ECSDatabase {
  constructor(core) {
    this.user = new ECSDBUser(core);
  }
}
