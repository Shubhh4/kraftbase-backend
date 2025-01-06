import UserAuthForm from '../components/UserAuthForm'

const SignUp = () => {

  return (
    <UserAuthForm
      heading="Register"
      welcomeMessage=''
      subHeading=''
      type="signup"
      message="Already have an account?"
      redirectText='Login into you account'
      messageUrl="/login"
      buttonText="SignUp"
    />
  )
}

export default SignUp
