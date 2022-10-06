import { useAppSelector } from "./redux-hooks";

export function useAuth() {
  const email = useAppSelector(state => state.user.email);

  return {
    isAuth: !!email
  }
}