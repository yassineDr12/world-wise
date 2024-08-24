import { Box, Container, Typography, Link, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" elevation={10}>
      <Box display="flex" alignItems="center" height="80px">
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} WorldWise - Keep track of your adventures
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Made with ❤️ by
            <Link href="https://github.com/yassineDr12" target="_blank" rel="noopener" color="inherit" sx={{ ml: 1 }}>
              Yassine Drafate
            </Link>{" "}
            |
            <Link
              href="https://github.com/yassineDr12/world-wise"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ ml: 1 }}
            >
              GitHub
            </Link>
          </Typography>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Footer;
