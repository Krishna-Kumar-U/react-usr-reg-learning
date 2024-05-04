import { type ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, CircularProgress } from '@mui/material';
import RegisterForm from '../Components/RegistrationForm';
import { registerFormSubmit } from '../Hooks/RegisterFormSubmit';

export default function Register() {
    const { alert, alertContent, inProgress, handleSubmit } = registerFormSubmit();

    let content : ReactNode;

    if(alert){
        content = <Grid container >
            <Grid item xs={12}>
                <Alert variant="filled" severity="error">
                    {alertContent}
                </Alert>
            </Grid>
        </Grid>
    }

    if(inProgress){
        content = <Grid container >
            <Grid item xs={12}>
                <CircularProgress />
            </Grid>
        </Grid> 
    }

    return (
        <RegisterForm onSubmit={handleSubmit} additionalElement={content} />
    );
}