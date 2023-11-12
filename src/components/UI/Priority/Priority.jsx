import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export function Priority({ value }) {
  const { t } = useTranslation();
  let color = '';

  switch (value) {
    case 'High':
      color = 'var(--priority-high-text-color)';
      break;
    case 'Medium':
      color = 'var(--priority-medium-text-color)';
      break;
    case 'Low':
      color = 'var(--priority-low-text-color)';
      break;
    default:
      color = 'var(--input-placeholder-color)';
      break;
  }

  return <span style={{ color: color }}>{t(value)}</span>;
}

Priority.propTypes = {
  value: PropTypes.string.isRequired,
};
