import React from 'react';
import styled from 'styled-components';
import { Text } from 'renderer/components/text';
import GitHub from 'renderer/svg/github.svg';
import { Theme } from 'renderer/contexts/theme-context';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const StyledGitHub = styled(GitHub)<{ theme: Theme }>`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  fill: ${({ theme }) => theme.primary};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Text isBold={true}>CSGO Map Veto {'\u00A0'}</Text>
      <Text>{`v${APP_VERSION} by \u00A0`}</Text>
      <Text isBold={true}>AkiVer</Text>
      <StyledGitHub
        role="button"
        onClick={() => {
          if (IS_ELECTRON) {
            // eslint-disable-next-line
            require('electron').shell.openExternal(GITHUB_URL);
          } else {
            window.open(GITHUB_URL);
          }
        }}
      />
    </Wrapper>
  );
};

export { Footer };
