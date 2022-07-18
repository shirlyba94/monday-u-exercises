import renderer from "react-test-renderer";
import AboutComponent from "../AboutComponent";

it("renders correctly", () => {
    const tree = renderer.create(
        <AboutComponent />
    ).toJSON();
   expect(tree).toMatchSnapshot();
});