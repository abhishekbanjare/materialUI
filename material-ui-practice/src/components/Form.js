import React, { useState } from "react";
import {
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    Radio,
} from "@mui/material";
import { InputSharp, Password } from "@mui/icons-material";

const Form = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
        courses: "",
        gender: "",
    });

    // input change function
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value],
        }));
    };
    // form handling
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='name'
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder='enter name'
                    type='text'
                    variant='outlined'
                    sx={{ margin: "20px" }}
                />
                <br />
                <TextField
                    name='email'
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder='enter email'
                    type='email'
                    variant='outlined'
                    sx={{ margin: "20px" }}
                />
                <br />
                <TextField
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}
                    placeholder='enter password'
                    type='password'
                    variant='outlined'
                    sx={{ margin: "20px" }}
                />
                <br />
                {/* checkbox............................... */}
                <FormGroup sx={{ margin: "20px" }}>
                    <FormControlLabel
                        label='I Agree T&C'
                        control={
                            <Checkbox
                                onChange={() =>
                                    setInputs((prevState) => ({
                                        ...prevState,
                                        terms: !inputs.terms,
                                    }))
                                }
                            />
                        }
                    />
                </FormGroup>
                <br />
                {/* select.................................Courses */}
                <FormControl fullWidth>
                    <InputLabel id='menu'>Courses</InputLabel>
                    <Select
                        labelId='menu'
                        id='menu-list'
                        label='courses'
                        value={inputs.courses}
                        onChange={handleChange}
                        name='courses'
                    >
                        <MenuItem value={"mongodb"}>Mongodb</MenuItem>
                        <MenuItem value={"express"}>Express</MenuItem>
                        <MenuItem value={"node"}>Node</MenuItem>
                        <MenuItem value={"react"}>React</MenuItem>
                    </Select>
                </FormControl>
                <br />
                {/* Radio Button.................. */}
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup name="gender" defaultValue={'male'} onChange={handleChange}>
                        <FormControlLabel value={"male"} label='Male' control={<Radio />} />
                        <FormControlLabel value={"female"} label='Female' control={<Radio />} />
                        <FormControlLabel value={"other"} label='Other' control={<Radio />} />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type='submit'>Submit</Button>
            </form>
        </>
    );
};

export default Form;
