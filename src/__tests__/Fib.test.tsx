import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Fib from "../components/Fib";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "React",
    done: [true, true, true, true, true],
    right: [false, false, false, false, false],
    page: 3,
  },
};

const store = configureStore({
  reducer: {
    studentDetails: (state = initialState.studentDetails, action) => state,
    setDone: (state = initialState.studentDetails.done, action) => state,
    setRight: (state = initialState.studentDetails.right, action) => state,
    setPage: (state = initialState.studentDetails.page, action) => state,
  },
});
const initialState1 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "JavaScript",
    done: [true, true, false, true, true],
    right: [false, false, false, false, false],
    page: 3,
  },
};

const store1 = configureStore({
  reducer: {
    studentDetails: (state = initialState1.studentDetails, action) => state,
    setDone: (state = initialState1.studentDetails.done, action) => state,
    setRight: (state = initialState1.studentDetails.right, action) => state,
    setPage: (state = initialState1.studentDetails.page, action) => state,
  },
});

const initialState2 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "TypeScript",
    done: [true, true, true, true, true],
    right: [false, false, false, false, false],
    page: 3,
  },
};

const store2 = configureStore({
  reducer: {
    studentDetails: (state = initialState2.studentDetails, action) => state,
    setDone: (state = initialState2.studentDetails.done, action) => state,
    setRight: (state = initialState2.studentDetails.right, action) => state,
    setPage: (state = initialState2.studentDetails.page, action) => state,
  },
});

// Mock useNavigate
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Fib Component", () => {
  test("renders Fib component with question and form", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Fib />
        </Provider>
      </MemoryRouter>
    );

    // Ensure that the form input and submit button are present
    const inputElement = screen.getByLabelText("Your Answer");
    expect(inputElement).toBeInTheDocument();
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("updates user answer and navigates to the report", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Fib />
        </Provider>
      </MemoryRouter>
    );

    // Simulate entering an answer in the input field
    const inputElement = screen.getByLabelText("Your Answer");
    fireEvent.change(inputElement, { target: { value: "Virtual DOM" } });

    // // Verify that the input value is updated
    // expect(inputElement).toHaveValue("your answer");

    // Simulate clicking the "Submit" button
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Verify that the navigation function is called with the expected route
    expect(mockNavigate).toHaveBeenCalledWith("/report");
  });

  test("js", () => {
    render(
      <MemoryRouter>
        <Provider store={store1}>
          <Fib />
        </Provider>
      </MemoryRouter>
    );

    const inputElement = screen.getByLabelText("Your Answer");
    fireEvent.change(inputElement, { target: { value: "Virtual DOM" } });
  });

  test("type", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Fib />
        </Provider>
      </MemoryRouter>
    );

    // Ensure that the form input and submit button are present
    const inputElement = screen.getByLabelText("Your Answer");
    expect(inputElement).toBeInTheDocument();
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });
});
