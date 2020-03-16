import React, { useEffect, ReactNode, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Theme } from 'renderer/contexts/theme-context';

const Overlay = styled.div`
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

const StyledModal = styled.div<{ theme: Theme }>`
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

const Modal = ({ onClose, children, className }: Props) => {
  const element = useRef(document.createElement('div'));
  const node = element.current;

  const handleKeyDown = (event: KeyboardEvent) => {
    const e = event || window.event;
    if (e.keyCode === 27) {
      e.stopPropagation();
      onClose();
    }
  };

  useEffect(() => {
    document.body.appendChild(node);
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.body.removeChild(node);
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [node]);

  return ReactDOM.createPortal(
    <Overlay
      onClick={(e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onClose();
      }}
      data-testid="modal-overlay"
    >
      <StyledModal
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
        className={className}
      >
        {children}
      </StyledModal>
    </Overlay>,
    element.current
  );
};

export { Modal };
