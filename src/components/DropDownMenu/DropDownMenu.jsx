import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../i18n';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ArrowUpSmall } from '../../images/svg/arrow-up-small.svg';

import {
  MenuList,
  MenuListItem,
  MenuWrap,
  Button,
  Icon,
  Span,
} from './DropDownMenu_css';

export const DropDownMenu = memo(
  ({ title, dropDownList, onCategoryFilter, onSort, icon, typeMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState({
      name: title,
      up: undefined,
      id: null,
    });

    const { t } = useTranslation();

    useEffect(() => {
      if (value.name !== title && onCategoryFilter) {
        onCategoryFilter(value.id);
      }
    }, [value.name, value.id, title, onCategoryFilter]);

    return (
      <MenuWrap className={isOpen && 'isOpen'}>
        <Button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
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
              ? `${t('Sort')}` + t(value.name)
              : t(value.name)}
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
            {typeMenu === 'Category' && (
              <MenuListItem
                key="All"
                onClick={() => {
                  setValue({ name: title, up: undefined, id: null });
                  if (onCategoryFilter) {
                    onCategoryFilter('Category');
                  }
                  setIsOpen(false);
                }}
              >
                {t('All')}
              </MenuListItem>
            )}
            {dropDownList.map(item => (
              <MenuListItem
                key={item.id}
                onClick={() => {
                  setValue({ id: item.id, name: item.name, up: item?.up });
                  if (onCategoryFilter) {
                    onCategoryFilter(item.id);
                  }
                  if (onSort) {
                    onSort(item.id);
                  }
                  setIsOpen(false);
                }}
              >
                 {t(item.name)}
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      up: PropTypes.bool,
    })
  ).isRequired,
  onCategoryFilter: PropTypes.func,
  onSort: PropTypes.func,
  icon: PropTypes.element.isRequired,
  typeMenu: PropTypes.string.isRequired,
};
