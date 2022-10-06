import { useAppDispatch } from "../hooks/redux-hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate('/')
      })
  }

  return(
    <Form title="Sign Up" handleClick={handleSignUp} />
  )
}

export default SignUp;