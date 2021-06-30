
import 'react-native';
import React from 'react';
import App from '../App';
import Chart from '../src/home/Chart'
import {create, act} from 'react-test-renderer'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Dashboard } from '../src/home/Dashboard';

test('renders correctly', () => {
  renderer.create(<App />);
});

const tree = create(<Dashboard/>)
test('chart renders correctly', () => {
  expect(tree).toMatchSnapshot()
});


test('setting crypto type', () =>
{
  const button = tree.root.findByProps({testID: 'btcButton'}).props;
  act(() => button.onPress())
  
  const text = tree.root.findByProps({testID: 'titleText'}).props;
  expect(text.children).toEqual(['Stonk Master - ',  'BTC']);
})