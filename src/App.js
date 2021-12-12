import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage, RegisterPage, Root, TodoPage } from './pages';
import { ROUTES } from './routes';
require('dotenv').config;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Root} />
        <Route path={ROUTES.LOG_IN} component={LoginPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route exact path={ROUTES.APP_TODO} component={TodoPage} />
      </Switch>
    </Router>
  );
};

export default App;
