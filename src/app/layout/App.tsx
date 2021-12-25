import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Currentuser } from "../../features/Auth/authSlice";
import Login from "../../features/Auth/Login";
import Register from "../../features/Auth/Register";
import Home from "../../features/home/Home";
import { useAppDispatch } from "../store/configureStore";
import NavBar from "./NavBar";
import Notfound from "./Notfound";


export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Currentuser())
  })
  return (
    <>
      <NavBar />
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route component={Notfound} />
      </Switch>
    </>
  );
}
