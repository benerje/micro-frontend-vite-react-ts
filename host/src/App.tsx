import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

const App = () => {
  const Login = lazy(
    // @ts-ignore
    async () => import("login/remote-app")
  );
  const Registration = lazy(
    // @ts-ignore
    async () => import("registration/remote-app")
  );

  return (
    <Router>
      <MainComponent />
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback="loading...">
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback="loading...">
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/registration"
          element={
            <Suspense fallback="loading...">
              <Registration />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

const MainComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegistration = () => {
    navigate("/registration");
  };

  return (
    <>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegistration}>Register</button>
    </>
  );
};

export default App;
