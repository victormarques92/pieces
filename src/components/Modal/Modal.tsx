import React, { useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiX } from 'react-icons/fi';
import { Close, Container, Content, Header } from './styles';

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

              <Close type="button" onClick={onClose}>
                <FiX />
              </Close>
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
