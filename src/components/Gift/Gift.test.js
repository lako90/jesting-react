import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gift from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  })

  it('initializes the `state` with an empty person and present', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  })

  describe('when typing into `person` input', () => {
    const person = "ExamplePerson";

    beforeAll(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } })
    });

    it('change corretly the `state`', () => {
      expect(gift.state().person).toEqual(person);
    });

    // it('change corretly the `input`', () => {
    //   expect(gift.find('.input-person').value).toEqual(person)
    // })
  });

  describe('when typing into `present` input', () => {
    const present = "ExamplePresent";

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } })
    });

    it('change corretly the `state`', () => {
      expect(gift.state().present).toEqual(present);
    });

    // it('change corretly the `input`', () => {
    //   expect(gift.find('.input-present').value).toEqual(present)
    // })
  });
})
