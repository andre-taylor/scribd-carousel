import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ a11y, children, type }) => {
  return (
    <button type={type}>
      {a11y && <span className={styles.a11y}>{a11y}</span>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  a11y: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button']),
};

export default Button;
