import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test("renders the correct child components", () => {
  const { container } = render(<App />);

  // Check that nav, home, and about elements are rendered correctly
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(screen.getByTestId("home")).toBeInTheDocument();
  expect(screen.getByTestId("about")).toBeInTheDocument();
});

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);

  // Verify if the correct text renders
  const h1 = screen.getByText(/Augustine Meso is a Web Developer from Nairobi/i);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle({ color: "firebrick" });
});

test("passes 'bio' to <About> as a prop", () => {
  const userBio = "Web Developer";

  render(<App />);
  const p = screen.getByText(userBio);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual("P");
});

test("passes 'github' to <Links> as a prop, via <About>", () => {
  const githubLink = "https://github.com/augustinemeso";

  render(<App />);
  const githubAnchor = screen.getByText(githubLink);
  expect(githubAnchor).toBeInTheDocument();
  expect(githubAnchor.tagName).toEqual("A");
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  const linkedinLink = "https://www.linkedin.com/in/augustinemeso";

  render(<App />);
  const linkedinAnchor = screen.getByText(linkedinLink);
  expect(linkedinAnchor).toBeInTheDocument();
  expect(linkedinAnchor.tagName).toEqual("A");
});
