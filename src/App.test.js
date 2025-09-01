import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when the plus button is clicked, the counter increments", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  const counterElement = screen.getByTestId("counter");
  fireEvent.click(buttonElement);
  expect(counterElement).toHaveTextContent("1");
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("when the on/off button is clicked, the plus and minus buttons are disabled", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(onOffButtonElement);
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
