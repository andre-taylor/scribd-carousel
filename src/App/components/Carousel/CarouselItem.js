import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './CarouselItem.module.css';

class CarouselItem extends PureComponent {
  static propTypes = {
    onMouseDown: PropTypes.func,
    onTouchStart: PropTypes.func,
    clickable: PropTypes.bool,
    children: PropTypes.node,
    width: PropTypes.number,
    offset: PropTypes.number,
    index: PropTypes.number,
    currentSlideIndex: PropTypes.number,
    isDragging: PropTypes.bool,
    isDraggingEnabled: PropTypes.bool,
  };

  onMouseDown = (event) => {
    this.props.onMouseDown(event, this.props.index);
  };

  onTouchStart = (event) => {
    this.props.onTouchStart(event, this.props.index);
  };

  render() {
    return (
      <li
        className={styles.carouselItem}
        style={{
          paddingRight: `${this.props.offset / 2}px`,
          paddingLeft: `${this.props.offset / 2}px`,
          width: `${this.props.width}px`,
          maxWidth: `${this.props.width}px`,
          minWidth: `${this.props.width}px`,
          pointerEvents: this.props.isDragging ? 'none' : null,
        }}
        onMouseDown={this.props.isDraggingEnabled ? this.onMouseDown : null}
        onTouchStart={this.props.isDraggingEnabled ? this.onTouchStart : null}
      >
        {this.props.children}
      </li>
    );
  }
}

export default CarouselItem;
