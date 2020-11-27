import React, { Fragment } from "react";
import { useLocalStore, useObserver } from "mobx-react";

import { useStore } from "../context/context";

import CoursesTable from "./CourseTable";


const CourseList = () => {

    const store = useStore();

    const handleDelete = (_id) => {
        store.removeCourse(_id)
    }

    return useObserver(() => (
        <>
            <CoursesTable
                courses={store.courses}
                onDelete={handleDelete}
            />
        </>
    ));
};

export default CourseList;