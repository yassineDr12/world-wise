import React from "react";
import { Typography, Box, Container, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Background from "../components/Background";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExploreIcon from "@mui/icons-material/Explore";

const About = () => {
  const features = [
    {
      icon: <MapIcon fontSize="large" />,
      title: "Interactive Map",
      description: "Explore an interactive world map to visualize your travels and plan new adventures.",
    },
    {
      icon: <PinDropIcon fontSize="large" />,
      title: "Location Tracking",
      description: "Easily pin and track the locations you've visited, creating a visual diary of your journeys.",
    },
    {
      icon: <NoteAddIcon fontSize="large" />,
      title: "Travel Notes",
      description: "Add personalized notes and memories to each location, preserving the details of your experiences.",
    },
    {
      icon: <BarChartIcon fontSize="large" />,
      title: "Travel Stats",
      description:
        "View comprehensive statistics about your travels, including countries visited and total distance covered.",
    },
    {
      icon: <ExploreIcon fontSize="large" />,
      title: "Discover",
      description: "Get inspired and discover new destinations based on your travel preferences and history.",
    },
  ];

  return (
    <Background>
      <Container maxWidth="md">
        <Box py={8}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center">
              About WorldWise
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="body1" paragraph align="center">
                  WorldWise is your ultimate companion platform for tracking and sharing your global travels and
                  adventures. A user-friendly interface and powerful features that allow you to pin your visited
                  locations, add notes, and relive your memories.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography variant="body1" paragraph align="center">
                  Whether a seasoned traveler or just starting, WorldWise helps you visualize travels and plan
                  destinations with ease. We make it simple to create a beautiful, interactive map of your travels that
                  you can share with friends and family.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box mt={6}>
              <Typography variant="h4" gutterBottom align="center">
                Our Features
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: "center" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                      <Box color="primary.main" mb={2}>
                        {feature.icon}
                      </Box>
                      <Typography variant="body1" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Background>
  );
};

export default About;
