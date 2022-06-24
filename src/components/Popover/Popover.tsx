import * as PopoverPrimitive from '@radix-ui/react-popover';
import React, { ReactElement } from 'react';
import { Content, StyledArrow, Trigger } from './styles';

interface PopoverProps {
  trigger: ReactElement;
  content: ReactElement;
  isArrow?: boolean;
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  isArrow,
}) => {
  return (
    <PopoverPrimitive.Root>
      <Trigger>{trigger}</Trigger>

      <Content
        sideOffset={4}
        side="bottom"
        align="center"
        alignOffset={50}
      >
        {content}

        {isArrow && <StyledArrow />}
      </Content>
    </PopoverPrimitive.Root>
  );
};

export default Popover;
