import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the title of the bank', () => {
  render(<App />);
  const titleElement = screen.getByText(/The Royal Bank of Flatiron/i);
  expect(titleElement).toBeInTheDocument();
});

