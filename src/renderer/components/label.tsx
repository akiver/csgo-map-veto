import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.lightInversed};
`;

type Props = {
  id: string;
  label: string;
};

export function Label({ id, label }: Props) {
  return <StyledLabel htmlFor={id}>{label}</StyledLabel>;
}
