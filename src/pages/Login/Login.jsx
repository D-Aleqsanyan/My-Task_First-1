import React, {useState} from "react";
import {Box, Container, Typography, Button, TextField, Alert} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = (data) => {
        if (data.email === "demo@demo.com") {
            navigate("/otp", {state: {email: data.email}});
        } else {
            setErrorMessage("Invalid email.");
        }
    };

    return (
        <Container sx={{display: "flex", alignItems: "center", height: "100vh"}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", gap: "20px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{fontFamily: 'Roboto', fontSize: '24px', fontWeight: 500, lineHeight: '32px'}}
                                variant="h4" color={"#003367"}>Login</Typography>
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                    <TextField
                        id="standard-basic"
                        label="Enter your email"
                        variant="standard"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        autoComplete="email"
                    />
                    <Box sx={{width: "100%", display: "flex", justifyContent: "end", paddingTop: '30px'}}>
                        <Button type="submit" variant="contained" sx={{backgroundColor: "#003367"}}>Send code</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
