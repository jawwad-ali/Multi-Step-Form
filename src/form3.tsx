import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
        overflow: "hidden"
    },
    field: {
        marginBottom: "8px"
    },
}));

const FormThree: React.FC<Props> = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(true)
        setChecked(event.target.checked);
    };

    const handleFormSuccess = () => {
        alert("Form Successfully submitted")
        setChecked(false)
    }

    return (
        <div className={classes.root}>
            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text eve ly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /> <br />
            <Button
                type="submit" variant="contained" color="primary"
                disabled={checked === false}
                onClick={handleFormSuccess}
            >
                Button
            </Button>
        </div>
    )

}
export default FormThree