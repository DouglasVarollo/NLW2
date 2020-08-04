import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Landing} exact path="/" />
      <Route component={TeacherForm} path="/give-classes" />
      <Route component={TeacherList} path="/study" />
    </BrowserRouter>
  );
}

export default Routes;
