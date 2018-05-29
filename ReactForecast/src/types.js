// @flow

export type DayTime = 'day' | 'night'
export type WeatherType =
  | 'clear'
  | 'clouds'
  | 'few-clouds'
  | 'rain'
  | 'snow'
  | 'storm'

export type Weather = {
  city: string,
  status: string,
  temperature: number,
  dayTime: DayTime,
  type: WeatherType
}

export type Geolocation = {
  lat: number,
  lon: number
}

export type City = string
export type Cities = Array<City>

export interface WeatherTransportLayer {
  currentWeatherForCity(city: City): Promise<Weather>;
  currentWeatherForGeolocation(position: Geolocation): Promise<Weather>;
}
