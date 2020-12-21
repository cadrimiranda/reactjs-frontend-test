import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Cookies from 'universal-cookie';

import CreateToken from '../pages/createToken';
import MeetingPage from '../pages/meeting';

const cookies = new Cookies();

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/create_token' component={CreateToken} />;
        <Route
          path='/meeting'
          component={(props) =>
            cookies.get('auth') ? (
              <MeetingPage {...props} />
            ) : (
              <Redirect to='/create_token' />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
