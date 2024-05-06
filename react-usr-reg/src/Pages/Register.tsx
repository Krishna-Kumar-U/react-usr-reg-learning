import { ReactNode } from 'react';
import RegisterForm from '../Components/RegistrationForm';
import { registerFormSubmit } from '../Hooks/RegisterFormSubmit';
import { Alert, Grid } from '@mui/material';

export default function Register() {
    const {handleSubmit, serverErrors} = registerFormSubmit();
    let content: ReactNode;

  if (serverErrors) {
    content = <Grid container >
      <Grid item xs={12}>
        <Alert variant="filled" severity="error">
          {serverErrors.message}
        </Alert>
      </Grid>
    </Grid>
  }
    return (
        <RegisterForm onSubmit={handleSubmit} additionalContent={content} />
    );
}