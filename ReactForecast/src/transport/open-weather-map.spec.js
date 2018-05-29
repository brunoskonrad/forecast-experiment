import {
  createQueryUrl,
  createGeolocationUrl,
  transformResponseDataToWeather
} from './open-weather-map'
import currentWeatherBerlin from './__fixtures__/current-weather-berlin.json'

describe('Transport', () => {
  describe('Open Weather Map', () => {
    describe('#createQueryUrl', () => {
      it('returns an URL to query current weather for a city', () => {
        expect(createQueryUrl('Berlin,DE')).toBe(
          'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e84348e044ed2e97dee8f404470f7f10&q=Berlin,DE'
        )
      })
    })

    describe('#createGeolocationUrl', () => {
      it('returns an URL to query current weather for a geo location', () => {
        expect(createGeolocationUrl({ lat: 12.334, lon: -120.22 })).toBe(
          'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=e84348e044ed2e97dee8f404470f7f10&lat=12.334&lon=-120.22'
        )
      })
    })

    describe('#transformResponseDataToWeather', () => {
      it('transforms api response to weather object', () => {
        const weather = transformResponseDataToWeather(currentWeatherBerlin)

        expect(weather).toEqual({
          city: 'Berlin',
          status: 'clear sky',
          temperature: 31.02,
          dayTime: 'day',
          type: 'clear'
        })
      })
    })
  })
})
