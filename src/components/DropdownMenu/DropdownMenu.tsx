import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import styled, { keyframes } from 'styled-components';

// import { Container } from './styles';

const Dropdown: React.FC = () => {
  const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const StyledContent = styled(DropdownMenu.Content)`
    animation-duration: '0.6s';
    animation-timing-function: 'cubic-bezier(0.16, 1, 0.3, 1)';
    animation-fill-mode: 'forwards';

    &[data-side='top'] {
      animation-name: ${slideUp};
    }
    &[data-side='bottom'] {
      animation-name: ${slideDown};
    }
  `;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <span
          style={{
            background: 'transparent',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Explorer
        </span>
      </DropdownMenu.Trigger>
      <StyledContent>
        {/* <DropdownMenu.Item>…</DropdownMenu.Item>
        <DropdownMenu.Item>…</DropdownMenu.Item> */}

        {/* <DropdownMenu.Separator /> */}

        <DropdownMenu.Root>
          <DropdownMenu.Label>Label</DropdownMenu.Label>
          <DropdownMenu.TriggerItem>
            Sub menu →
          </DropdownMenu.TriggerItem>
          <StyledContent>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </StyledContent>
        </DropdownMenu.Root>

        {/* <DropdownMenu.Separator />

        <DropdownMenu.Item>…</DropdownMenu.Item> */}
      </StyledContent>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
