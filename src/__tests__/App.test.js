const { shallow } = require("enzyme");
const React = require("react");
const toJson = require("enzyme-to-json").default;

describe("<App />", () => {
  let App;

  beforeEach(() => {
    App = require("../App");
  });

  it("example happiness", () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <div
        className="App"
      >
        <header
          className="App-header"
        >
          <p>
            Edit 
            <code>
              src/App.js
            </code>
             and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
        </header>
      </div>
    `);
  });

  it("SADNESS", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchEnzymeSnapshot(`
      <div
        className="App"
      >
        <header
          className="App-header"
        >
          <p>
            Edit 
            <code>
              src/App.js
            </code>
             and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
        </header>
      </div>
    `);
  });
});
