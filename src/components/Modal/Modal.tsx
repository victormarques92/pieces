import React, { useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { Container, Content, Header } from './styles';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  children,
}) => {
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [open]);

  if (open) {
    return (
      <Container>
        <ClickAwayListener onClickAway={onClose}>
          <Content>
            <Header>
              <h4>{title}</h4>

              <button type="button" onClick={onClose}>
                FECHAR
              </button>
            </Header>

            {children}
          </Content>
        </ClickAwayListener>
      </Container>
    );
  }

  return null;
};

export default Modal;
