import React from 'react'
import {AUTH_TOKEN} from '../constants/authToken'

import { GoogleLogin } from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response.tokenId)
  localStorage.setItem(AUTH_TOKEN, response.tokenId)
  var base64Url = response.tokenId.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  console.log(JSON.parse(jsonPayload));
}

export default function Login(props) {
    return (
        <GoogleLogin
          clientId="984311024489-0942pe018faqg4otoabtefp226q53q0c.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        )
  }
