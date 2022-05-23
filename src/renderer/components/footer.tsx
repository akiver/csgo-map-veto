import React from 'react';
import styled from 'styled-components';
import { Text } from 'renderer/components/text';
import { ReactComponent as GitHub } from 'renderer/svg/github.svg';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const StyledGitHub = styled(GitHub)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  fill: ${({ theme }) => theme.primary};
`;

export function Footer() {
  return (
    <Wrapper>
      <Text isBold={true}>CSGO Map Veto {'\u00A0'}</Text>
      <Text>{`v${APP_VERSION} by \u00A0`}</Text>
      <Text isBold={true}>AkiVer</Text>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" title="GitHub" role="link">
        <StyledGitHub />
      </a>
    </Wrapper>
  );
}
