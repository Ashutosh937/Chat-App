import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import { auth,provider } from "../store/firebase";
import { actionTypes } from "../store/reducer";
import { useStateValue } from "../store/StateProvider";

function Login() {
  const  [{}, dispatch] = useStateValue();
  const signIn = () =>{
    auth.signInWithPopup(provider).then((result) =>
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    ).catch(error => alert(error.message))
  };
  return (
    <div className="login">
        <div className="login__container">
          <img src="https://thumbs.dreamstime.com/b/dark-facebook-messenger-icon-messaging-app-platform-originally-developed-as-chat-company-revamped-its-service-140088308.jpg" alt=""/>
            <div className="login__text">
              <h1>Sign in to Dark App</h1>
            </div>
          <Button type="submit" onClick={signIn}>
            Sign in with Google
          </Button>
        </div>
    </div>
  )
}

export default Login
