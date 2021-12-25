import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../features/Auth/Auth";
import { useAppSelector } from "../store/configureStore";

export default function NavBar() {
    const { user } = useAppSelector(state => state.auth);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Demo
                        </Typography>
                        {user ? (<Auth />) : (
                            <>
                                <Button component={Link} to='/Login' color="inherit">Login</Button>
                                <Button component={Link} to='/Register' color="inherit">Register</Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}