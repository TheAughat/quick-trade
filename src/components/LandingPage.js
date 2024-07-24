import React from 'react';
import { Box, Typography } from '@mui/material';

function LandingPage({}) {
    return (
        <Box sx={{width: '100%', maxWidth: 500}}>
            <Typography variant='h1' gutterBottom>
                Hello, React!
            </Typography>
        </Box>
    );
}

export default LandingPage;
