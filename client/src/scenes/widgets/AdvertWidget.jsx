import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  //This code block is customizing the advertizement idget in the right

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Coco-Cola</Typography>
        <Typography color={medium}>coco-cola.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Refresh yourself with the classic taste of Coca-Cola. Nothing beats the feeling of an ice-cold Coke on a hot day
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
