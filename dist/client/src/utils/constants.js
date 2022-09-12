"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesSortOptions = exports.planets = void 0;
exports.planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
];
exports.routesSortOptions = [
    { value: '', label: '' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'price', label: 'Price: High to Low' },
    { value: 'distance', label: 'Distance: Shortest' },
    { value: 'distance', label: 'Distance: Longest' },
    { value: 'duration', label: 'Duration: Fastest' },
    { value: 'duration', label: 'Duration: Slowest' },
];
