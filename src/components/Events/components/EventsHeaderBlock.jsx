import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DropDownMenu } from "components/DropDownMenu/DropDownMenu"
import { H2 } from "../../UI/H2/H2"

import { category, sortList } from '../../../helpers/variables';

import { ReactComponent as Filters2 } from '../../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../../images/svg/plus.svg';

import { ButtonWrap, CreateLink, Span, TitleWrap } from "components/Events/components/EventsHeaderBlock_css"

export const EventsHeaderBlock = ({onSort, onCategoryFilter}) => {

  const location = useLocation();

    return (
        <TitleWrap>

        <H2 title='My events' mainTitle/>

        <ButtonWrap>
          <DropDownMenu
            title="Category"
            dropDownList={category}
            onCategoryFilter={onCategoryFilter}
            icon=<Filters3/>
            aria-label="Filter events by category"
          />

          <DropDownMenu
            title="Sort by"
            dropDownList={sortList}
            onSort={onSort}
            icon=<Filters2/>
            aria-label="Choose the type of sorting"
          />

          <CreateLink to="/create" state={{from: location}} >
            <Plus aria-label="Add new event" />
            <Span>Add new event</Span>
          </CreateLink>
        </ButtonWrap>
      </TitleWrap>
    )
};

EventsHeaderBlock.propTypes = {
    onSort: PropTypes.func.isRequired,
    onCategoryFilter: PropTypes.func.isRequired,
  };