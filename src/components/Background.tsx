import AnimatedDiv from "./AnimatedDiv";
import { Box, SxProps, Theme, useTheme } from "@mui/material";
import backgroundImageLight from "../assets/background-light.jpg";
import backgroundImageDark from "../assets/background-dark.jpg";

const Background = ({ children, sx }: { children: React.ReactNode; sx?: SxProps<Theme> | undefined }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const backgroundImage = isDarkMode ? backgroundImageDark : backgroundImageLight;

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(${theme.palette.background.default}80, ${theme.palette.background.default}80), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        ...sx,
      }}
    >
      <AnimatedDiv>{children}</AnimatedDiv>
    </Box>
  );
};

export default Background;
