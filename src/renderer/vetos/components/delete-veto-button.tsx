import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from 'renderer/components/button'
import { getApiAddress } from 'renderer/settings/selectors/get-api-address'
import { useVetosDispatch } from 'renderer/vetos/vetos-context'

const StyledButton = styled(Button)`
  margin-left: inherit;
`

type Props = {
  vetoId: number
}

const DeleteVetoButton = ({ vetoId }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useVetosDispatch()
  const apiAddress = useSelector(getApiAddress)

  const onClick = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${apiAddress}/api/vetos/${vetoId}`, {
        method: 'DELETE',
      })

      if (response.status === 200) {
        dispatch({
          type: 'remove',
          vetoId,
        })
        return
      }

      throw new Error()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  return (
    <StyledButton onClick={onClick} isDisabled={isLoading} data-testid={`button-delete-veto-${vetoId}`}>
      Delete
    </StyledButton>
  )
}

export { DeleteVetoButton }
