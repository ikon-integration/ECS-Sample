import IKAPI from '@ikonintegration/ikapi'; //request
import ECS from './core/ECS';

const routes = [
  {route: '/test', method: 'GET', handler: require('./routes/index').get},
];

//Main handler
export const handler = async (event, context) => {
  (await (new IKAPI.IKRouter(routes, ECS.Globals.API_Config)).handleEvent(event, context));
}
