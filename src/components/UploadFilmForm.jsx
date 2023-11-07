import { Box, Button, TextField, Input } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import React, { useState } from 'react';


const UploadFilmForm = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const filemp4 = null;
    const fileJpg = null;
    const formData = new FormData();

    const handleFormSubmit = (values) => {
        this.formData.append("movieTitle", values.movieTitle);
        this.formData.append("movieCurrentEp", values.movieCurrentEp);
        this.formData.append("movieTotalEp", values.movieTotalEp);
        this.formData.append("movieDescription", values.movieDescription);
        this.formData.append("movieYear", values.movieYear);
        this.formData.append("movieRating", values.movieRating);
        this.formData.append("movieM3U8", values.movieM3U8);
        this.formData.append("genre", values.genre);
        this.formData.append("filemp4", filemp4);
        this.formData.append("fileJpg", fileJpg);
        axios({
            method: 'post',
            url: 'http://localhost:5000/film/upload',
            data: this.formData
        })
            .then(res => { console.log(res) })
            .catch(error => console.log(error));
        console.log(this.formData)


    };
    const handleChangeFileSubmit = (event) => {
        for (const item of event.target.files) {
            if (item.type === "video/mp4") {
                filemp4 = item
            }
            else if (item.type === "image/jpeg") {
                fileJpg = item
            }

        }
    }


    return (
        <Box m="150px">
            <Box display="flex" justifyContent="left" mt="20px" gap={6} mb="30px">
                <Button variant="contained" component="label" color="secondary" mt="20px" size="medium">
                    Upload movie thumbnail
                    <input hidden accept="image/*" type="file" onChange={handleChangeFileSubmit} />
                </Button>
                <Button variant="contained" component="label" color="secondary" mt="20px" size="medium">
                    Upload movie source
                    <input hidden accept="video/*" type="file" onChange={handleChangeFileSubmit} />
                </Button>
            </Box>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
            // validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Movie title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.movieTitle}
                                name="movieTitle"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Current Ep"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.movieCurrentEp}
                                name="movieCurrentEp"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Total Ep"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.movieTotalEp}
                                name="movieTotalEp"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />

                            {/* <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4" }}
                            /> */}

                        </Box>

                        <Box display="flex" justifyContent="end" mt="50px">
                            <Button type="submit" color="secondary" variant="contained">
                                Upload Film
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>

        </Box>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//     firstName: yup.string().required("required"),
//     lastName: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     contact: yup
//         .string()
//         .matches(phoneRegExp, "Phone number is not valid")
//         .required("required"),
//     address1: yup.string().required("required"),
//     address2: yup.string().required("required"),
// });
const initialValues = {
    movieTitle: "",
    movieCurrentEp: "",
    movieTotalEp: "",
    movieDescription: "",
    movieYear: "",
    movieRating: "",
    movieM3U8: "",
    genre: "hanh dong",
};


export default UploadFilmForm;