import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginateContainer = styled(ReactPaginate).attrs({
  activeClassName: 'active', 
})`
  width: 100%;
  height: 60px;
  margin-top: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-background-color);
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
  list-style-type: none;

  li {
    display: block;
  }
  li a {
    display: block;
    max-width: 40px;
    color: var(--divider, #aca7c3);
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    line-height: normal;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      height: 64px;
      max-width: 64px;
      padding: 18px;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li.active a {
    color: var(--primary-text-color);
    font-weight: 700;
  }
  li.disabled a {
    color: var(--btn-disabled-background);
  }
  li.disable,
  li.disabled a,
  li.disabled svg {
    fill: var(--btn-disabled-background);
    cursor: default;
  }
  li svg {
    fill: var(--primary-text-color);
  }
  @media screen and (min-width: 768px) {
    height: 84px;
  }
  @media screen and (min-width: 1440px) {
    width: 588px;
    margin-left: auto;
  }
`;
