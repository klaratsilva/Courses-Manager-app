import React from "react";
import { Link } from "react-router-dom";

import listGroupSelection from "../constants/constants"

/* import Like from "./common/like"; */

const StudentTable = (props) => {
  const { courses, onSubscribe, onUnsubscribe, selectedItem } = props;
  console.log(selectedItem, 'selectitem')
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Subject</th>
          <th scope="col">Teacher</th>

        </tr>
      </thead>
      <tbody>
        {courses.map((course, i) => (
          <tr key={course._id}>
            <td>{course._id}</td>
            <td>{course.title}</td>
            <td>{course.subject}</td>
            <td>{course.teacher.lastName}</td>




            <td>
              {
                selectedItem === listGroupSelection.MY_COURSES
                &&
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => onUnsubscribe(course._id)}
                >
                  UnSubscribe
              </button>}
              {
                selectedItem === listGroupSelection.AVAILABLE_COURSES
                &&
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => onSubscribe(course._id)}
                >
                  Subscribe
              </button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
