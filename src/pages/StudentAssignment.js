import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";

import Select from "../components/select";

import { useStore } from "../context/context";

import ListGroup from "../components/listGroup";
import StudentTable from "../components/studentTable";
import listGroupSelection from "../constants/constants"
import students from '../constants/students'

const StudentAssignment = () => {
    const store = useStore();
    const [selectedStudent, setSelectedStudent] = useState({});
    const [selectedType, setSelectedType] = useState(listGroupSelection.MY_COURSES);


    const handleChange = ({ currentTarget: input }) => {
        const currentSelectedStudent = { ...selectedStudent };
        currentSelectedStudent._id = input.value;
        setSelectedStudent(currentSelectedStudent);
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    const filteredCourses = () => {
        console.log('fill');
        return selectedStudent && selectedStudent._id && selectedType === listGroupSelection.MY_COURSES
            ? store.courses.filter((m) => (
                m.listOfStudents.some(student => student._id === selectedStudent._id))) :
            selectedStudent._id && selectedType === listGroupSelection.AVAILABLE_COURSES
                ? store.courses.filter((m) => (
                    m.listOfStudents.every(student => student._id !== selectedStudent._id))) :
                store.courses;
    }

    const handleUnsubscribe = (_id) => {
        store.unsubscribeStudent(_id, selectedStudent._id)
    }

    const handleSubscribe = (_id) => {
        store.subscribeStudent(_id, selectedStudent._id)
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
            <ListGroup
                items={[listGroupSelection.MY_COURSES, listGroupSelection.AVAILABLE_COURSES]}
                onItemSelect={handleTypeSelect}
                selectedItem={selectedType}
            />
            <StudentTable
                selectedItem={selectedType} onUnsubscribe={handleUnsubscribe} onSubscribe={handleSubscribe}
                courses={filteredCourses()}
            />
        </>
    ));
};

export default StudentAssignment