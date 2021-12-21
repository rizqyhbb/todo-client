/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../routes';

export const PublicRoute = ({ isAuth: isAuth, component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuth && restricted) {
        return <Redirect to={{ pathname: ROUTES.APP_TODO, state: { from: props.location } }} />;
      } else {
        return <Component />;
      }
    }}
  />
);
