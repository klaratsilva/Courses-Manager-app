import React, { Fragment } from "react";


const CourseTable = ({ courses, onDelete }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Num Students</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={course._id}>
                        <td>{course._id}</td>
                        <td>{course.title}</td>
                        <td>{course.subject}</td>
                        <td>{course.teacher.lastName}</td>
                        <td>{course.listOfStudents.length}</td>
                        <td>{course.date.time}</td>

                        {/*  <td>
                            <button className="btn btn-warning" type="button">
                                <Link to={`/courses/${course._id}`}> Edit</Link>
                            </button>
                        </td> */}
                        <td>
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => onDelete(course._id)}
                            >
                                Remove
              </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default CourseTable;