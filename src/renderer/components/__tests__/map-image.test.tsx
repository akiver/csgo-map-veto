import React from 'react'
import { render } from '@testing-library/react'
import { MapImage } from '../map-image'

describe('MapImage', () => {
  it('should render the map image', () => {
    const { getByAltText } = render(<MapImage mapName="map name" />)
    const img = getByAltText('map name')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', './maps/map name.png')
    expect(img).toHaveAttribute('title', 'map name')
  })
})
