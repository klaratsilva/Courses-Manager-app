import React from 'react'

import { useLocalStore } from 'mobx-react'

import days from '../constants/dates';
import times from '../constants/times'
import students from '../constants/students'
import teachers from '../constants/teachers'


const StoreContext = React.createContext(null);


export const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        courses: [
            {
                _id: "300",
                title: "Albebra 1",
                subject: "Math",
                date: {
                    _id: "4360",
                    day: 5,
                    time: 1
                },
                teacher: {
                    _id: "101",
                    firstName: "John",
                    lastName: "Smith",
                    birthday: "1960-05-21",
                },
                listOfStudents: [
                    {
                        _id: "200",
                        firstName: "student1",
                        lastName: "student1",
                        birthday: "1990-05-21"
                    },
                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "student3",
                        birthday: "1992-12-22"
                    },
                    {
                        _id: "203",
                        firstName: "student4",
                        lastName: "student4",
                        birthday: "1999-08-22"
                    },],
            },
            {
                _id: "301",
                title: "Human body",
                subject: "Biology",
                date: {
                    _id: "4360",
                    day: 2,
                    time: 6
                },
                teacher: {
                    _id: "101",
                    firstName: "John",
                    lastName: "Smith",
                    birthday: "1960-05-21",
                },
                listOfStudents: [
                    {
                        _id: "200",
                        firstName: "student1",
                        lastName: "Ystudent1",
                        birthday: "1990-05-21"
                    },
                    {
                        _id: "201",
                        firstName: "student2",
                        lastName: "Astudent2",
                        birthday: "19791-05-22"
                    },

                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    }],
            },

            {
                _id: "302",
                title: "Literature",
                subject: "German",

                date: {
                    _id: "4360",
                    day: 1,
                    time: 3
                },
                teacher: {
                    _id: "103",
                    firstName: "Peter",
                    lastName: "Pan",
                    birthday: "1984-12-22",
                },
                listOfStudents: [

                    {
                        _id: "201",
                        firstName: "student2",
                        lastName: "Astudent2",
                        birthday: "19791-05-22"
                    },

                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    }],
            },

            {
                _id: "303",
                title: "World",
                subject: "Geography",
                date: {
                    _id: "4360",
                    day: 4,
                    time: 7
                },

                teacher: {
                    _id: "103",
                    firstName: "Peter",
                    lastName: "Pan",
                    birthday: "1984-12-22",
                },
                listOfStudents: [
                    {
                        _id: "200",
                        firstName: "student1",
                        lastName: "Ystudent1",
                        birthday: "1990-05-21"
                    },
                    {
                        _id: "201",
                        firstName: "student2",
                        lastName: "Astudent2",
                        birthday: "19791-05-22"
                    },

                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    }],
            },
            {
                _id: "304",
                title: "Geometry",
                subject: "Geometry",
                date: {
                    _id: "4360",
                    day: 2,
                    time: 2
                },

                teacher: {
                    _id: "101",
                    firstName: "John",
                    lastName: "Smith",
                    birthday: "1960-05-21",
                },
                listOfStudents: [
                    {
                        _id: "200",
                        firstName: "student1",
                        lastName: "Ystudent1",
                        birthday: "1990-05-21"
                    },
                    {
                        _id: "201",
                        firstName: "student2",
                        lastName: "Astudent2",
                        birthday: "19791-05-22"
                    },

                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    }],
            },
            {
                _id: "305",
                title: "Basketball",
                subject: "Educatuin Physical",
                date: {
                    _id: "4360",
                    day: 2,
                    time: 3
                },
                teacher: {
                    _id: "104",
                    firstName: "Bob",
                    lastName: "White",
                    birthday: "1954-08-22",
                },
                listOfStudents: [
                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    },
                    {
                        _id: "202",
                        firstName: "student3",
                        lastName: "Dstudent3",
                        birthday: "1992-12-22"
                    }],
            }

        ],
        students: [
            {
                _id: "200",
                firstName: "student1",
                lastName: "Ystudent1",
                birthday: "1990-05-21"
            },
            {
                _id: "201",
                firstName: "student2",
                lastName: "Astudent2",
                birthday: "19791-05-22"
            },

            {
                _id: "202",
                firstName: "student3",
                lastName: "Dstudent3",
                birthday: "1992-12-22"
            },
            {
                _id: "203",
                firstName: "student4",
                lastName: "Pstudent4",
                birthday: "1999-08-22"
            },
        ],


        addCourse: course => {
            let courseInDb = {};
            courseInDb.title = course.title;
            courseInDb.subject = course.subject;
            courseInDb.teacher = teachers.find(t => t._id === course.teacherId);
            courseInDb.listOfStudents = [];
            courseInDb._id = Date.now().toString();
            courseInDb.date = {}
            courseInDb.date._id = Date.now().toString();
            courseInDb.date.day = course.dateId;
            courseInDb.date.time = course.timeId;
            store.courses.push(courseInDb);
        },


        removeCourse(_id) {
            store.courses = store.courses.filter((item) => item._id !== _id);
        },

        filterStudents(_id) {
            store.courses = store.courses.filter((item) => item.listOfStudents._id === _id);
        },

        unsubscribeStudent(_id, selectedStudent) {
            const foundCourseIndex = store.courses.findIndex((item) => item._id === _id);
            const index = store.courses[foundCourseIndex].listOfStudents.findIndex(student => student._id === selectedStudent)
            store.courses[foundCourseIndex].listOfStudents.splice(index, 1)
        },

        subscribeStudent(_id, selectedStudent) {
            const foundCourseIndex = store.courses.findIndex((item) => item._id === _id);
            const currentStudent = students.find(student => student._id === selectedStudent)

            store.courses[foundCourseIndex].listOfStudents.push(currentStudent)
        }

    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};


export const useStore = () => React.useContext(StoreContext)