import React from 'react'
import TestRenderer from 'react-test-renderer'

import WeatherInformation from './weather-information'

describe('Modules', () => {
  describe('Forecast', () => {
    describe('Components', () => {
      describe('Forecast Information', () => {
        it('should render component', () => {
          const subject = TestRenderer.create(
            <WeatherInformation
              city="Berlin"
              weatherStatus="Clear sky"
              temperature="28"
            />
          )

          expect(subject.toJSON()).toMatchSnapshot()
        })
      })
    })
  })
})
