import React from 'react';

import '../filter-row/filter-row.css';


const SORT_POSITIONS = [
    {
        text: 'Default',
        id: 'default',
    },
    {
        text: 'Date',
        id: 'date',
    },
    {
        text: 'Distance',
        id: 'distance',
    },
]

const SorterRow = ({ activeSorter, changeSorter }) => (
    <div className="filter-row">
        <div className="btn-group">
            <p className="row__title">Sort by:</p>
            {SORT_POSITIONS.map(({ text, id }) => (
                <button
                    onClick={() => { changeSorter(id) }}
                    key={id}
                    className={id === activeSorter ? "filter-btn active" : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);

export default SorterRow;


