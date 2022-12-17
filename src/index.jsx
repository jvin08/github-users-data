import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'

// Domain - dev-4o7mrcx2vkj2y1b4.us.auth0.com
// ClientID - 3LaBbAXh5cFIdpuVt929xKh1HvV8LNVL
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4o7mrcx2vkj2y1b4.us.auth0.com"
      clientId="3LaBbAXh5cFIdpuVt929xKh1HvV8LNVL"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"//when logged through social
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();