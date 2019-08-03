import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { VetoViewSwitcher } from 'renderer/veto/components/veto-view-switcher'
import { Settings } from 'renderer/settings/components/settings'
import { VetosRoute } from 'renderer/vetos/vetos-route'

type Props = {
  children?: never
}

const Routes = ({  }: Props) => {
  return (
    <Switch>
      <Route path="/" exact component={VetoViewSwitcher} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/vetos" exact component={VetosRoute} />
    </Switch>
  )
}

export { Routes }
