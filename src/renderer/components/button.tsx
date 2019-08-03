import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Theme } from 'renderer/contexts/theme-context'

const StyledButton = styled.button.attrs({
  type: 'button',
})<{ theme: Theme; disabled?: boolean }>`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  font-size: 100%;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  font-family: 'Lato';
  line-height: inherit;
  :hover {
    opacity: 0.8;
  }
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

type Props = {
  onClick: () => void
  children: ReactNode
  isDisabled?: boolean
  className?: string
}

const Button = ({ onClick, children, isDisabled, className, ...props }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled} className={className} role="button" {...props}>
      {children}
    </StyledButton>
  )
}

export { StyledButton, Button }
