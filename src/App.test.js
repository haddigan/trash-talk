import { render, screen } from "@testing-library/react";
import { App } from "./App";

it("renders enter name section", () => {
  render(<App />);
  const nameHeading = screen.getByRole("heading", { name: /enter your name/i });
  expect(nameHeading).toBeInTheDocument();
});

it("renders informational heading", () => {
  render(<App />);
  const infoHeading = screen.getByRole("heading", {
    name: /use arrow keys to send messages/i,
  });
  expect(infoHeading).toBeInTheDocument();
});

it("renders chat window", () => {
  render(<App />);
  const chatWindow = screen.getByRole("region", { name: /chat window/i });
  expect(chatWindow).toBeInTheDocument();
});
