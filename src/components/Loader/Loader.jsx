import { Watch } from 'react-loader-spinner';

import { LoaderWrap } from './Loader_css';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="var(--primary-text-color)"
        ariaLabel="Loading"
        visible={true}
      />
    </LoaderWrap>
  );
};
