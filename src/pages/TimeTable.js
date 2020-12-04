import React, { useState } from "react";
import { useObserver } from "mobx-react";

import Select from "../components/select";
import dates from '../constants/dates';
import times from '../constants/times'
import { getRow } from '../util';
import students from '../constants/students'
import { useStore } from "../context/context";

const TimeTable = () => {
    const store = useStore();
    const [selectedStudent, setSelectedStudent] = useState({});


    const handleChange = ({ currentTarget: input }) => {
        const currentSelectedStudent = { ...selectedStudent };
        currentSelectedStudent._id = input.value;
        setSelectedStudent(currentSelectedStudent);
    };

    const filteredCourses = () => {
        return selectedStudent && selectedStudent._id
            ? store.courses.filter((m) => (
                m.listOfStudents.some(student => student._id === selectedStudent._id))) :
            store.courses;
    }

    return useObserver(() => (
        <>
            <form>
                <Select
                    name={'students'}
                    options={students}
                    onChange={handleChange}
                    label={'students'}
                />
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Time</th>

                        {dates.map((date, index) => (
                            <th key={index} scope="col">{date.day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {times.map(time => getRow(time._id, time.time, filteredCourses()))}
                </tbody>
            </table>
        </>
    ));
}

export default TimeTable;
