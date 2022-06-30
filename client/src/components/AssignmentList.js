import React, {useEffect, useState} from 'react';
import axios from "axios";
import TableRow from "./TableRow";

const AssignmentList = () => {

    const [assignmentList, setAssignmentList] = useState([]);

    useEffect(() => {
        axios.get(' http://localhost:5000/assignment')
            .then(res => {
                setAssignmentList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const renderTableData = () => {
        return (
            assignmentList.map(assignment => (
             <TableRow course={assignment.course} assignment_name={assignment.assignment_name} deadline={assignment.deadline}/>
            ))
        )
    }

    return (
        <div className='container'>
            <h1 align="center">Assignment - List</h1>
            <table className="table table-striped" style={{marginTop:"20px"}}>
                <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Assignment Description</th>
                    <th>Deadline</th>
                </tr>
                </thead>
                <tbody>
                {renderTableData()}
                </tbody>
            </table>
        </div>
    );
};

export default AssignmentList;