"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectProviders = exports.setProviders = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const providersSlice = (0, toolkit_1.createSlice)({
    name: 'providers',
    initialState: [],
    reducers: {
        setProviders: (state, action) => {
            const providerNames = [];
            action.payload.map((route) => {
                const routeProviders = route.providers;
                routeProviders.map((provider) => {
                    const providerName = provider.company.name;
                    if (!providerNames.includes(providerName)) {
                        providerNames.push(providerName);
                    }
                });
            });
            return providerNames;
        },
    },
});
exports.setProviders = providersSlice.actions.setProviders;
const selectProviders = (state) => state.providers;
exports.selectProviders = selectProviders;
exports.default = providersSlice.reducer;
