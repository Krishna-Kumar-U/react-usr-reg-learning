import { useState } from 'react';
import { post } from '../Utils/http';
import { useNavigate } from 'react-router-dom';
import { LoginFormValidation } from './LoginFormValidation';
import { useDispatch } from 'react-redux';
import { login } from '../Store/AuthSlice';

type RawRegisterData = {
    token: any;
    username: string;
    email: string;
}

export function loginFormSubmit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert, setAlert] = useState<boolean>(false);
    const [alertContent, setAlertContent] = useState<string>('');
    const [inProgress, setInProgress] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAlert(false);
        setAlertContent('');

        const data = new FormData(event.currentTarget);
        const formData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        const handleError = (error: any) => {
            setAlert(true);
            if (error instanceof Error) {
                setAlertContent(error.message);
            } else {
                setAlertContent(error.errors);
            }
            setInProgress(false);
        };

        LoginFormValidation(formData).then(async () => {
            setInProgress(true);
            try {
                const response = await post(`${import.meta.env.VITE_API_URL}/login`, formData) as RawRegisterData;
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    dispatch(login({ token: response.token, userDetails: {username: response.username, email: response.email} }));
                    navigate('/');
                }
                throw new Error('An error occured please try again later!');
            } catch (error) {
                handleError(error);
            }
        }).catch(handleError);
    };

    return { alert, alertContent, inProgress, handleSubmit };
}