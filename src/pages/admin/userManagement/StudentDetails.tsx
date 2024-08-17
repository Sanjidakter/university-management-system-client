import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
    const {studentId} = useParams();
    return (
        <div>
            <h1>std details</h1>
        </div>
    );
};

export default StudentDetails;