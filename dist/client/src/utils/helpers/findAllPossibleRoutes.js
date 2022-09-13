"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePossibleRoutes = void 0;
;
const solarSystemGraph = {};
function generateGraph(routes) {
    routes.forEach((route) => {
        const distance = route.routeInfo.distance;
        const departure = route.routeInfo.from.name;
        const destination = route.routeInfo.to.name;
        const newRoute = {
            [destination]: distance,
        };
        solarSystemGraph[departure] = Object.assign(Object.assign({}, solarSystemGraph[departure]), newRoute);
    });
}
function lowestCostNode(costs, processed) {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
}
// Function that returns the minimum cost and path to reach Finish
function dijkstra(graph, startNodeName, endNodeName) {
    // Track the lowest cost to reach each node
    let costs = {};
    costs[endNodeName] = "Infinity";
    costs = Object.assign(costs, graph[startNodeName]);
    // Track paths
    const parents = { endNodeName: null };
    for (const child in graph[startNodeName]) {
        parents[child] = startNodeName;
    }
    // Track nodes that have already been processed
    const processed = [];
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
}
function calculatePossibleRoutes(departure, destination, routes) {
    generateGraph(routes);
    const results = [];
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
exports.calculatePossibleRoutes = calculatePossibleRoutes;
