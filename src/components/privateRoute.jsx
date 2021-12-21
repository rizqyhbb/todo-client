/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../routes';

export const PrivateRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: ROUTES.ROOT, state: { from: props.location } }} />;
        }
      }}
    />
  );
};
