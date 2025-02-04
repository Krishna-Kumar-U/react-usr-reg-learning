import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, schema } from '../Hooks/RegisterFormSubmit';
import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from "@mui/material";

interface RegistrationFormProps {
    onSubmit: SubmitHandler<FormValues>;
    additionalContent?: React.ReactNode | undefined;
}

export default function RegisterForm({ onSubmit, additionalContent }: RegistrationFormProps) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: yupResolver<FormValues>(schema) });

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            {...register('username')}
                            autoComplete="given-name"
                            name="username"
                            required
                            fullWidth
                            id="username"
                            label="Preferred User Name"
                            autoFocus
                            error={Boolean(errors.username)}
                            helperText={errors.username?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('email')}
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('password')}
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? <CircularProgress size={24} /> : 'Sign Up'}
                </Button>
                {additionalContent}
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link to="/login" >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}