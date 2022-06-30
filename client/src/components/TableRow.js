import React from 'react';

type tableRowProps = {
    course: String,
    assignment_name: String,
    deadline: String
}
const TableRow: React.FC<tableRowProps> = (props: tableRowProps) => {

    const {course, assignment_name, deadline} = props;

    return (
        <tr>
            <td>
                {course}
            </td>
            <td>
                {assignment_name}
            </td>
            <td>
                {deadline}
            </td>
            <td>
                <button className='btn btn-primary'>Edit</button>
            </td>
        </tr>
    );
};

export default TableRow;