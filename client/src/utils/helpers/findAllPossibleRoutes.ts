import { Route } from '../../interfaces/Route';

interface Graph {
  [key: string]: {
    [key: string]: number,
  },
}

type possibleRoute = {
  distance: number | string,
  path: string[],
}

const solarSystemGraph: Graph = {};

function generateGraph(routes: Route[]) {
  routes.forEach((route: Route) => {
    const distance = route.routeInfo.distance;
    const departure = route.routeInfo.from.name;
    const destination = route.routeInfo.to.name;

    const newRoute = {
      [destination]: distance,
    }

    solarSystemGraph[departure] = { ...solarSystemGraph[departure], ...newRoute };
  });
}

function lowestCostNode(
  costs: { [key: string]: string | number }, processed: string[]
) {
  return Object.keys(costs).reduce((lowest: string | null, node: string) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }

    return lowest;
  }, null);
};

// Function that returns the minimum cost and path to reach Finish
function dijkstra(graph: Graph, startNodeName: string, endNodeName: string): possibleRoute {
  // Track the lowest cost to reach each node
  let costs: { [key: string]: number | string } = {};
  costs[endNodeName] = "Infinity";
  costs = Object.assign(costs, graph[startNodeName]);

  // Track paths
  const parents: { [key: string]: string | null } = { endNodeName: null };
  for (const child in graph[startNodeName]) {
    parents[child] = startNodeName;
  }

  // Track nodes that have already been processed
  const processed: string[] = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    const cost = costs[node];
    const children = graph[node];

    for (const n in children) {
      if (String(n) !== String(startNodeName)) {
        const newCost = +cost + children[n];

        if (!costs[n] || costs[n] > newCost) {
          costs[n] = newCost;
          parents[n] = node;
        }
      }
    }

    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  const optimalPath = [endNodeName];
  let parent = parents[endNodeName];

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse();

  const results = {
    distance: costs[endNodeName],
    path: optimalPath
  };

  return results;
};

function calculatePossibleRoutes(
  departure: string, destination: string, routes: Route[]
): possibleRoute[] {
  generateGraph(routes);

  const results: possibleRoute[] = [];

  let stop = false;
  while (stop === false) {
    const routeToDestination = dijkstra(solarSystemGraph, departure, destination);

    if (routeToDestination.distance === 'Infinity') {
      stop = true;
      break;
    }

    results.push(routeToDestination);

    const { path } = routeToDestination;
    const lastDeparture = path[path.length - 2];
    const lastDestination = path[path.length - 1];

    // Keep removing the last route in Graph until there is none to destination
    delete solarSystemGraph[lastDeparture][lastDestination];
  }

  return results;
}

export { calculatePossibleRoutes };

