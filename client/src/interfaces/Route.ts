import { Provider } from './Provider';
import { RouteInfo } from './Routeinfo';

export interface Route {
  id: string,
  routeInfo: RouteInfo,
  providers: Provider[],
};
