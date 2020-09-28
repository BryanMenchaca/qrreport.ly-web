import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import moment from "moment";

//Layouts & Pages
import routes from "./Routes/";
import PublicLayout from "./container/PublicLayout";
import AuthLayout from "./container/AuthLauyout";
import NotFoundPage from "./pages/NotFound";

import LoginPage from "./pages/Login/";
import DashboardPage from "./pages/DashboardPage";

import api from "./services/auth";

const pages = [
  // Public pages
  {
    exact: true,
    path: routes.login,
    component: LoginPage,
    layout: PublicLayout,
  },
  // Authenticated pages
  {
    exact: false,
    path: routes.inicio,
    component: DashboardPage,
    layout: AuthLayout,
  },
];

const App = () => {
  const history = createBrowserHistory();
  moment.locale("es-us");

  return (
    <Router history={history}>
      <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Route
          exact
          path="/"
          component={() => <Redirect to={routes.login} />}
        />
        <Route exact path="/logout" render={() => api.logout()} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
