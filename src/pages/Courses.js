import React, { Fragment, useState, useEffect } from "react";


import CourseList from "../components/CourseList";
import CourseForm from "../components/CourseForm";

const Courses = () => {

    const [visibleForm, setVisibleForm] = useState(false)


    return (
        <>
            <button
                onClick={() => setVisibleForm(!visibleForm)}
                className="btn btn-primary"
                style={{ marginBottom: 40 }}
            >
                Add Course
            </button>
            {visibleForm ? <CourseForm setVisibleForm={setVisibleForm} /> : <CourseList />}
        </>
    );
}

export default Courses