import React from 'react'

const Table = ({selections}) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th> Category Name</th>
                        <th> Category Color </th>
                        <th> Row, Col Points </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selections.map((selection, index) => 
                            <tr key={index}>
                                <td> {selection.category} </td>
                                <td> <div className="selected-box-color-container" style={{background: selection.color}}></div> </td>
                                <td> {selection.selectedBoxes.map(selectedBox => `(${selectedBox.x}, ${selectedBox.y}) `)} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
