// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hotelCurrenciesAndPriceCompetitivenessData: {
    data: 'https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo',
    prices: {
      usd: {
        url: 'http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/USD',
        country: 'United States of America',
        currency: {
          name: 'dollar',
          short: 'usd',
          long: 'U.S. Dollars',
          symbol: '$'
        }
      },
      sgd: {
        url: 'http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/SGD',
        country: 'Singapore',
        currency: {
          name: 'dollar',
          short: 'sgd',
          long: 'Singapore Dollars',
          symbol: '$'
        }
      }, 
      cny: {
        url: 'http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/CNY',
        country: 'China',
        currency: {
          name: 'Yuan',
          short: 'cny',
          long: 'Chinese Yuan',
          symbol: '¥'
        }
      },
      krw: {
        url: 'http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/KRW',
        country: 'South Korea',
        currency: {
          name: 'won',
          short: 'krw',
          long: 'South Korean Won',
          symbol: '₩'
        }
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
