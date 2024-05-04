import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react'; 
import { useAuth } from '../Hooks/Auth';

function ProtectedRoute({ children }: { children: ReactNode }) { 
    const navigate = useNavigate();
    const isAuthenticated = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return children;
}

export default ProtectedRoute;