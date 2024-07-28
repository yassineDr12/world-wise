import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PublicIcon from "@mui/icons-material/Public";
import ExploreIcon from "@mui/icons-material/Explore";

const AnimatedCard = styled(motion(Card))(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
}));

const PricingIcon = styled(Box)(({ theme }) => ({
  fontSize: "4rem",
  marginBottom: theme.spacing(2),
}));

const PricingTier = ({
  title,
  price,
  features,
  icon,
}: {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}) => (
  <Grid item xs={12} md={4}>
    <AnimatedCard initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <CardContent>
        <PricingIcon>{icon}</PricingIcon>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {price}
        </Typography>
        {features.map((feature, index) => (
          <Typography key={index} variant="body2" color="text.secondary" paragraph>
            • {feature}
          </Typography>
        ))}
      </CardContent>
      <Box p={2}>
        <Button variant="contained" color="primary" fullWidth disabled>
          Choose Plan
        </Button>
      </Box>
    </AnimatedCard>
  </Grid>
);

const Pricing = () => {
  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Typography variant="h2" align="center" gutterBottom>
          Choose Your Adventure
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Select the perfect plan for your world-wise journey
        </Typography>
        <Grid container spacing={4} mt={4}>
          <PricingTier
            title="Globetrotter"
            price="$9.99/month"
            features={["Track up to 50 destinations", "Basic travel statistics", "Email support"]}
            icon={<FlightTakeoffIcon fontSize="inherit" color="primary" />}
          />
          <PricingTier
            title="Explorer"
            price="$19.99/month"
            features={["Unlimited destinations", "Advanced travel insights", "Priority support", "Offline access"]}
            icon={<ExploreIcon fontSize="inherit" color="primary" />}
          />
          <PricingTier
            title="World Citizen"
            price="$29.99/month"
            features={[
              "All Explorer features",
              "Exclusive travel content",
              "Personal travel consultant",
              "VIP lounge access",
            ]}
            icon={<PublicIcon fontSize="inherit" color="primary" />}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Pricing;
