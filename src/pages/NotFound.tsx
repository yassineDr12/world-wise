import { Box, Typography, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { Link } from "react-router-dom";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const AnimatedBox = styled(Box)({
  animation: `${float} 3s ease-in-out infinite`,
});

const AnimatedTypography = styled(Typography)({
  animation: `${rotate} 10s linear infinite`,
});

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedBox>
        <AnimatedTypography variant="h1" color="primary" sx={{ fontSize: "8rem", fontWeight: "bold" }}>
          404
        </AnimatedTypography>
      </AnimatedBox>
      <Typography variant="h4" sx={{ mt: 2, mb: 4 }}>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: "center", maxWidth: "600px" }}>
        It seems you've wandered off the map. Don't worry, even the best explorers get lost sometimes!
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: "50px",
          padding: "10px 30px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
