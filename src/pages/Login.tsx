import React from 'react';
import UserAuthForm from '../components/UserAuthForm';

const Login: React.FC = () => {


  return (
    < UserAuthForm
      heading="Login"
      welcomeMessage=''
      subHeading=''
      type="login"
      message="Don't have an account? "
      redirectText='Create a new account'
      messageUrl="/signup"
      buttonText="Login"
    />
  );
};

export default Login;
