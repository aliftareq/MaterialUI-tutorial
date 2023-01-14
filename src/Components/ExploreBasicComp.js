import { Typography } from '@mui/material';
import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const ExploreBasicComp = () => {
    const [value, setValue] = useState(2);
    const isActive = false;
    return (
        <div>
            <div>
                <Typography variant='h2' component='h2'>
                    This is a basic component
                </Typography>
                <InstagramIcon color='success' />

                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <hr />
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        color: 'gold'
                    }}
                />
            </div>
            <hr />
            <div>
                <Button variant="text"
                    sx={[{
                        border: '1px solid red',
                        bgcolor: 'steelblue',
                        color: 'white',
                        mr: 2,
                        // width: {
                        //     xs: 100, // theme.breakpoints.up('xs')
                        //     sm: 200, // theme.breakpoints.up('sm')
                        //     md: 300, // theme.breakpoints.up('md')
                        //     lg: 400, // theme.breakpoints.up('lg')
                        //     xl: 500, // theme.breakpoints.up('xl')
                        // },
                        width: [100.200, 300, 400, 500],
                        '&.MuiButton-root': {
                            p: '5rem'
                        },
                    },
                    isActive && {
                        background: 'yellow'
                    }
                    ]}
                >Text</Button>
                <Button variant="contained">Contained</Button>
            </div>
        </div>
    );
};

export default ExploreBasicComp;