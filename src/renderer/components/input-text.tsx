import React from 'react';
import styled from 'styled-components';
import { Label } from 'renderer/components/label';

const StyledInputText = styled.input`
  border-radius: 4px;
  border: none;
  width: 100%;
  font-size: 100%;
  padding: 10px 8px 10px 8px;
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.lightInversed};
  box-sizing: border-box;
`;

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  value?: string;
  isDisabled?: boolean;
  placeholder?: string;
};

export function InputText({ onChange, value, label, id, isDisabled = false, placeholder, ...props }: Props) {
  return (
    <>
      <Label id={id} label={label} />
      <StyledInputText
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        {...props}
      />
    </>
  );
}
