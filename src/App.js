import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components';
import { LoginPage, RegisterPage, HomePage, TodoPage, Error } from './pages';
import { useMemo, useState } from 'react';
import { ROUTES } from './routes';
import { AuthContext } from './context/authContext';

require('dotenv').config;

const App = () => {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem('isAuth') ? true : false);
  const providerAuth = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return (
    <Router>
      <AuthContext.Provider value={providerAuth}>
        <Switch>
          <PublicRoute
            exact
            path={ROUTES.ROOT}
            component={HomePage}
            restricted={true}
            isAuth={isAuth}
          />
          <PublicRoute
            path={ROUTES.LOG_IN}
            component={LoginPage}
            restricted={true}
            isAuth={isAuth}
          />
          <PublicRoute
            path={ROUTES.REGISTER}
            component={RegisterPage}
            restricted={true}
            isAuth={isAuth}
          />
          <PrivateRoute exact path={ROUTES.APP_TODO} component={TodoPage} isAuth={isAuth} />
          <Route path="*" component={Error} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
