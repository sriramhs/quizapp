import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Tfq from "../components/Tfq";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const mockNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNav,
}));

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

describe("true or false", () => {
  test("renders", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Tfq />
        </Provider>
      </MemoryRouter>
    );

    const trueButton = screen.getByText("True");
    fireEvent.click(trueButton);

    // Verify that the selected answer is highlighted
    expect(trueButton).toHaveClass("MuiButton-contained");

    const falseButton = screen.getByText("False");
    fireEvent.click(falseButton);

    // Simulate clicking the "Next" button
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
  });

  test("renders2", () => {
    render(
      <MemoryRouter>
        <Provider store={store1}>
          <Tfq />
        </Provider>
      </MemoryRouter>
    );
  });

  test("renders3", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Tfq />
        </Provider>
      </MemoryRouter>
    );
  });
});
