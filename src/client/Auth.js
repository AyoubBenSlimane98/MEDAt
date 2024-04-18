import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Login from './Login';
import App from './App';
import Register from './Register';
import ForgetPassword from './ForgetPassword';


function Auth() {
  const [cookies, setCookies] = useCookies(['access_token']);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleForgetPassword = () => {
    setShowForgetPassword(true);
  };

  const handleCancelForgetPassword = () => {
    setShowForgetPassword(false);
  };

  const removeCookies = () => {
    setCookies('access_token', '');
    window.location.reload(false);
  };

  return (
    <>
      {cookies.access_token ? (
        <App removeCookies={removeCookies} />
      ) : (
        <div className='flex items-center justify-center h-screen'>
          {!showRegister && !showForgetPassword ? (
            <Login
              onRegisterClick={handleRegisterClick}
              onForgetPassword={handleForgetPassword}
            />
          ) : showRegister ? (
            <Register />
          ) : (
            <ForgetPassword
              onCancel={handleCancelForgetPassword}
            />
          ) }
        </div>
      )}
    </>
  );
}

export default Auth;
