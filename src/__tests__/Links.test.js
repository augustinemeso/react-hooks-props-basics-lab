import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Links from '../components/Links';

test("renders the h3 with the text 'Links'", () => {
  render(<Links github="https://github.com/augustinemeso" linkedin="https://www.linkedin.com/in/augustinemeso" />);
  expect(screen.getByText(/Links/i)).toBeInTheDocument();
});

test("renders the correct links", () => {
  render(<Links github="https://github.com/augustinemeso" linkedin="https://www.linkedin.com/in/augustinemeso" />);
  expect(screen.getByText(/https:\/\/github.com\/augustinemeso/i)).toBeInTheDocument();
  expect(screen.getByText(/https:\/\/www.linkedin.com\/in\/augustinemeso/i)).toBeInTheDocument();
});
