import React from 'react'

import { useLocalStore } from 'mobx-react'

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
                    time: 'Fri: 11am-12am'
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
                    time: 'Fri: 11am-12am'
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
                    time: 'Fri: 11am-12am'
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
                    time: 'Fri: 11am-12am'
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
                    time: 'Fri: 11am-12am'
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
                    time: 'Fri: 11am-12am'
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
        teachers: [
            {
                _id: "101",
                firstName: "John",
                lastName: "Smith",
                birthday: "1960-05-21",
            },
            {
                _id: "102",
                firstName: "Mary",
                lastName: "Johns",
                birthday: "1972-05-22",
            },
            {
                _id: "103",
                firstName: "Peter",
                lastName: "Pan",
                birthday: "1984-12-22",
            },
            {
                _id: "104",
                firstName: "Bob",
                lastName: "White",
                birthday: "1954-08-22",
            },
        ],
        dates: [
            {
                _id: "401",
                time: 'Mon: 8am-9am'
            }, {
                _id: "402",
                time: 'Mon: 9am-10am'
            },
            {
                _id: "403",
                time: 'Mon: 10am-11am'
            },
            {
                _id: "404",
                time: 'Mon: 11am-12am'
            },
            {
                _id: "405",
                time: 'Mon: 12am-1pm'
            },
            {
                _id: "406",
                time: 'Mon: 1pm-2pm'
            },
            {
                _id: "407",
                time: 'Mon: 2pm-3pm'
            },
            {
                _id: "408",
                time: 'Mon: 3pm-4pm'
            },
            {
                _id: "409",
                time: 'Tue: 8am-9am'
            }, {
                _id: "410",
                time: 'Tue: 9am-10am'
            },
            {
                _id: "411",
                time: 'Tue: 10am-11am'
            },
            {
                _id: "412",
                time: 'Tue: 11am-12am'
            },
            {
                _id: "413",
                time: 'Tue: 12am-1pm'
            },
            {
                _id: "414",
                time: 'Tue: 1pm-2pm'
            },
            {
                _id: "415",
                time: 'Tue: 2pm-3pm'
            },
            {
                _id: "416",
                time: 'Tue: 3pm-4pm'
            },
            {
                _id: "417",
                time: 'Wed: 8am-9am'
            }, {
                _id: "418",
                time: 'Wed: 9am-10am'
            },
            {
                _id: "419",
                time: 'Wed: 10am-11am'
            },
            {
                _id: "420",
                time: 'Wed: 11am-12am'
            },
            {
                _id: "421",
                time: 'Wed: 12am-1pm'
            },
            {
                _id: "422",
                time: 'Wed: 1pm-2pm'
            },
            {
                _id: "423",
                time: 'Wed: 2pm-3pm'
            },
            {
                _id: "424",
                time: 'Wed: 3pm-4pm'
            },
            {
                _id: "425",
                time: 'Thur: 8am-9am'
            }, {
                _id: "426",
                time: 'Thur: 9am-10am'
            },
            {
                _id: "427",
                time: 'Thur: 10am-11am'
            },
            {
                _id: "428",
                time: 'Thur: 11am-12am'
            },
            {
                _id: "429",
                time: 'Thur: 12am-1pm'
            },
            {
                _id: "430",
                time: 'Thur: 1pm-2pm'
            },
            {
                _id: "431",
                time: 'Thur: 2pm-3pm'
            },
            {
                _id: "432",
                time: 'Thur: 3pm-4pm'
            },
            {
                _id: "433",
                time: 'Fri: 8am-9am'
            }, {
                _id: "434",
                time: 'Fri: 9am-10am'
            },
            {
                _id: "435",
                time: 'Fri: 10am-11am'
            },
            {
                _id: "4360",
                time: 'Fri: 11am-12am'
            },
            {
                _id: "437",
                time: 'Fri: 12am-1pm'
            },
            {
                _id: "438",
                time: 'Fri: 1pm-2pm'
            },
            {
                _id: "439",
                time: 'Fri: 2pm-3pm'
            },
            {
                _id: "440",
                time: 'Fri: 3pm-4pm'
            },
        ]
        ,
        addCourse: course => {
            let courseInDb = store.courses.find((c) => c._id === course._id) || {};
            courseInDb.title = course.title;
            courseInDb.subject = course.subject;
            courseInDb.teacher = store.teachers.find(t => t._id === course.teacherId);
            courseInDb.date = store.dates.find(t => t._id === course.timeId);


            if (!courseInDb._id) {
                courseInDb.listOfStudents = [];
                courseInDb._id = Date.now().toString();
                store.courses.push(courseInDb);
            }

            /* store.courses.push(courseInDb); */
        },

        get getTeachers() {
            return store.teachers;
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
            const currentStudent = store.students.find(student => student._id === selectedStudent)

            store.courses[foundCourseIndex].listOfStudents.push(currentStudent)
        }

    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};


export const useStore = () => React.useContext(StoreContext)