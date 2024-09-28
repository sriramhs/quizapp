import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import Ms from "../components/Ms";
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

describe("multi select", () => {
  test("renders everything", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Ms />
        </Provider>
      </MemoryRouter>
    );

    const option1Checkbox = screen.getByText("Virtual DOM");
    fireEvent.click(option1Checkbox);

    const option2Checkbox = screen.getByText("JSX");
    fireEvent.click(option2Checkbox);

    const option3Checkbox = screen.getByText("Component Lifecycle");
    fireEvent.click(option3Checkbox);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    fireEvent.click(nextButton);

    // Add assertions here to validate the navigation to the next step

    // Simulate clicking the "Prev" button
    const prevButton = screen.getByText("Prev");
    fireEvent.click(prevButton);
  });

  test("renders java", () => {
    render(
      <MemoryRouter>
        <Provider store={store1}>
          <Ms />
        </Provider>
      </MemoryRouter>
    );
  });

  test("renders type", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Ms />
        </Provider>
      </MemoryRouter>
    );
  });
});
