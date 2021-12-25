import { LoadingButton } from "@mui/lab";
import { Container, CssBaseline, Box, Typography, TextField, Grid } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "./authSlice";


export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm(
        {
            mode: 'all'
        }
    );

    async function submitForm(data: FieldValues) {
        await dispatch(loginUser(data));
        history.push('/');
    }
    // const [values, setVAlues] = useState(
    //     {
    //         username:'',
    //         password:''
    //     }
    // );
    // const handleSubmit=(event:any)=>{
    //     event.preventDefault();
    //     console.log(values)
    // }
    // function handleInput(event:any){
    //     const {name,value}=event.target;
    //     setVAlues({...values,[name]:value});
    // }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submitForm)}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            autoFocus
                            {...register('Username', { required: 'Username is Required' })}
                            error={!!errors.Username}
                            helperText={errors?.Username?.message}
                        // onChange={handleInput}
                        // value={values.username}

                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            {...register('password', { required: 'Password is Required' })}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        // onChange={handleInput}
                        // value={values.password}
                        />
                        <LoadingButton
                            disabled={!isValid}
                            loading={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            LogIn
                        </LoadingButton>
                        <Grid container>
                            <Grid item>
                                <Link to='/Register'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}