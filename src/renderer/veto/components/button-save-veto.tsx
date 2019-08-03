import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Button } from 'renderer/components/button'
import { getCreateVetoParameters } from 'renderer/veto/selectors/get-create-veto-parameters'
import { ModalInformation } from 'renderer/components/modal-information'
import { resetVeto } from 'renderer/veto/actions/reset-veto'
import { getApiAddress } from 'renderer/settings/selectors/get-api-address'
import { getVetoStatus } from 'renderer/veto/selectors/get-veto-status'
import { VetoStatuses } from 'renderer/types/veto-status'

type Props = RouteComponentProps

const ButtonSaveVeto = withRouter(({ history }: Props) => {
  const [error, setError] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const apiAddress = useSelector(getApiAddress)
  const parameters = useSelector(getCreateVetoParameters)
  const isDisabled = useSelector(getVetoStatus) !== VetoStatuses.COMPLETED
  const dispatch = useDispatch()

  const onClick = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${apiAddress}/api/vetos`, {
        method: 'POST',
        body: JSON.stringify(parameters),
      })

      if (response.status === 201) {
        dispatch(resetVeto())
        history.push('/vetos')
        return
      }

      throw new Error()
    } catch (error) {
      console.error(error)
      setError('An error occured, make sure the database is running and the API address is correct.')
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button onClick={onClick} isDisabled={isDisabled || isLoading}>
        Save
      </Button>
      {error && (
        <ModalInformation
          message={error}
          onClose={() => {
            setError(undefined)
          }}
        />
      )}
    </>
  )
})

export { ButtonSaveVeto }
