import { Box, Typography, Button, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import { motion } from "framer-motion";

function Homepage() {
  const navigate = useNavigate();

  return (
    <Background
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Fade in={true} timeout={1000}>
        <Box>
          <Typography variant="h1" component="h1" gutterBottom>
            WorldWise
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            You travel the world.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            WorldWise keeps track of your adventures.
          </Typography>
        </Box>
      </Fade>

      <Fade in={true} timeout={2000}>
        <Box maxWidth="800px" mt={4}>
          <Typography variant="body1" paragraph>
            A world map that tracks your footsteps into every city you can think of. Never forget your wonderful
            experiences, and show your friends how you have wandered the world.
          </Typography>
        </Box>
      </Fade>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button variant="contained" color="primary" size="large" onClick={() => navigate("/tracker")} sx={{ mt: 4 }}>
          START TRACKING NOW
        </Button>
      </motion.div>
    </Background>
  );
}

export default Homepage;
