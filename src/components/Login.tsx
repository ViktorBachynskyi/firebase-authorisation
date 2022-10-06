import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/UserSlice";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        setTimeout(() => {
          navigate('/')
        }, 1000);
      })
      .catch(() => alert('Invavid user!'))
  }

  return (
    <Form title="Sign in" handleClick={handleLogin} />
  )
}

export default Login;