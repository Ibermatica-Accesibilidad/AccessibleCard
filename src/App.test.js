import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const HeaderText = screen.getByText(/Virtual Bank - Tus tarjetas de un vistazo/i);
  expect(HeaderText).toBeInTheDocument();
});
