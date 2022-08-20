
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
function App() {
  return (
        <Layout>
         <Home/>
         <SignUp/>
         <Login/>
         <Quiz/>
        </Layout>
  );
}

export default App;
