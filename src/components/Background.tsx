import AnimatedDiv from "./AnimatedDiv";
import { Box, SxProps, Theme } from "@mui/material";
import backgroundImage from "../assets/background.jpg";

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
      <AnimatedDiv>{children}</AnimatedDiv>
    </Box>
  );
};
export default Background;
