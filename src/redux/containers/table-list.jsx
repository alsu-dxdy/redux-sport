import React from 'react';

import './table-list.css';

const TableList = ({ tasksList }) => (
    <table className="table-list">
        <thead>
            <tr>
                <th> Date</th>
                <th> TypeSport</th>
                <th> Distance, km</th>
                <th> Comment </th>
            </tr>
        </thead>
        <tbody>
            {tasksList.map(({ id, date, typeSport, km, comment }) => (
                <tr key={id}>
                    <td className="table-list__cell">{date}</td>
                    <td className="table-list__cell">{typeSport}</td>
                    <td className="table-list__cell">{km}</td>
                    <td className="table-list__cell">{comment}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TableList;