import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const HeaderText = screen.getByText(/O Bank tarjetas de credito/i);
  expect(HeaderText).toBeInTheDocument();
});
