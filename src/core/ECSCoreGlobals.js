//
export default class ECSCoreGlobals {}
//
ECSCoreGlobals.SystemStage = process.env.STAGE;
ECSCoreGlobals.DatabaseTableName = process.env.TABLE_NAME;
ECSCoreGlobals.DatabaseRegion = process.env.DATABASE_REGION;
ECSCoreGlobals.API_Config = {
  database: {
    region: ECSCoreGlobals.DatabaseRegion,
    tableName: ECSCoreGlobals.DatabaseTableName
  },
};
ECSCoreGlobals.ErrorCode_NotFound = 'NOT_FOUND';
ECSCoreGlobals.ErrorCode_IncorrectBehaviour = 'INCORRECT_BEHAVIOUR';
ECSCoreGlobals.ErrorCode_OpNotAllowed = 'OP_NOT_ALLOWED';
ECSCoreGlobals.DatabaseUserIDPrefix =     'ID';
ECSCoreGlobals.DatabaseUserObjectClassConstant = 'user';
ECSCoreGlobals.DatabaseV0Constant =  'v0';