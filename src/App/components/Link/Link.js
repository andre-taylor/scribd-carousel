import React from 'react';
import PropTypes from 'prop-types';

// text link
export const Link = ({ className, content, children, href }) => {
  return React.createElement('a', { className, href }, children || content);
};

Link.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: function (props, propName, componentName) {
    // children is opitional as long as prop.content has a value
    if (props[propName] === undefined && props['content'] === undefined) {
      return new Error('Component requires a content prop value!');
    }
  },
  href: PropTypes.string.isRequired,
};

export default Link;
