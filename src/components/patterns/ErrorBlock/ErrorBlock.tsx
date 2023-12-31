import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Typography, SxProps } from "@mui/material";
import { flexCenter } from "../../../utility/styling";

interface Props {
  label?: string;
  sx?: SxProps;
}

export default function ErrorBlock(props: Props) {
  return (
    <Box
      sx={{
        ...flexCenter,
        fontSize: "2em",
        width: "100%",
        height: "100%",
        ...props.sx,
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ mr: "10px", fontSize: "1.4em" }} />
      <Typography variant="h6" component="p" sx={{ fontSize: "0.7em" }}>
        {props.label || "Wystąpił błąd, przepraszamy"}
      </Typography>
    </Box>
  );
}
