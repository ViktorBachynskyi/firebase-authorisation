import { NavLink } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return(
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5">Login page</h1>
      <Login />
      <p className="my-3">
        Do not have an account? <NavLink to="/sign-up" className="text-blue-600 hover:text-indigo-700 font-bold">Sign up</NavLink>
      </p>
    </div>
  )
}

export default LoginPage;