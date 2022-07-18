import React from "react";
import renderer from "react-test-renderer";
import TodoItem from "../ListItemComponent"

describe("Jest Snapshot testing suite", () => {

    const item = {
            id: 1,
            itemName: "Catch bulbasaur",
    }

    it("change switch between item to see if Snapshot change", () => {
        const domTree = renderer.create(
            <TodoItem todo={item}/>
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});