import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  to: string;
}

export default function ButtonLink(props: Props) {
  const { sx, children, to, disabled, ...buttonProps } = props;
  return (
    <Link to={disabled ? "#" : to}>
      <Button
        size="large"
        sx={{
          textTransform: "unset",
          fontSize: "1.2em",
          mx: "5px",
          ...sx,
        }}
        disabled={disabled}
        {...buttonProps}
      >
        {props.children}
      </Button>
    </Link>
  );
}
