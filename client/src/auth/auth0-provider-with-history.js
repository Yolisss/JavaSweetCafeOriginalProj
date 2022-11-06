//summary of what Auth0
//Auth0 React SDK to secure React applications,
//which provides React devs with an easier way to
//add user authentication to React apps using
//a hooks-centric approach
//Auth0 React SDK provides a high-level API to
//handle a lot of authenticationii implementation
//details

//notes on what is going on with this component
//you need Auth0 React SDK (the company) to connect w
//the correct Auth0 app to process authentication

//onRedirectCallback() to handle event where Auth0 redirects
//users from login to app

//useHistory() use to get the history object from React Router

//history.push() used to take users back to the route
//they intended to access before authentication

// src/auth/auth0-provider-with-history.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
