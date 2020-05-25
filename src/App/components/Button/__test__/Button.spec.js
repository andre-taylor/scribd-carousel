import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('<Button />', () => {
  it('renders correctly with all optional and required props', () => {
    const component = renderer.create(
      <Button a11y={'Accisbility Text'} type="button">
        <span>"props.children"</span>
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly using defaultProp and required propss', () => {
    const component = renderer.create(
      <Button>
        <span>"props.children"</span>
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
