import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    handleNext: () => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "50%",
        margin: "Auto",
        marginTop: "50px",
        padding: "15px",
        border: "1px solid green",
    },
    field: {
        marginBottom: "5px"
    }
}));


const FormOne: React.FC<Props> = ({ handleNext }) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            handleNext()
        },
        validationSchema: yup.object({
            firstname: yup.string().required("This fields is required"),
            lastname: yup.string().required("This field is required"),
            email: yup.string().email().required("This field is required"),
            password: yup.string()
                .min(6, 'Password is too short.')
                .max(20, 'Password is too long.')
                .required('This field is required.')
        })
    })
    return (

        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            fullWidth
                            name="firstname"
                            id="firstname"
                            variant="outlined"
                            autoComplete="off"
                            label="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                            helperText={formik.errors.firstname ? <span style={{ color: "red" }}>{formik.errors.firstname}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            fullWidth
                            name="lastname"
                            id="lastname"
                            variant="outlined"
                            autoComplete="off"
                            label="Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            helperText={formik.errors.lastname ? <span style={{ color: "red" }}>{formik.errors.lastname}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            type="text"
                            fullWidth
                            id="email"
                            name="email"
                            variant="outlined"
                            label="Email"
                            autoComplete="off"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="password"
                            type="password"
                            fullWidth
                            name="password"
                            variant="outlined"
                            label="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={formik.errors.password ? <span style={{ color: "red" }}>{formik.errors.password}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}
export default FormOne