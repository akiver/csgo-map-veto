import React from 'react'
import { useSelector } from 'react-redux'
import { Options } from 'renderer/veto/components/options'
import { VetoStatuses } from 'renderer/types/veto-status'
import { Veto } from 'renderer/veto/components/veto'
import { getVetoStatus } from 'renderer/veto/selectors/get-veto-status'

type Props = {
  children?: never
}

const VetoViewSwitcher = ({  }: Props) => {
  const status = useSelector(getVetoStatus)

  return status === VetoStatuses.SETUP ? <Options /> : <Veto />
}

export { VetoViewSwitcher }
