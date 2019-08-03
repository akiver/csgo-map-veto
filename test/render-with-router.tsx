import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

const renderWithRouter = (ui: React.ReactNode) => {
  return render(
    <Router
      history={createMemoryHistory({
        initialEntries: ['/', '/vetos'],
        initialIndex: 0,
      })}
    >
      {ui}
    </Router>
  )
}

export { renderWithRouter }
