import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert, CircularProgress } from '@mui/material';
import LoginForm from '../Components/LoginForm';
import { loginFormSubmit } from '../Hooks/LoginFormSubmit';

export default function Login() {
  const { alert, alertContent, inProgress, handleSubmit } = loginFormSubmit();

  let content: ReactNode;

  if (alert) {
    content = <Grid container >
      <Grid item xs={12}>
        <Alert variant="filled" severity="error">
          {alertContent}
        </Alert>
      </Grid>
    </Grid>
  }

  if (inProgress) {
    content = <Grid container >
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LoginForm onSubmit={handleSubmit} additionalElement={content} />
    </Box>
  );
}