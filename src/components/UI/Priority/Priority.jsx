import PropTypes from 'prop-types';

export function Priority({ value }) {
 
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

  return (<span style={{color: color}}>{value}</span>);
}

Priority.propTypes = {
  value: PropTypes.string.isRequired,
}
