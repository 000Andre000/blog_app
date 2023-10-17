import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
    //state
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    //handle input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    //form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/user/register", {
                username: inputs.name,
                email: inputs.email,
                password: inputs.password,
            });
            if (data.success) {
                toast.success("User Register Successfully");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={450}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={5}
                    sx={{ backgroundColor: '#5b343b'}}
                >
                    <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase",
                        color: ' #dbcebf',
                    }}
                        padding={3}
                        textAlign="center"
                        
                    >
                        Register
                    </Typography>
                    <TextField
                        placeholder="name"x
                        value={inputs.name}
                        onChange={handleChange}
                        name="name"
                        margin="normal"
                        type={"text"}
                        required
                        sx={{ backgroundColor: ' #dbcebf',
                                borderRadius:'5px',
                                color: ' #5b343b',
                    }}

                    />
                    <TextField
                        placeholder="email"
                        value={inputs.email}
                        name="email"
                        margin="normal"
                        type={"email"}
                        required
                        onChange={handleChange}
                        sx={{ backgroundColor: ' #dbcebf',
                                borderRadius:'5px',
                                color: ' #5b343b',
                    }}
                    />
                    <TextField
                        placeholder="password"
                        value={inputs.password}
                        name="password"
                        margin="normal"
                        type={"password"}
                        required
                        onChange={handleChange}
                        sx={{ backgroundColor: ' #dbcebf',
                                borderRadius:'5px',
                                color: ' #5b343b',
                    }}
                    />

                    <Button
                        type="submit"
                        sx={{ borderRadius: 3, marginTop: 3,
                            backgroundColor: '#826963',
                            '&:hover': {
                                    backgroundColor: '#5b343b', }}}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={() => navigate("/login")}
                        sx={{ borderRadius: 3, marginTop: 3,color: ' #dbcebf' }}
                    >
                        Already Registerd ? Please Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Register;
