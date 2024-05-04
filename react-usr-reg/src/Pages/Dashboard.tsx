import { Box, Typography } from "@mui/material";
import LogoutLink from "../Components/Logout";
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const userDetails = useSelector((state: any) => state.auth.userDetails);

    return (
        <Box sx={{ width: '100%' }}>
            <LogoutLink />
            <Typography variant="h1" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="h3" gutterBottom>
                {userDetails && `Welcome, ${userDetails.username}!`}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
        </Box>
    );
}