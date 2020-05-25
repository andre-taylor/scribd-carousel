import React from 'react';
import PropTypes from 'prop-types';

export const Typography = ({ variant, className, content, children }) => {
  return React.createElement(variant, { className }, children || content);
};

Typography.defaultProps = {
  variant: 'span',
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h2', 'h3', 'h4', 'span', 'p']).isRequired,
  className: PropTypes.string,
  content: PropTypes.node,
  children: function (props, propName) {
    // children is opitional as long as prop.content has a value
    if (props[propName] === undefined && props['content'] === undefined) {
      return new Error('Component requires a content prop value!');
    }
  },
};

export default Typography;
