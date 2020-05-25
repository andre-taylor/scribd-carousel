import React from 'react';
import renderer from 'react-test-renderer';

import Typography from '../Typography';

describe('<Typography />', () => {
  it('renders correctly with default props and element children props', () => {
    const component = renderer.create(
      <Typography>The quick brown fox jumped over the lazy dog.</Typography>
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with default and content props', () => {
    const component = renderer.create(
      <Typography content={'The quick brown fox jumped over the lazy dog.'} />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with a "h2" variant', () => {
    const component = renderer.create(
      <Typography
        variant={'h2'}
        className={'cssStyle'}
        content={'The quick brown fox jumped over the lazy dog.'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with a "h3" variant', () => {
    const component = renderer.create(
      <Typography
        variant={'h3'}
        className={'cssStyle'}
        content={'The quick brown fox jumped over the lazy dog.'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with a "h4" variant', () => {
    const component = renderer.create(
      <Typography
        variant={'h4'}
        className={'cssStyle'}
        content={'The quick brown fox jumped over the lazy dog.'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with a "span" variant', () => {
    const component = renderer.create(
      <Typography
        variant={'span'}
        className={'cssStyle'}
        content={'The quick brown fox jumped over the lazy dog.'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with a "p" variant', () => {
    const component = renderer.create(
      <Typography
        variant={'p'}
        className={'cssStyle'}
        content={'The quick brown fox jumped over the lazy dog.'}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
