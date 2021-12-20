import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './components';
import { LoginPage, RegisterPage, HomePage, TodoPage } from './pages';
import { useState } from 'react';
import { ROUTES } from './routes';

require('dotenv').config;

const App = () => {
  const token = window.localStorage.token;
  const [isAuth, setIsAuth] = useState(token ? true : false);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path={ROUTES.ROOT}
          component={HomePage}
          restricted={false}
          isAuth={isAuth}
        />
        <PublicRoute path={ROUTES.LOG_IN} component={LoginPage} restricted={true} isAuth={isAuth} />
        <PublicRoute
          path={ROUTES.REGISTER}
          component={RegisterPage}
          restricted={true}
          isAuth={isAuth}
        />
        <ProtectedRoute exact path={ROUTES.APP_TODO} component={TodoPage} isAuth={isAuth} />
      </Switch>
    </Router>
  );
};

export default App;
