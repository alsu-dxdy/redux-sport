import React from 'react';

import './filter-row.css';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Running',
        id: 'running',
    },
    {
        text: 'Cycling',
        id: 'cycling',
    },
    {
        text: 'Skiing',
        id: 'skiing'
    },
    {
        text: 'Walking',
        id: 'walking',
    },
];

const FilterRow = ({ activeFilter, changeFilter }) => (
    <div className="filter-row">
        <div className="btn-group">
            {FILTERS_BTN.map(({ text, id }) => (
                <button
                    onClick={() => { changeFilter(id) }}
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);


export default FilterRow;
