import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/UserSlice";

const HomePage = () => {
  const {isAuth} = useAuth();
  const dispatch = useAppDispatch();
  console.log(isAuth)

  return isAuth ? (
    <>
      <h1 className="text-3xl font-bold my-5">Welcome</h1>
      <button 
        className="border p-2 bg-slate-400 hover:bg-slate-600"
        onClick={() => dispatch(removeUser())}
      >
        Log out
      </button>
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default HomePage;