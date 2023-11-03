import { Box } from "@mui/material";
import { flexCenter } from "../../../../../utility/styling";
import type { QuestionMode } from "../../types";
import type { QuestionType } from "../../../../../types/globalTypes";
import ExamMode from "./subcomponents/ExamMode";
import PreviewMode from "./subcomponents/PreviewMode";

interface Props {
  type: QuestionType;
  mode: QuestionMode;
}

export default function QuestionControls(props: Props) {
  return (
    <Box
      sx={(theme) => ({
        ...flexCenter,
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        ml: "30px",
        gridRow: "2",
        gridColumn: "2",

        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          ml: "0",
          mb: "20px",
          gridRow: "1",
          gridColumn: "1",
        },
      })}
    >
      {props.mode === "exam" ? <ExamMode type={props.type} /> : <PreviewMode />}
    </Box>
  );
}
