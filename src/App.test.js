import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('NavBar se muestra correctamente', () => {
  render(<App/>);
  const nav = screen.getByText('Login')
  expect(nav).toBeInTheDocument()
});