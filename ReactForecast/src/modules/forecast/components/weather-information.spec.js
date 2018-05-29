import React from 'react'
import TestRenderer from 'react-test-renderer'

import WeatherInformation from './weather-information'

describe('Modules', () => {
  describe('Forecast', () => {
    describe('Components', () => {
      describe('Forecast Information', () => {
        it('should render component', () => {
          const weather = {
            city: 'Berlin',
            status: 'Clear sky',
            temperature: 28
          }
          const subject = TestRenderer.create(
            <WeatherInformation weather={weather} />
          )

          expect(subject.toJSON()).toMatchSnapshot()
        })
      })
    })
  })
})
