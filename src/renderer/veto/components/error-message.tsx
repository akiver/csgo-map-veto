import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Text } from 'renderer/components/text';
import { Theme } from 'renderer/contexts/theme-context';
import { getErrorMessage } from 'renderer/veto/selectors/get-error-message';

const StyledError = styled.div<{ theme: Theme }>`
  border: 1px solid ${({ theme }) => theme.danger};
  border-radius: 4px;
  padding: 10px;
`;

const ErrorMessage = () => {
  const error = useSelector(getErrorMessage);
  if (error === undefined) return null;

  return (
    <StyledError>
      <Text size="lg" color="danger">
        {error}
      </Text>
    </StyledError>
  );
};

export { ErrorMessage };
