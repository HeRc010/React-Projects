var React = require('react');
var DropdownList = require('./dropdown-list');

// Instance Parameters
var parameters = {
    title: 'Ma tatle',
    items: ['Item1',
        'Item 2',
        'Item 3'
    ]
};

// Create Instance
var dropdownList = React.createElement(DropdownList, parameters);

// Render Instance
React.render(dropdownList, document.querySelector('.container'));
