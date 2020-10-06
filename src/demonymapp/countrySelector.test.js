import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CountrySelector from './countrySelector.js'

describe(`TheDate Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
            ReactDOM.render(<CountrySelector />, div);
            ReactDOM.unmountComponentAtNode(div);
        })
})