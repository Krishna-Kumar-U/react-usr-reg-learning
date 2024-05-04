import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h1" gutterBottom>
                404: Page Not Found
            </Typography>
            <Link to="/">Return to Dashboard</Link>
        </Box>
    );
}