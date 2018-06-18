// @flow

import type {
  WeatherTransportLayer,
  Weather,
  WeatherType,
  Geolocation,
  City
} from '../types'

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather'
const APP_ID = 'e84348e044ed2e97dee8f404470f7f10'

export const createQueryUrl = (city: City): string =>
  `${API_ENDPOINT}?units=metric&appid=${APP_ID}&q=${city}`

export const createGeolocationUrl = (position: Geolocation): string =>
  `${API_ENDPOINT}?units=metric&appid=${APP_ID}&lat=${position.lat}&lon=${
    position.lon
  }`

export const requestCurrentWeather = async url => {
  const response = await fetch(url)

  return await response.json()
}

export const transformResponseDataToWeather = (response: object): Weather => {
  const { name, main, weather } = response
  const { temp } = main
  const [{ description, id }] = weather

  return {
    city: name,
    status: description,
    temperature: temp,
    dayTime: 'day',
    type: codeToWeatherType(id)
  }
}

export const codeToWeatherType = (code: number): WeatherType => {
  if (200 <= code && code < 300) {
    return 'storm'
  }
  if (300 <= code && code < 400) {
    return 'rain'
  }
  if (500 <= code && code < 600) {
    return 'rain'
  }
  if (600 <= code && code < 700) {
    return 'snow'
  }
  if (700 <= code && code < 800) {
    return 'clouds'
  }
  if (code === 800) {
    return 'clear'
  }
  if (code === 801) {
    return 'few-clouds'
  }
  if (802 <= code && code <= 804) {
    return 'clouds'
  }
}

class OpenWeatherMap implements WeatherTransportLayer {
  static async currentWeatherForCity(city: City): Promise<Weather> {
    const response = await requestCurrentWeather(createQueryUrl(city))

    return transformResponseDataToWeather(response)
  }

  static async currentWeatherForGeolocation(
    position: Geolocation
  ): Promise<Weather> {
    const response = await requestCurrentWeather(createGeolocationUrl(position))

    return transformResponseDataToWeather(response)
  }
}

export default OpenWeatherMap
