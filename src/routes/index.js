import IKAPI from '@ikonintegration/ikapi'; //request
import ECS from '../core/ECS'; //core
//
export const get = async (transaction) => {
  //init authorization
  return await (new ECS.Core(transaction)).run(async (core) => {
    //Create some users
    // for (let index = 0; index < 25; index++) {
    //   const addResp = await core.db.user.addUser({
    //     firstName: 'John', lastName: 'Doe', email: 'john@doe.com'
    //   });  
    //   if (!addResp) return IKAPI.IKBadRequestResponse('Could not create user!', ECS.Globals.ErrorCode_IncorrectBehaviour);  
    // }
    //Fetch all user
    const resp = await core.db.user.findAllUsers();
    if (!resp) return IKAPI.IKBadRequestResponse('Users not found', ECS.Globals.ErrorCode_IncorrectBehaviour);
    //Succeed
    return new IKAPI.IKSuccessResponse({ users: resp });
  });
};
