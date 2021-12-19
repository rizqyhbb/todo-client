import { useEffect, useMemo, useState } from 'react';
import { ProtectedRoute } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage, RegisterPage, HomePage, TodoPage } from './pages';
import { ROUTES } from './routes';
import { AuthContext } from './context/authContext';

require('dotenv').config;

const App = () => {
  const token = window.localStorage.token;
  const [isAuth, setIsAuth] = useState(token ? true : false);

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={HomePage} />
        <Route path={ROUTES.LOG_IN} component={LoginPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <ProtectedRoute exact path={ROUTES.APP_TODO} component={TodoPage} isAuth={isAuth} />
      </Switch>
    </Router>
  );
};

export default App;
