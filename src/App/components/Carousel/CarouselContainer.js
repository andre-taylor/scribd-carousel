import React from 'react';
import PropTypes from 'prop-types';
import { CarouselWrapper } from '..';
import { SectionHeader } from '..';
import { Button } from '..';
import { MediaFigure } from '..';
import { IconArrow } from '../Icons/Icons';

import styles from './CarouselContainer.module.css';

export const CarouselContainer = ({ title, subTitle, categoryHref, items }) => {
  const RenderNavigationArrow = ({ direction, accessibilityContent }) => {
    return (
      <Button a11y={accessibilityContent}>
        <IconArrow direction={direction} />
      </Button>
    );
  };

  const ArrowLeft = RenderNavigationArrow({
    direction: 'arrowLeft',
    accessibilityContent: 'Scroll carousel to the left',
  });
  const ArrowRight = RenderNavigationArrow({
    direction: 'arrowRight',
    accessibilityContent: 'Scroll carousel to the right',
  });
  const ArrowDisabled = RenderNavigationArrow({
    direction: 'arrowDisabled',
    accessibilityContent: 'Carousel navigation is disabled.',
  });

  return (
    <section className={styles.carouselContainer}>
      <SectionHeader
        title={title}
        subTitle={subTitle}
        categoryHref={categoryHref}
      />
      <CarouselWrapper
        slidesPerPage={7}
        slidesPerScroll={7}
        itemWidth={163}
        arrowLeft={ArrowLeft}
        arrowLeftDisabled={ArrowDisabled}
        arrowRight={ArrowRight}
        arrowRightDisabled={ArrowDisabled}
        addArrowClickHandler
        animationSpeed={1000}
      >
        {items.map((item, index) => (
          <MediaFigure item={item} key={index} />
        ))}
      </CarouselWrapper>
    </section>
  );
};

CarouselContainer.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CarouselContainer;
