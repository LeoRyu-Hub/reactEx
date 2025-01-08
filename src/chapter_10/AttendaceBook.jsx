import React from "react";

const student =[
    {id:1, name : "Leo"},
    {id:2, name : "Jonathan"},
    {id:3, name : "Matheu"},
    {id:4, name : "Gui"},
];

function AttendaneBook(props){
    return (
        <ul>
            {student.map((student) => {
                return <li key={student.id} >{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendaneBook;