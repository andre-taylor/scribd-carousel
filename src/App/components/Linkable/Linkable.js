import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Linkable.module.css';

export const Linkable = ({ href, className, children }) => {
  return (
    <a href={href} className={cx(styles.linkableContainer, className)}>
      {children}
    </a>
  );
};

Linkable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Linkable;
