import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { DropDownMenu } from 'components/DropDownMenu/DropDownMenu';
import { H2 } from '../../UI/H2/H2';

import { category, sortList } from '../../../helpers/variables';

import { ReactComponent as Filters2 } from '../../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../../images/svg/plus.svg';

import {
  ButtonWrap,
  CreateLink,
  Span,
  TitleWrap,
} from 'components/Events/components/EventsHeaderBlock_css';

export const EventsHeaderBlock = ({ onSort, onCategoryFilter }) => {
  const location = useLocation();

  const { t } = useTranslation();

  return (
    <TitleWrap>
      <H2 title={t('title.events')} mainTitle />

      <ButtonWrap>
        <DropDownMenu
          title={t('category.Category')}
          typeMenu="Category"
          dropDownList={category}
          onCategoryFilter={onCategoryFilter}
          icon=<Filters3/>
          aria-label={t('category.ariaLabel')}
        />

        <DropDownMenu
          title={t('sortBy.sortBy')}
          typeMenu="Sort by"
          dropDownList={sortList}
          onSort={onSort}
          icon=<Filters2/>
          aria-label={t('sortBy.ariaLabel')}
        />

        <CreateLink to="/create" state={{ from: location }}>
          <Plus aria-label={t('eventsPage.mainMenuButton')} />
          <Span>{t('eventsPage.mainMenuButton')}</Span>
        </CreateLink>
      </ButtonWrap>
    </TitleWrap>
  );
};

EventsHeaderBlock.propTypes = {
  onSort: PropTypes.func.isRequired,
  onCategoryFilter: PropTypes.func.isRequired,
};
