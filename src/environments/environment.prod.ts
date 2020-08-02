export const environment = {
  production: true,
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
