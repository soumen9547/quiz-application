import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
}