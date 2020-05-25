import React from 'react';
import renderer from 'react-test-renderer';

import Linkable from '../Linkable';

describe('<Linkable />', () => {
  it('renders correctly with optional and required props', () => {
    const component = renderer.create(
      <Linkable href={'www.scribd.com'} className={'linkable'}>
        <div>Linkable container</div>
      </Linkable>
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with all required props', () => {
    const component = renderer.create(
      <Linkable href={'www.scribd.com'}>
        <div>Linkable container</div>
      </Linkable>
    );
    expect(component).toMatchSnapshot();
  });
});
