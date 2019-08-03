import React from 'react'
import { useSelector } from 'react-redux'
import { Maps } from 'renderer/veto/components/maps'
import { getRemainingMaps } from 'renderer/veto/selectors/get-remaining-maps'

const RemainingMaps = () => {
  const maps = useSelector(getRemainingMaps)
  return <Maps maps={maps} />
}

export { RemainingMaps }
