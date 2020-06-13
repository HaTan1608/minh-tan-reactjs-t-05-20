import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  return (
    <Route {...props}>
      {
        localStorage.getItem("token") 
        ? props.children 
        : <Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }} />
      }
    </Route>
  )

}

export default ProtectedRoute