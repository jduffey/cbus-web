import renderer from "react-test-renderer";

import About from "../../About";

describe("About", () => {
    it("renders", () => {
        const view = renderer.create(<About />);
        expect(view).toMatchSnapshot();
    });
});
