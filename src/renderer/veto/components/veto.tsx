import React from 'react';
import styled from 'styled-components';
import { Votes } from 'renderer/veto/components/votes';
import { RemainingMaps } from 'renderer/veto/components/remaining-maps';
import { PickedMaps } from 'renderer/veto/components/picked-maps';
import { ButtonCancelVeto } from 'renderer/veto/components/button-cancel-veto';
import { StyledButton } from 'renderer/components/button';
import { ButtonSaveVeto } from 'renderer/veto/components/button-save-veto';

const StyledVeto = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkInversed};
`;

const SectionContentMaps = styled(SectionContent)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  ${StyledButton} {
    margin-left: 10px;
  }
`;

export function Veto() {
  return (
    <>
      <StyledVeto>
        <Section>
          <SectionTitle>Remaining maps</SectionTitle>
          <SectionContentMaps>
            <RemainingMaps />
          </SectionContentMaps>
        </Section>
        <Section>
          <SectionTitle>Votes</SectionTitle>
          <SectionContent>
            <Votes />
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Picked maps</SectionTitle>
          <SectionContentMaps>
            <PickedMaps />
          </SectionContentMaps>
        </Section>
      </StyledVeto>
      <Buttons>
        <ButtonCancelVeto />
        <ButtonSaveVeto />
      </Buttons>
    </>
  );
}
