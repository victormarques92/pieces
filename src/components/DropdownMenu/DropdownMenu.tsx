import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { ReactElement } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Content, Item, Trigger, TriggerItem } from './styles';

interface ItemProps {
  id: string | number;
  label: string;
  link?: string;
}

interface DataProps extends ItemProps {
  title?: string;
  submenu?: ItemProps[];
}

interface DropdownProps {
  trigger: ReactElement;
  data: DataProps[];
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  data,
}) => {
  return (
    <DropdownMenu.Root>
      <Trigger>{trigger}</Trigger>

      <Content>
        {data.map(menu => {
          if (menu.submenu) {
            return (
              <DropdownMenu.Root key={menu.id}>
                <TriggerItem>
                  {menu.label} <FiArrowRight />
                </TriggerItem>

                <Content sideOffset={-4} alignOffset={0}>
                  {menu.submenu.map(submenu => (
                    <Item key={submenu.id}>
                      {submenu.link ? (
                        <Link to={submenu.link}>
                          {submenu.label}
                        </Link>
                      ) : (
                        submenu.label
                      )}
                    </Item>
                  ))}
                </Content>
              </DropdownMenu.Root>
            );
          }

          return (
            <Item key={menu.id}>
              {menu.link ? (
                <Link to={menu.link}>{menu.label}</Link>
              ) : (
                menu.label
              )}
            </Item>
          );
        })}
      </Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
