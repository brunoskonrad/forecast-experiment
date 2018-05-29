// @flow

import React from 'react'
import styled from 'styled-components'

import type { Weather } from '../../../types'

import { WHITE } from '../../../colors'

const WeatherContainer = styled.View`
  align-items: center;
`

const City = styled.Text`
  color: ${WHITE};
  font-size: 34;
`

const WeatherStatus = styled.Text`
  color: ${WHITE};
  font-size: 20;

  margin-top: 4;
`

const Temperature = styled.Text`
  color: ${WHITE};
  font-size: 60;
  font-weight: 200;

  margin-top: 8;
`

export type Props = {
  weather: Weather
}

const WeatherInformation = (props: Props) => {
  const { city, status, temperature } = props.weather

  return (
    <WeatherContainer>
      <City>{city}</City>
      <WeatherStatus>{status}</WeatherStatus>
      <Temperature>{temperature}°</Temperature>
    </WeatherContainer>
  )
}

export default WeatherInformation
