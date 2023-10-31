import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowUpSmall } from '../../images/svg/arrow-up-small.svg';

import { Button, Icon, Span } from 'pages/Main/Main_css';

import {
  MenuList,
  MenuListDiv,
  MenuListItem,
  MenuWrap,
} from './DropDownMenu_css';

export const DropDownMenu = memo (({
  title,
  dropDownList,
  onCategoryFilter,
  onSort,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({ name: title, up: undefined });

  useEffect(() => {
    if (value.name !== title && onCategoryFilter) {
      onCategoryFilter(value.name);
    }
  }, [value.name, title, onCategoryFilter]);

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
              isOpen || value.name !== title
                ? 'var(--primary-text-color)'
                : 'var(--secondary-text-color)',
            display: isOpen && 'block',
          }}
        >
          {title === 'Sort by' && value.name !== title
            ? 'Sort ' + value.name
            : value.name}
        </Span>

        <Icon
          style={{
            stroke:
              isOpen || value.name !== title
                ? 'var(--primary-text-color)'
                : 'var(--secondary-text-color)',
            rotate: title === 'Sort by' && !value.up && '180deg',
          }}
        >
          {title === 'Sort by' && value.name !== title ? (
            <ArrowUpSmall />
          ) : (
            icon
          )}
        </Icon>
      </Button>

      {isOpen && (
        <MenuList>
          <MenuListDiv>
            {title === 'Category' && (
              <MenuListItem
                key="All"
                onClick={() => {
                  setValue({ name: title });
                  if (onCategoryFilter) {
                    onCategoryFilter(title)
                  }
                  setIsOpen(false);
                }}
              >
                All
              </MenuListItem>
            )}
            {dropDownList.map(item => (
              <MenuListItem
                key={item.id}
                onClick={() => {
                  setValue({ name: item.name, up: item?.up });
                  if (onCategoryFilter) {
                    onCategoryFilter(item.name)
                  }
                  if (onSort) {
                    onSort(item.name + item.up)
                  }
                  setIsOpen(false);
                }}
              >
                <span>{item.name}</span>
                {title === 'Sort by' && (
                  <Icon
                    style={{
                      stroke: 'var(--border-color)',
                      rotate: !item.up && '180deg',
                    }}
                  >
                    <ArrowUpSmall />
                  </Icon>
                )}
              </MenuListItem>
            ))}
          </MenuListDiv>
        </MenuList>
      )}
    </MenuWrap>
  );
});

DropDownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  dropDownList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      up: PropTypes.bool,
    })
  ).isRequired,
  onCategoryFilter: PropTypes.func,
  icon: PropTypes.element.isRequired,
  onSort: PropTypes.func,
};
