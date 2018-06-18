import React from 'react'
import styled from 'styled-components'

import clearImage from '../../../assets/clear-day.png'
import cloudsImage from '../../../assets/clouds.png'
import fewCloudsImage from '../../../assets/few-clouds-day.png'
import rainImage from '../../../assets/rain-day.png'
import snowImage from '../../../assets/snow-day.png'
import stormImage from '../../../assets/storm-day.png'

const Icon = styled.Image`
  width: 100;
  height: 100;
`

const images = {
  clear: clearImage,
  clouds: cloudsImage,
  'few-clouds': fewCloudsImage,
  rain: rainImage,
  snow: snowImage,
  storm: stormImage
}

const WeatherIcon = props => {
  const { style } = props
  const { dayTime, type } = props.weather

  return <Icon style={style} source={images[type]} />
}

export default WeatherIcon
