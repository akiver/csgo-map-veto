import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'renderer/components/button';
import { KEY_API_ADDRESS } from 'renderer/constants/local-storage';
import { ModalInformation } from 'renderer/components/modal-information';
import { getApiAddress } from 'renderer/settings/selectors/get-api-address';

const Wrapper = styled.div`
  margin-top: 10px;
`;

const ButtonTestDatabaseConnection = () => {
  const [resultMessage, setResultMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const apiAddress = useSelector(getApiAddress);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiAddress}/api/status`);
      if (response.status === 200) {
        setResultMessage('Connection success.');
        localStorage.setItem(KEY_API_ADDRESS, apiAddress);
      } else {
        throw new Error();
      }
    } catch (error) {
      setResultMessage('Connection failed, make sure the database is running and the API address is correct.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Button isDisabled={isLoading} onClick={onClick}>
        Test connection
      </Button>
      {resultMessage !== undefined && (
        <ModalInformation message={resultMessage} onClose={() => setResultMessage(undefined)} />
      )}
    </Wrapper>
  );
};

export { ButtonTestDatabaseConnection };
