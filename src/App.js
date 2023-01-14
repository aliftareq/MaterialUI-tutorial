import logo from './logo.svg';
import './App.css';
import { Avatar, Button } from '@mui/material';
import { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExploreBasicComp from './Components/ExploreBasicComp';
import InputAdornments from './Components/Textfield';

function App() {
  const [submitting, setSubmitting] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000)

    return () => {
      clearTimeout(id)
    }
  }, [submitting])
  return (
    <div className="App">
      <div
        style={{
          background: '#f7f7f7',
          width: '400px',
          height: '100px',
          borderRadius: '1rem',
          padding: '2rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
          <Avatar
            alt="Remy Sharp"
            src="https://insiderion.com/wp-content/uploads/2020/03/Mehjabin-Chowdhury-old-photo.jpg"
            sx={{ width: 80, height: 78 }}
          />
          <Typography variant="h6" gutterBottom>
            Mehjabeen
          </Typography>
        </div>
        <Button variant='outlined' color='success' disableRipple={true} fullWidth>
          CheckOut
        </Button>

      </div>
      <InputAdornments></InputAdornments>
      <ExploreBasicComp />
    </div>
  );
}

export default App;
