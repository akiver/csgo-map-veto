import React from 'react';
import styled from 'styled-components';
import { InputTeamOneName } from 'renderer/veto/components/input-team-one-name';
import { InputSelectBestOf } from 'renderer/veto/components/input-select-best-of';
import { ButtonStartVeto } from 'renderer/veto/components/button-start-veto';
import { InputSelectMode } from 'renderer/veto/components/input-select-mode';
import { InputTeamTwoName } from 'renderer/veto/components/input-team-two-name';
import { ErrorMessage } from 'renderer/veto/components/error-message';
import { SettingsLink } from 'renderer/veto/components/settings-link';
import { Link } from 'renderer/components/link';
import { MapsSelection } from 'renderer/veto/components/maps-selection';

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  @media (max-width: 768px) {
    width: inherit;
  }
`;

const Field = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  & button,
  & a {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const Error = styled.div`
  margin-top: 10px;
`;

export function Options() {
  return (
    <StyledOptions>
      <Field>
        <InputTeamOneName />
      </Field>
      <Field>
        <InputTeamTwoName />
      </Field>
      <Field>
        <InputSelectBestOf />
      </Field>
      <Field>
        <InputSelectMode />
      </Field>
      <Field>
        <MapsSelection />
      </Field>
      <Buttons>
        <ButtonStartVeto />
        <Link to="/vetos" data-testid="link-vetos">
          Database
        </Link>
        <SettingsLink />
      </Buttons>
      <Error>
        <ErrorMessage />
      </Error>
    </StyledOptions>
  );
}
