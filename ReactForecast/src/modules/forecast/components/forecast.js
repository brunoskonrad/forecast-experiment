import React from 'react'
import styled from 'styled-components'

import WeatherInformation from './weather-information'
import WeatherIcon from './weather-icon'

const Container = styled.View`
  background-color: #9cdcff;
  flex: 1;
  width: 100%;

  align-items: center;
  padding-top: 20%;
`

const WeatherIconWithMargin = styled(WeatherIcon)`
  margin-top: 20%;
`

const Forecast = props => {
  const { weather } = props

  return (
    <Container>
      <WeatherInformation weather={weather} />

      <WeatherIconWithMargin weather={weather} />
    </Container>
  )
}

export default Forecast
