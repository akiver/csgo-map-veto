import React from 'react'
import { Vetos } from 'renderer/vetos/components/vetos'
import { VetosProvider } from 'renderer/vetos/vetos-context'

const VetosRoute = () => {
  return (
    <VetosProvider>
      <Vetos />
    </VetosProvider>
  )
}

export { VetosRoute }
