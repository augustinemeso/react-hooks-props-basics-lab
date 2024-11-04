import { render } from '@testing-library/react';
import About from '../components/About'; // Update the path as needed

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" />);
  expect(container.querySelector("p")).toBeNull();
});
