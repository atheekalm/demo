import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Demo
                        </Typography>
                        <Button component={Link} to='/Login' color="inherit">Login</Button>
                        <Button component={Link} to='/Register' color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}