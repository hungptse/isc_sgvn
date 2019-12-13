import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import defaultDash from './default';
import contentDash from './content';
import analyticsDash from './analytics';
import ecommerceDash from './ecommerce';
import survey from '../applications/survey';
import AuthLogin from "Routes/landing-pages/auth-login";

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/homepage`} />
            <Route path={`/`} component={survey} />
            <Route path={`/login`} component={AuthLogin} />

            {/* <Route path={`${match.url}/content`} component={contentDash} /> */}
            {/* <Route path={`${match.url}/ecommerce`} component={ecommerceDash} /> */}
            {/* <Route path={`${match.url}/analytics`} component={analyticsDash} /> */}
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Dashboards;