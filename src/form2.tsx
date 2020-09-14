import React from 'react';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import "./form.css"
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
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
        marginBottom: "8px"
    }
}));


const FormTwo: React.FC<Props> = ({ handleNext }) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: { creditCardNumber: "" },
        onSubmit: (values) => {
            handleNext()
        },
        validationSchema: Yup.object({
            creditCardNumber: Yup.string()
                .max(16, 'Should not exceed 16 digits')
                .min(16, "Should be 16 digits")
                .required("This fields is required"),
        })
    })
    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    type="text"
                    fullWidth
                    name="creditCardNumber"
                    id="creditCardNumber"
                    variant="outlined"
                    autoComplete="off"
                    label="creditCardNumber"
                    onChange={formik.handleChange}
                    value={formik.values.creditCardNumber}
                    helperText={formik.errors.creditCardNumber ? <span style={{ color: "red" }}>{formik.errors.creditCardNumber}</span> : null}
                />
                <Button type="submit" variant="contained" color="primary" >
                    Next
                </Button>
            </form>
        </div>
    )
}
export default FormTwo