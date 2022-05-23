import React, { useEffect, ReactNode, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 40;
  display: flex;
  overflow: auto;
`;

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.dark};
  border-radius: 4px;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  overflow: auto;
  margin: auto;
`;

type Props = {
  onClose: () => void;
  className?: string;
  children: ReactNode;
};

export function Modal({ onClose, children, className }: Props) {
  const element = useRef(document.createElement('div'));
  const node = element.current;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
      }
    };

    document.body.appendChild(node);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeChild(node);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [node, onClose]);

  const onBackgroundClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClose();
  };

  const onModalClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Background onClick={onBackgroundClick} data-testid="modal-background">
      <StyledModal onClick={onModalClick} className={className}>
        {children}
      </StyledModal>
    </Background>,
    element.current
  );
}
