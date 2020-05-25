import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '..';
import { Linkable } from '..';

import styles from './MediaFigure.module.css';

export const MediaFigure = ({
  item: { title, author, href, imageSrc, retinaImageSrc },
}) => {
  const RenderFigure = () => {
    return (
      <figure className={styles.mediaContainer}>
        <img
          className={styles.mediaImage}
          alt={title}
          src={imageSrc}
          srcSet={retinaImageSrc}
        />
        <figcaption className={styles.mediaCaption}>
          <Typography
            variant="h3"
            content={title}
            className={styles.mediaTitle}
          />
          {author && (
            <Typography
              variant="h4"
              content={author}
              className={styles.mediaAuthor}
            />
          )}
        </figcaption>
      </figure>
    );
  };

  return (
    <>
      {href ? (
        <Linkable href={href}>{RenderFigure()}</Linkable>
      ) : (
        RenderFigure()
      )}
    </>
  );
};

MediaFigure.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    retinaImageSrc: PropTypes.string,
  }).isRequired,
};

export default MediaFigure;
