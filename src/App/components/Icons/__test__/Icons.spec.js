import React from 'react';
import renderer from 'react-test-renderer';

import { IconArrow } from '../Icons';

describe('<IconArrow />', () => {
  it('renders correctly with defaultProps', () => {
    const component = renderer.create(<IconArrow />);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with direction=arrowLeft', () => {
    const component = renderer.create(<IconArrow direction={'arrowLeft'} />);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with direction=arrowRight', () => {
    const component = renderer.create(<IconArrow direction={'arrowRight'} />);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with direction=arrowDisabled', () => {
    const component = renderer.create(
      <IconArrow direction={'arrowDisabled'} />
    );
    expect(component).toMatchSnapshot();
  });
});
