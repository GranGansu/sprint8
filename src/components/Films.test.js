import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Films from './Films';

beforeEach(() => {
  render(<Films url={'https://swapi.dev/api/films/1/'} />);
})

test('Título correcto', async () => {
  const titulo = await screen.findByText(/A New Hope/i)
  expect(titulo).toBeInTheDocument()
}, 8000);