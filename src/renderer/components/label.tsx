import * as React from 'react'
import styled from 'styled-components'
import { Theme } from 'renderer/contexts/theme-context'

const StyledLabel = styled.label<{ theme: Theme }>`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.lightInversed};
`

type Props = {
  id: string
  label: string
}

const Label = ({ id, label }: Props) => {
  return <StyledLabel htmlFor={id}>{label}</StyledLabel>
}

export { Label }
