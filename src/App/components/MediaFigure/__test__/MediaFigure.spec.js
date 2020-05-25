import React from 'react';
import renderer from 'react-test-renderer';

import MediaFigure from '../MediaFigure';

describe('<MediaFigure />', () => {
  it('renders correctly with optional and required props', () => {
    const item = {
      title: 'Media Title',
      author: 'Media Author',
      href: 'https://www.scribd.com',
      imageSrc:
        'https://imgv2-1-f.scribdassets.com/img/word_document/163600930/149x198/25c730f1a0/1556657999?v=1',
      srcSet:
        'https://imgv2-1-f.scribdassets.com/img/word_document/163600930/298x396/6e57b3bff3/1556657999?v=1',
    };

    const component = renderer.create(<MediaFigure item={item} />);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with required props', () => {
    const item = {
      title: 'Media Title',
      imageSrc:
        'https://imgv2-1-f.scribdassets.com/img/word_document/163600930/149x198/25c730f1a0/1556657999?v=1',
    };

    const component = renderer.create(<MediaFigure item={item} />);
    expect(component).toMatchSnapshot();
  });
});
