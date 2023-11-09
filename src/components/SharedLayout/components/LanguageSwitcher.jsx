import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from '../../../helpers/variables';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import {
  LanguageButton,
  Icon,
  LanguageList,
  LanguageItem,
} from './LanguageSwitcher_css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({
    name: i18n.language.toUpperCase(),
    id: i18n.language.toUpperCase(),
  });

  useEffect(() => {
    if (value.id !== i18n.language) {
      i18n.changeLanguage(value.id);
      window.location.reload();
    }
  }, [value.id, i18n]);

  return (
    <>
      <LanguageButton
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value.name}
        <Icon style={{ rotate: isOpen && '180deg' }}>
          <ChevronDownSmall />
        </Icon>
      </LanguageButton>

      {isOpen && (
        <LanguageList>
          {languages.map(item => (
            <LanguageItem
              key={item.id}
              onClick={() => {
                setValue(item);
                setIsOpen(false);
              }}
            >
              <span>{item.name}</span>
            </LanguageItem>
          ))}
        </LanguageList>
      )}
    </>
  );
};
