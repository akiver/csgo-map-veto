import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputText } from 'renderer/components/input-text'
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api'
import { updateApiAddress } from 'renderer/settings/actions/update-api-address'
import { getApiAddress } from 'renderer/settings/selectors/get-api-address'

type Props = {
  children?: never
}

const InputApiAddress = ({  }: Props) => {
  const dispatch = useDispatch()
  const apiAddress = useSelector(getApiAddress)

  return (
    <InputText
      id="input-api-address"
      value={apiAddress}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateApiAddress(e.target.value))
      }}
      label="API Address"
      placeholder={DEFAULT_API_ADDRESS}
      data-testid="input-api-address"
    />
  )
}

export { InputApiAddress }
