import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      {/*This Box is to setup the heading of the login/register form */}
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
         UnLeash
        </Typography>
      </Box>

    {/*This Box is for short description about the app and it is mobile responsive */}
      <Box
       //changing the width according to the screen size
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to UnLeash, the Social Media for Evils 💀!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
