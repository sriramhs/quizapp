import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Mcq from "../components/Mcq";
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

const mockNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNav,
}));

describe("mcq", () => {
  test("renders everything", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Mcq />
        </Provider>
      </MemoryRouter>
    );

    // Simulate selecting an answer (choose your actual answer)
    const radioOption = screen.getByText("ReactDOM.render()");
    fireEvent.click(radioOption);

    const nextButton = screen.getByText("Next");
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
          <Mcq />
        </Provider>
      </MemoryRouter>
    );
  });

  test("renders type", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Mcq />
        </Provider>
      </MemoryRouter>
    );
  });
});
