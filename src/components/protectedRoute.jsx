/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuth ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
