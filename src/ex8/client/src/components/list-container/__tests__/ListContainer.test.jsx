import { render, screen } from "@testing-library/react";
import ListContainer from "../ListContainer";
import { Provider } from "react-redux";
import { store } from "../../../store";

const items = [
  {
    id: 56,
    name: "Take dog out for a walk",
    status: false,
  },
  {
    id: 32,
    name: "Do the dishes",
    status: true,
  },
];

describe("ListContainer", () => {
  test("should render both items (one done and one not)", () => {
    render(
      <Provider store={store}>
        <ListContainer items={items} fetchItems={jest.fn(() => items)} />
      </Provider>
    );

    const item1 = screen.getByText("Take dog out for a walk");
    const item2 = screen.getByText("Do the dishes");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(items[0].status).toEqual(false);
    expect(items[1].status).toEqual(true);

  });
});