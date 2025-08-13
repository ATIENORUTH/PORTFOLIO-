import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio without crashing', () => {
  render(<App />);
  const headerElement = screen.getByText(/Portfolio/i);
  expect(headerElement).toBeInTheDocument();
});
