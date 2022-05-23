import React from 'react';
import styled from 'styled-components';
import { ButtonToggleTheme } from 'renderer/settings/components/button-toggle-theme';
import { Link } from 'renderer/components/link';
import { ButtonTestDatabaseConnection } from 'renderer/settings/components/button-test-database-connection';
import { InputApiAddress } from 'renderer/settings/components/input-api-address';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  ${Section} {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: inherit;
  }
`;

const SectionTitle = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.lightInversed};
  padding-bottom: 10px;
`;

const HomeLink = styled(Link)`
  margin-top: 10px;
  align-self: flex-start;
`;

export function Settings() {
  return (
    <StyledSettings>
      <Section>
        <SectionTitle>Database</SectionTitle>
        <InputApiAddress />
        <ButtonTestDatabaseConnection />
      </Section>
      <Section>
        <SectionTitle>Theme</SectionTitle>
        <ButtonToggleTheme />
      </Section>
      <HomeLink to="/" data-testid="button-settings-back">
        Home
      </HomeLink>
    </StyledSettings>
  );
}
