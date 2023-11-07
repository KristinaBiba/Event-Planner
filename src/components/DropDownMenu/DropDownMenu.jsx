import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ArrowUpSmall } from '../../images/svg/arrow-up-small.svg';

import {
  MenuList,
  MenuListDiv,
  MenuListItem,
  MenuWrap,
  Button,
  Icon,
  Span,
} from './DropDownMenu_css';

export const DropDownMenu = memo(
  ({ title, dropDownList, onCategoryFilter, onSort, icon, typeMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState({ name: title, up: undefined });

    const { t } = useTranslation();

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
          className={isOpen && 'isOpen'}
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
            {typeMenu === 'Sort by' && value.name !== title
              ? 'Sort ' + value.name
              : value.name}
          </Span>

          <Icon
            style={{
              stroke:
                isOpen || value.name !== title
                  ? 'var(--primary-text-color)'
                  : 'var(--secondary-text-color)',
              rotate: typeMenu === 'Sort by' && !value.up && '180deg',
            }}
          >
            {typeMenu === 'Sort by' && value.name !== title ? (
              <ArrowUpSmall />
            ) : (
              icon
            )}
          </Icon>
        </Button>

        {isOpen && (
          <MenuList>
            <MenuListDiv>
              {typeMenu === 'Category' && (
                <MenuListItem
                  key="All"
                  onClick={() => {
                    setValue({ name: title });
                    if (onCategoryFilter) {
                      onCategoryFilter(title);
                    }
                    setIsOpen(false);
                  }}
                >
                  {t('category.All')}
                </MenuListItem>
              )}
              {dropDownList.map(item => (
                <MenuListItem
                  key={item.id}
                  onClick={() => {
                    setValue({ name: item.name, up: item?.up });
                    if (onCategoryFilter) {
                      onCategoryFilter(item.name);
                    }
                    if (onSort) {
                      onSort(item.name + item.up);
                    }
                    setIsOpen(false);
                  }}
                >
                  <span>{item.name}</span>
                  {typeMenu === 'Sort by' && (
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
  }
);

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
  onSort: PropTypes.func,
  icon: PropTypes.element.isRequired,
  typeMenu:  PropTypes.string.isRequired,
};
