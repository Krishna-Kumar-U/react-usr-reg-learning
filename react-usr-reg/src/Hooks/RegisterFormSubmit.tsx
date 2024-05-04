import { useState } from 'react';
import { post } from '../Utils/http';
import { RegisterFormValidation } from './RegisterFormValidation';
import { useNavigate } from 'react-router-dom';

type RawRegisterData = {
    message: string
}

export function registerFormSubmit() {
    const [alert, setAlert] = useState<boolean>(false);
    const [alertContent, setAlertContent] = useState<string>('');
    const [inProgress, setInProgress] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAlert(false);
        setAlertContent('');

        const data = new FormData(event.currentTarget);
        const formData = {
            username: data.get('userName'),
            email: data.get('email'),
            password: data.get('password'),
        };

        RegisterFormValidation(formData).then(async () => {
            setInProgress(true);
            try {
                await post(`${import.meta.env.VITE_API_URL}/register`, formData) as RawRegisterData;
                navigate('/login');
            } catch (error) {
                throw new Error('An error occured please try again later!');
            }
        }).catch((error) => {
            setAlert(true);
            if (error instanceof Error) {
                setAlertContent(error.message);
            } else {
                setAlertContent(error.errors);
            }
            setInProgress(false);
            return { alert, alertContent, inProgress, handleSubmit };
        });
    };

    return { alert, alertContent, inProgress, handleSubmit };
}