/* eslint-env mocha*/
import React from 'react';
import Search from '../resources/assets/js/Search';
import ShowCard from '../resources/assets/js/ShowCard';

const { shows } = require('../public/data.json');
const { expect } = require('chai');
const { shallow, mount } = require('enzyme');

describe('<Search />', () => {
    it('should render the brand', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true;
    });

    it('should render as many shows as there are data for', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find(ShowCard).length).to.equal(shows.length);
    });

    it('should filter correctly given new state', () => {
        const wrapper = mount(<Search />);
        const input = wrapper.find('.search-input');
        input.node.value = 'house';
        input.simulate('change');
        expect(wrapper.state('input')).to.equal('house');
        expect(wrapper.find('.show-card').length).to.equal(2);
    });
});
