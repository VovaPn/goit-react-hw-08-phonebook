import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { selectName, selectToken } from 'redux/Auth/auth-selectors';

export const HomePage = () => {
  const token = useSelector(selectToken);
  const name = useSelector(selectName);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 12,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
        >
          Hello {name ? name : 'stranger'}! {!token && 'Please sign in/sign up'}
        </Typography>
      </Container>
    </Box>
  );
};
