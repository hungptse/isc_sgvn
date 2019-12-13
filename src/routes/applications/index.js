import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import todo from "./todo";
import surveyList from "./survey";
import surveyDetail from "./survey-detail";
import chat from "./chat";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`/`} to={`/survey`} />
      <Route
        path={`/survey/:surveyid`}
        component={surveyDetail}
        isExact
      />
      <Route path={`/survey`} component={surveyList} isExact />
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default Applications;
