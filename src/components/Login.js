import React from 'react'
import {AUTH_TOKEN} from '../constants/authToken'

import { GoogleLogin } from 'react-google-login'

const responseGoogle = (response) => {
  localStorage.setItem(AUTH_TOKEN, response.tokenId)
  var base64Url = response.tokenId.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  console.log(JSON.parse(jsonPayload))
  window.location="/user/"+JSON.parse(jsonPayload).email
}

const failGoogle = (response) => {
  window.location="/"
}

export default function Login(props) {
    return (
        <GoogleLogin
          clientId="544100800671-hso2p7ar1a506v1704j68bvip3r7ui3b.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={failGoogle}
          cookiePolicy={'single_host_origin'}
        />
        )
  }
