import ECSDatabase from './Database/ECSDatabase';
//
export default class ECSCore {
  constructor(_transaction) {
    this.transaction = _transaction;
    this.db = new ECSDatabase(this);
  }
  async run(request) {
    //execute!
    return await request(this);
  }
}
