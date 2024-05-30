import React, { useState } from "react";
import { Box, Container, Typography, Button, Alert, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { ReactComponent as DeleteIcon } from '../../assets/close_24px.svg';

const Otp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [code, setCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showVector, setShowVector] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (code === "111111") {
            navigate("/home");
        } else {
            setErrorMessage("Please enter a valid code");
        }
    };

    const handleCodeChange = (value) => {
        setCode(value);
        setShowVector(true);
    };

    return (

        <Container sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <Typography sx={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 500, lineHeight: '32px' }} variant="h4" color={"#003367"}>Login</Typography>
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                    <div className="form-group">
                        <label htmlFor="code">
                            To finalize your verification, please enter the code that <br />{" "}
                            has been sent to your email address / SMS
                        </label>
                        <Box sx={{ display: "flex" }}>
                            <MuiOtpInput
                                length={6}
                                value={code}
                                onChange={handleCodeChange}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        fontFamily: "Roboto",
                                        fontSize: "12px",
                                        fontWeight: 400,
                                        lineHeight: "15px",
                                        letterSpacing: "0.4px",
                                        border: "none",
                                        borderBottom: `1px solid ${errorMessage ? "red" : "#003367"} `,
                                        boxShadow: "none",
                                        width: "46.13px",
                                    },
                                    "& .MuiInputBase-input": {
                                        border: "none",
                                        borderBottom: `1px solid ${errorMessage ? "red" : "#003367"} !important`,
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                }}
                            />
                            {showVector ? (
                                <IconButton
                                    onClick={() => {
                                        setCode("");
                                        setShowVector(false);
                                    }}
                                    color="inherit"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            ) : (
                                ""
                            )}
                        </Box>
                    </div>
                    <Box sx={{ width: "100%", display: "flex", gap: "15px", paddingTop: "15px", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: "#003367" }}>Submit</Button>
                        </Box>
                        <label htmlFor="code" style={{ fontFamily: "Roboto", fontSize: "12px", fontWeight: 400, lineHeight: "15px", color: "#95A2A7" }}>
                            If you do not receive the confirmation message within a few <br /> minutes, please check your Spam or Bulk E-Mail folder
                        </label>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Otp;
