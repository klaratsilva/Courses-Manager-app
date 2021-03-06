import React, { Fragment } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Route, Redirect, Switch } from "react-router-dom";


import CourseList from "./components/CourseList";

import CourseForm from "./components/CourseForm";
import NavBar from "./components/navBar";

import Courses from "./pages/Courses";
import StudentAssignment from "./pages/StudentAssignment";
import TimeTable from "./pages/TimeTable";
import NotFoundP from "./pages/notFoundPage";

import { StoreProvider } from "./context/context";



export default function App() {
  return (
    <StoreProvider>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/student-assignment" component={StudentAssignment} />
          <Route path="/timetable" component={TimeTable} />
          <Route path="/courses/:id" component={CourseForm} />
          <Route path="/courses" component={Courses} />

          <Route path="/not-found" component={NotFoundP} />
          <Redirect from="/" exact to="/courses" />
          <Redirect to="/not-found" />
        </Switch>

      </main>
    </StoreProvider>
  );
}
