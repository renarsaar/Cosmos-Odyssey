"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const react_1 = require("react");
const useRedux_1 = require("../../hooks/useRedux");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const filterSlice_1 = require("../../state/filter/filterSlice");
const ProviderItem_1 = __importDefault(require("../ProviderItem"));
require("./style.scss");
function index({ index, fullPath, departure, destination }) {
    const routes = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectRoutes);
    const filter = (0, useRedux_1.useAppSelector)(filterSlice_1.selectFilter);
    const sortingValues = (0, useRedux_1.useAppSelector)(filterSlice_1.selectSort);
    const currentRoute = routes === null || routes === void 0 ? void 0 : routes.find((route) => {
        const { from, to } = route.routeInfo;
        return from.name === departure && to.name === destination;
    });
    const providers = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.providers;
    const filteredAndSortedProviders = (0, react_1.useMemo)(() => {
        const filteredProviders = filterProviders(providers);
        const sortedProviders = sortProviders(filteredProviders);
        return sortedProviders;
    }, [filter, sortingValues]);
    function filterProviders(providers) {
        var _a;
        if (filter !== '') {
            return (_a = providers === null || providers === void 0 ? void 0 : providers.filter((route) => route.company.name === filter)) !== null && _a !== void 0 ? _a : [];
        }
        return providers !== null && providers !== void 0 ? providers : [];
    }
    function sortProviders(filteredProviders) {
        const providersForSort = [...filteredProviders !== null && filteredProviders !== void 0 ? filteredProviders : []];
        for (const value in sortingValues) {
            switch (sortingValues[value]) {
                case 'Price: Low to High':
                    providersForSort === null || providersForSort === void 0 ? void 0 : providersForSort.sort((a, b) => a.price > b.price ? 1 : -1);
                    break;
                case 'Price: High to Low':
                    providersForSort === null || providersForSort === void 0 ? void 0 : providersForSort.sort((a, b) => a.price < b.price ? 1 : -1);
                    break;
                // Duration based on total minutes the flight takes
                case 'Duration: Fastest':
                    providersForSort === null || providersForSort === void 0 ? void 0 : providersForSort.sort((a, b) => {
                        const aStart = (0, moment_1.default)(a.flightStart);
                        const aEnd = (0, moment_1.default)(a.flightEnd);
                        const aDuration = moment_1.default.duration(aEnd.diff(aStart));
                        const aMinutes = aDuration.asMinutes();
                        const bStart = (0, moment_1.default)(b.flightStart);
                        const bEnd = (0, moment_1.default)(b.flightEnd);
                        const bDuration = moment_1.default.duration(bEnd.diff(bStart));
                        const bMinutes = bDuration.asMinutes();
                        return aMinutes > bMinutes ? 1 : -1;
                    });
                    break;
                case 'Duration: Slowest':
                    providersForSort === null || providersForSort === void 0 ? void 0 : providersForSort.sort((a, b) => {
                        const aStart = (0, moment_1.default)(a.flightStart);
                        const aEnd = (0, moment_1.default)(a.flightEnd);
                        const aDuration = moment_1.default.duration(aEnd.diff(aStart));
                        const aMinutes = aDuration.asMinutes();
                        const bStart = (0, moment_1.default)(b.flightStart);
                        const bEnd = (0, moment_1.default)(b.flightEnd);
                        const bDuration = moment_1.default.duration(bEnd.diff(bStart));
                        const bMinutes = bDuration.asMinutes();
                        return aMinutes < bMinutes ? 1 : -1;
                    });
                    break;
            }
        }
        return providersForSort;
    }
    return (<div className='provider-list'>
      {filteredAndSortedProviders.length === 0
            ? <div className='provider-item'>No upcoming flights found.</div>
            : filteredAndSortedProviders === null || filteredAndSortedProviders === void 0 ? void 0 : filteredAndSortedProviders.map((provider) => (<ProviderItem_1.default key={provider.id} index={index} fullPath={fullPath} provider={provider} departure={departure} destination={destination} routeId={currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.id}/>))}
    </div>);
}
exports.default = index;
