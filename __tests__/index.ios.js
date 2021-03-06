import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import mockCamera from '../__mocks__/Camera';

import Index from '../index.ios';

jest.mock('react-native-camera', () => mockCamera);

jest.mock('react-native-speech', () => ({
}));

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
  expect(tree).toMatchSnapshot();
});
