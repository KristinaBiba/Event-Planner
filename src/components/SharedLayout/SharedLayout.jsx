import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Slide, ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = ({ value, onChange, onInputClean }) => {
  return (
    <>
      <Header value={value} onChange={onChange} onInputClean={onInputClean} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer
        transition={Slide}
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
};

SharedLayout.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInputClean: PropTypes.func.isRequired,
};
