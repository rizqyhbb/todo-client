/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
      }}
    />
  );
};
