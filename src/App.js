import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import Loadable from "react-loadable";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
// Pages
const Login = Loadable({
  loader: () => import("./views/Login"),
  loading
});

const Reclutamiento = Loadable({
  loader: () => import("./views/Reclutamiento"),
  loading
});
const RHWizard = Loadable({
  loader: () => import("./views/RHWizard"),
  loading
});

const BusquedaCandidatos = Loadable({
  loader: () => import("./views/BusquedaCandidatos"),
  loading
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login {...props} />}
            />
            <Route
              path="/Reclutamiento"
              name="Reclutamiento"
              render={props => <Reclutamiento {...props} />}
            />           
            <Route
              path="/RHWizard"
              name="RHWizard"
              render={props => <RHWizard {...props} />}
            />  
            <Route
              path="/BusquedaCandidatos"
              name="Bussqueda Candidatos"
              render={props => <BusquedaCandidatos {...props} />}
            />    
            <Route
              path="/"
              name="Home"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
