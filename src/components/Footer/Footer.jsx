import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          color: '#fff',
          backgroundColor: '#0052cc',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            Made by GOIT student Volodymyr Pryidun (2023)
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
