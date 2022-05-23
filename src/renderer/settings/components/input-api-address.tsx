import React from 'react';
import { InputText } from 'renderer/components/input-text';
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api';
import { apiAddressChanged } from 'renderer/settings/settings-actions';
import { useDispatch } from 'renderer/use-dispatch';
import { useApiAddress } from '../use-api-address';

export function InputApiAddress() {
  const dispatch = useDispatch();
  const apiAddress = useApiAddress();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(apiAddressChanged(event.target.value));
  };

  return (
    <InputText
      id="input-api-address"
      value={apiAddress}
      onChange={onChange}
      label="API Address"
      placeholder={DEFAULT_API_ADDRESS}
      data-testid="input-api-address"
    />
  );
}
