import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../app/store";

test("render everything", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  // Simulate user input
  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const phoneInput = screen.getByLabelText("Phone");

  const startButton = screen.getByRole("button", { name: "Start" });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
  // fireEvent.change(languageSelect, { target: { value: "React" } });

  // Check if the inputs have been filled correctly
  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john.doe@example.com");
  expect(phoneInput).toHaveValue("123-456-7890");

  const languageSelect = screen.getByLabelText("Language");

  // Initially, no option should be selected
  expect(screen.queryByText("React")).toBeNull();

  // Simulate selecting a language
  fireEvent.mouseDown(languageSelect);

  const reactOption = screen.getByText("React");
  fireEvent.click(reactOption);

  // Check if the selected value is updated
  // expect(screen.getByText("React")).toBeInTheDocument();

  // Submit the form
  fireEvent.click(startButton);
});
