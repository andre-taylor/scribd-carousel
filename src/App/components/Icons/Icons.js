import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Icons.module.css';

export const IconArrow = ({ direction }) => {
  return <span className={cx(styles.arrow, styles[direction])}></span>;
};

IconArrow.defaultProps = {
  direction: 'arrowLeft',
};

// only support's left and right arrows
IconArrow.propTypes = {
  direction: PropTypes.oneOf(['arrowLeft', 'arrowRight', 'arrowDisabled']),
};
