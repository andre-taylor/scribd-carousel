import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../components';
import { Link } from '../../components';

import styles from './SectionHeader.module.css';

export const SectionHeader = ({ title, subTitle, categoryHref }) => {
  return (
    <header className={styles.sectionHeader}>
      <Typography
        variant="h2"
        className={styles.sectionTitle}
        content={title}
      />
      {categoryHref && (
        <Link
          className={styles.sectionAction}
          content="View More"
          href={categoryHref}
        />
      )}
      {subTitle && (
        <Typography
          variant="p"
          className={styles.sectionSubTitle}
          content={subTitle}
        />
      )}
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
