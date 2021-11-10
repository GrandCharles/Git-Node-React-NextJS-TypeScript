import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */ '../pages/Dashboard'));
const Repo = React.lazy(() => import(/* webpackChunkName: "Repo" */ '../pages/Repo'));

export const Routes: React.FunctionComponent = () => {

    return (
        <React.Suspense fallback={'Carregando.... '}>

            <Switch>
                <Route component={Dashboard} path="/" exact />
                <Route component={Repo} path="/repositories/:repository+" />
            </Switch>;

        </React.Suspense>
    )
}
