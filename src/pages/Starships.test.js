import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Starships from './Starships';
import { BrowserRouter as Router } from "react-router-dom"

beforeEach(() => {
  render(<Router><Starships preScroll={100} /></Router>);
})

test('Primera carga de Starships', async () => {
  const nave = await screen.findByText(/Millennium Falcon/i)
  expect(nave).toBeInTheDocument()
}, 8000);

test('Infinite scroll', async () => {
  const user = userEvent.setup();
  user.keyboard('[End][End][End]')
  const navePag2 = await screen.findByText(/Imperial shuttle/i)
  expect(navePag2).toBeInTheDocument()
}, 20000);