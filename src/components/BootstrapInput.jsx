import { alpha, InputBase, styled } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 12,
      border: '1px solid var(--borderColor)',
      BorderAllRounded: 'var(--border)',
      position: 'relative',
      backgroundColor: 'transparent',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      // boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.1)',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      color: 'var(--cprimary)', // Set input text color to var(--cprimary)
    '&::placeholder': {
      color: 'var(--cprimary)', // Set placeholder color to white
      opacity: 1, // Ensure visibility in some browsers
    },
    borderColor: "var(--borderColor)",
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        borderColor: '#2D3843',
      }),
    },
  }));

export default BootstrapInput