import { Box, SxProps, Theme } from "@mui/material";
import backgroundImage from "../assets/background.jpg";
import { motion } from "framer-motion";

const Background = ({ children, sx }: { children: React.ReactNode; sx?: SxProps<Theme> | undefined }) => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgb(211,238,213, 0.5), rgb(211,238,213, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        ...sx,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};
export default Background;
