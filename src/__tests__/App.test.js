const { shallow } = require('enzyme');
const React = require('react');
// const toJson = require('enzyme-to-json').default;


describe('<App />', () => {
  let App;

  beforeEach(() => {
    App = require('../App');
  });

  it('example happiness', () => {
    const wrapper = shallow(<App />);

    // expect(toJson(wrapper)).toMatchInlineSnapshot();
  });

  it('SADNESS', () => {
    const wrapper = shallow(<App />);

    // expect(wrapper).toMatchEnzymeSnapshot();
  });
})