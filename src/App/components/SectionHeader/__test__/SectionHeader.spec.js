import React from 'react';
import renderer from 'react-test-renderer';

import SectionHeader from '../SectionHeader';

describe('<SectionHeader />', () => {
  it('renders correctly with all optional and required props', () => {
    const component = renderer.create(
      <SectionHeader
        title={'Buzzy Reads This Week'}
        subTitle={'The books everybody’s talking about.'}
        categoryHref={
          'https://www.scribd.com/lists/21604319/Buzzy-Reads-This-Week'
        }
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with required props', () => {
    const component = renderer.create(
      <SectionHeader title={'Buzzy Reads This Week'} />
    );
    expect(component).toMatchSnapshot();
  });
});
