import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", py: 3, color: "white" }}>
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
  );
};

export default Footer;
