import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Span } from 'pages/Main/Main_css';

import { ReactComponent as Filters3 } from '../../images/svg/filters-3.svg';

import {
  MenuList,
  MenuListDiv,
  MenuListItem,
  MenuWrap,
} from './DropDownMenu_css';

export const DropDownMenu = ({ title, dropDownList, filtredFunc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(title);

  useEffect(() => {
    filtredFunc(value);
  }, [value, filtredFunc]);

  return (
    <MenuWrap className={isOpen && 'isOpen'}>
      <Button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          transition: isOpen && 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          width: isOpen && '158px',
          position: isOpen && 'absolute',
          borderBottomRightRadius: isOpen && 0,
          borderBottomLeftRadius: isOpen && 0,
        }}
      >
        <Span
          style={{
            color:
              isOpen || value !== title
                ? 'var(--primary-text-color)'
                : 'var(--secondary-text-color)',
            display: isOpen && 'block',
          }}
        >
          {value}
        </Span>
        <Icon
          style={{
            stroke:
              isOpen || value !== title
                ? 'var(--primary-text-color)'
                : 'var(--secondary-text-color)',
          }}
        >
          <Filters3 aria-label="Filter events by category" />
        </Icon>
      </Button>

      {isOpen && (
        <MenuList>
          <MenuListDiv>
            {title === 'Category' && (
              <MenuListItem
                key="All"
                onClick={() => {
                  setValue(title);
                  setIsOpen(false);
                }}
              >
                All
              </MenuListItem>
            )}
            {dropDownList.map(item => (
              <MenuListItem
                key={item}
                onClick={() => {
                  setValue(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </MenuListItem>
            ))}
          </MenuListDiv>
        </MenuList>
      )}
    </MenuWrap>
  );
};

DropDownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  dropDownList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filtredFunc: PropTypes.func.isRequired,
};
