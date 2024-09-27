import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-3wx4m6uebfl0wd52.us.auth0.com"
    clientId="q65N7QFX7VVQDN5S00jRA3erf58rgQ8y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
)
