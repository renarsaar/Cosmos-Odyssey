import { getTravelPrices } from './TravelPrices';
import { CookieJar } from 'cookiejar'

test('API call to return latest travel prices list', () => {
  const cookieJar = new CookieJar()
  cookieJar.setCookie('Domain=localhost', "http://localhost")

  return getTravelPrices().then((data) => {
    expect(data).toEqual(expect.objectContaining({
      id: expect.any(String),
      validUntil: expect.any(String),
      legs: expect.any(Array),
    }))
  })
});
