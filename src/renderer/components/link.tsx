import React, { ReactNode } from 'react'
import { Link as RRLink } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from 'renderer/contexts/theme-context'

const StyledLink = styled(RRLink)<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  font-size: 100%;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  :hover {
    opacity: 0.8;
  }
`

type Props = {
  to: string
  children: ReactNode
  className?: string
}

const Link = ({ to, children, className, ...props }: Props) => {
  return (
    <StyledLink to={to} className={className} {...props}>
      {children}
    </StyledLink>
  )
}

export { Link }
