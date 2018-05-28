// @flow

import React from 'react'
import styled from 'styled-components'

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
  city: string,
  weatherStatus: string,
  temperature: number
}

const WeatherInformation = (props: Props) => {
  const { city, weatherStatus, temperature } = props

  return (
    <WeatherContainer>
      <City>{city}</City>
      <WeatherStatus>{weatherStatus}</WeatherStatus>
      <Temperature>{temperature}°</Temperature>
    </WeatherContainer>
  )
}

export default WeatherInformation
