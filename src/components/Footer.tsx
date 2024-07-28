import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", py: 3, color: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} WorldWise - Keep track of your adventures
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <Link component={RouterLink} to="/about" color="inherit" sx={{ mr: 1 }}>
            About
          </Link>
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
  );
};

export default Footer;
