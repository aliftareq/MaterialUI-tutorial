import { Box, CssBaseline, Paper } from '@mui/material';
import React from 'react';
import HeroCard from './HeroCard';

const ExploreMoreComp = () => {
    return (
        <div>
            <hr />
            <h1>This is Explore More component part</h1>
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    bgcolor: 'primary.main',
                    display: 'grid',
                    placeItems: 'center'
                }}>
                <CssBaseline />
                <HeroCard></HeroCard>
                <Paper
                    sx={{
                        height: '100px',
                        width: '100px',
                        padding: '4'
                    }}></Paper>
            </Box>
        </div>
    );
};

export default ExploreMoreComp;