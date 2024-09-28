import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import Mtf from "../components/Mtf";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

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

describe("match the following", () => {
  test("renders everything", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Mtf />
        </Provider>
      </MemoryRouter>
    );

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);
  });

  test("should handle right options correctly when dropped", () => {
    render(
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Mtf />
        </DndProvider>
      </Provider>
    );

    // Simulate a drag-and-drop action on rightOptions
    const leftOption = screen.getByText("Library"); // Replace with your actual text
    const rightOption = screen.getByText("Data Passing"); // Replace with your actual text
    fireEvent.dragStart(leftOption);
    fireEvent.drop(rightOption);
    fireEvent.dragEnd(rightOption);

    // Add assertions to check if the options were correctly swapped
    // For example, you can check if the rightOptions state is updated as expected
    // You can also check if localStorage is updated with the new rightOptions
  });

  test("renders java", () => {
    render(
      <MemoryRouter>
        <Provider store={store1}>
          <Mtf />
        </Provider>
      </MemoryRouter>
    );
  });

  test("renders type", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Mtf />
        </Provider>
      </MemoryRouter>
    );
  });
});
