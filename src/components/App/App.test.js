import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift` button', () => {
    beforeAll(() => {
      app.find('.btn-add').simulate('click');
    });

    it('adds a new gift in `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    })

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
