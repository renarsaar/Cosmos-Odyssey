"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TravelPrices_1 = require("./TravelPrices");
const cookiejar_1 = require("cookiejar");
test('API call to return latest travel prices list', () => {
    const cookieJar = new cookiejar_1.CookieJar();
    cookieJar.setCookie('Domain=localhost', "http://localhost");
    return (0, TravelPrices_1.getTravelPrices)().then((data) => {
        expect(data).toEqual(expect.objectContaining({
            id: expect.any(String),
            validUntil: expect.any(String),
            legs: expect.any(Array),
        }));
    });
});
