import React, { Fragment, useState, useEffect } from "react";
import { useLocalStore, useObserver } from "mobx-react";

import { useStore } from "../context/context";
import days from '../constants/dates';
import times from '../constants/times'
import teachers from '../constants/teachers'



const CourseForm = ({ setVisibleForm }) => {

    const store = useStore();

    const [course, setCourse] = useState({
        title: "",
        subject: "",
        teacherId: "",
        timeId: 0,
        dateId: 0,
    });

    /* const [teachers, setTeachers] = useState([teachers]);


    useEffect(() => {
        setTeachers(teachers);
    }, []);
 */

    function mapToViewModel(course) {
        return {
            _id: course._id,
            title: course.title,
            subject: course.subject,
            teacherId: course.teacherId,
            listOfStudents: [],
            timeId: course.timeId,
            dateId: course.dateId,
        };
    }

    const handleChange = ({ currentTarget }) => {
        const newCourse = { ...course };
        newCourse[currentTarget.name] = currentTarget.value;
        setCourse(newCourse);
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setCourse(mapToViewModel(course))
                store.addCourse(course)
                setVisibleForm(false)
            }}
        >

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    className="form-control"
                    id="title"
                    required
                    type="text"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    className="form-control"
                    id="subject"
                    required
                    type="text"
                    name="subject"
                    value={course.subject}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor='teacherId'>Teacher</label>
                <select onChange={handleChange} name='teacherId' id='teacherId' className="form-control">
                    <option value="" />
                    {teachers.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.lastName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor='dayId'>Days</label>
                <select onChange={handleChange} name='dayId' id='dayId' className="form-control">
                    <option value="" />
                    {days.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.day}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor='timeId'>Time</label>
                <select onChange={handleChange} name='timeId' id='timeId' className="form-control">
                    <option value="" />
                    {times.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.time}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Save
        </button>

        </form>
    );
};

export default CourseForm;