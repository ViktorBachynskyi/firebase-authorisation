import { NavLink } from "react-router-dom";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return(
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5">Sign up page</h1>
      <SignUp />
      <p className="my-3">
        Already have an account? <NavLink to="/login" className="text-blue-600 hover:text-indigo-700 font-bold">Sign up</NavLink>
      </p>
    </div>
  )
}

export default SignUpPage;