import React from 'react';
import styled from 'styled-components';
import { Modal } from 'renderer/components/modal';
import { Text } from 'renderer/components/text';
import { Button } from 'renderer/components/button';

const Footer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

type Props = {
  message: string;
  onClose: () => void;
};

const ModalInformation = ({ message, onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <Text>{message}</Text>
      <Footer>
        <Button onClick={onClose}>Close</Button>
      </Footer>
    </Modal>
  );
};

export { ModalInformation };
