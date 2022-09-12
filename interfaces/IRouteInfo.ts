import { IPlanet } from './IPlanet';

export interface IRouteInfo {
  index: number,
  routeId: string,
  from: IPlanet,
  to: IPlanet,
  distance: number,
};
