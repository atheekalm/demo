import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Login from "../../features/Auth/Login";
import Register from "../../features/Auth/Register";
import Home from "../../features/home/Home";
import NavBar from "./NavBar";
import Notfound from "./Notfound";


export default function App() {
  return (
    <>
      <NavBar />
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/PrivateRoute' component={Register} />
        <Route component={Notfound} />
      </Switch>
    </>
  );
}
