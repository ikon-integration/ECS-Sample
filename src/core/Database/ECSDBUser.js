import ECSCoreGlobals from '../ECSCoreGlobals';
import ECSCoreUtils from '../ECSCoreUtils';
import IKAPI from '@ikonintegration/ikapi';
//
export default class ECSDBUsers {
  constructor(core) {
    this.core = core;
  }

  //CRUD
  async addUser(userObj) {
    const putQuery = new IKAPI.IKDBQueryPut();
    const userID = IKAPI.Utils.newUID();
    //keys
    putQuery.appendValue(userID, 'pk', `${ECSCoreGlobals.DatabaseUserIDPrefix}::`);
    putQuery.appendValue(ECSCoreGlobals.DatabaseV0Constant, 'sk');
    putQuery.appendObjectForKeyValue(userObj, 'email', 'gsi1pk');
    putQuery.appendValue(ECSCoreGlobals.DatabaseV0Constant, 'gsi1sk');
    putQuery.appendObjectForKeyValue(userObj, 'firstName', 'gsi2sk');
    putQuery.appendValue(ECSCoreGlobals.DatabaseUserIDPrefix, 'gsi3pk');
    putQuery.appendObjectForKeyValue(userObj, 'firstName', 'gsi3sk');
    //parameters
    putQuery.appendValue(userID, 'id');
    putQuery.appendObjectForKeyValue(userObj, 'email', 'email');
    putQuery.appendObjectForKeyValue(userObj, 'firstName', 'firstName');
    putQuery.appendObjectForKeyValue(userObj, 'lastName', 'lastName');
    putQuery.appendValue(true, 'isEnabled');
    //run query
    return await this.core.transaction.db.runQuery(putQuery);
  }
  async findAllUsers() { //find users ID and first names only
    const findQuery = new IKAPI.IKDBQueryGet('gsi3');
    findQuery.keyConditional.appendOperator('gsi3pk', ECSCoreGlobals.DatabaseUserIDPrefix, IKAPI.IKDBExpressionOperator.EQUAL);
    return (await this.core.transaction.db.runQuery(findQuery)).map(this._parseUser);
  }

  /*private methods*/
  _parseUser(userObj) {
    return {
      id: ECSCoreUtils.cleanDBPrefix(userObj.id),
      firstName: userObj.firstName,     lastName: userObj.lastName,
      email: userObj.email,             isEnabled: userObj.isEnabled,
    };
  }
}
