
import 'react-native';
import React from 'react';
import App from '../App';
import Chart from '../src/home/Chart'
import {create} from 'react-test-renderer'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Dashboard } from '../src/home/Dashboard';

test('renders correctly', () => {
  renderer.create(<App />);
});

const chartTree = create(<Dashboard/>)
test('chart renders correctly', () => {
  expect(chartTree).toMatchSnapshot()
});
