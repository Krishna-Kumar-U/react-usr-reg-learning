import { useDispatch } from 'react-redux';
import { logout } from '../Store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { persistor } from '../Store/Store';

export default function LogoutLink() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutUser = () => {
        dispatch(logout());
        persistor.purge().then(() => {
            navigate('/login');
        });
    };

    return <Button onClick={logoutUser}>Logout</Button>;
}