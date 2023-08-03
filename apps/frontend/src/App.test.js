import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App store={null} persistor={null} />);
  const linkElement = screen.getByText(/Image/i);
  expect(linkElement).toBeInTheDocument();
});
