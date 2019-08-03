import React from 'react'
import { Switch, Route } from 'react-router'
import { fireEvent, cleanup } from '@testing-library/react'
import { renderWithRouter } from 'test/render-with-router'
import { themes } from 'renderer/contexts/theme-context'
import { AppWithTheme } from 'test/utils'
import { Link } from '../link'

describe('Link', () => {
  afterEach(cleanup)

  it('should redirect', () => {
    const { getByText } = renderWithRouter(
      <>
        <Switch>
          <Route exact path="/" component={() => <p>Home</p>} />
          <Route path="/other" component={() => <p>Other</p>} />
        </Switch>
        <Link to="/other">Fake link</Link>
      </>
    )

    expect(getByText('Home')).toBeTruthy()

    fireEvent.click(getByText('Fake link'))

    expect(getByText('Other')).toBeTruthy()
  })

  it('should render with dark theme', () => {
    const { container } = renderWithRouter(
      <AppWithTheme>
        <Link to="/other">Dark link</Link>
      </AppWithTheme>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with light theme', () => {
    const { container } = renderWithRouter(
      <AppWithTheme theme={themes.light}>
        <Link to="/other">Light link</Link>
      </AppWithTheme>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
