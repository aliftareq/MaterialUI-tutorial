import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const HeroCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2 }}>
            <CardMedia
                sx={{ height: 250, borderRadius: 2 }}
                image="https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl6YXJkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="primary.main">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <IconButton
                    sx={{
                        border: '1px solid #dddddd'
                    }}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default HeroCard;