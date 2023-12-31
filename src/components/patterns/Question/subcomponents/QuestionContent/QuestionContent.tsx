import { Box, Typography } from "@mui/material";
import ABCAnsewer from "../../../ABCAnsewer/ABCAnsewer";
import YesNoAnseswer from "../../../YesNoAnsewer/YesNoAnsewer";
import { useEgzamControlContext } from "../../../../../context/egzamControls/egzamControls";
import type {
  BasicQuestion,
  SpecializedQuestion,
  ABCansewers,
  Ansewer,
  BasicAnsewer,
  SpecializedAnsewer,
} from "../../../../../types/globalTypes";

interface PropsBase {
  content: string;
  chosenAnsewer?: Ansewer;
}

interface BasicQuesitonProps extends PropsBase {
  type: BasicQuestion["type"];
  correctAnsewer?: boolean;
}

interface SpecializedQuestionProps extends PropsBase {
  type: SpecializedQuestion["type"];
  correctAnsewer?: keyof ABCansewers;
  ansewers: ABCansewers;
}

type Props = SpecializedQuestionProps | BasicQuesitonProps;

export default function QuestionContent(props: Props) {
  const { selectedAnsewer, setSelectedAnsewer } = useEgzamControlContext();

  const chosenAnsewer = selectedAnsewer ?? props.chosenAnsewer;

  return (
    <Box sx={{ gridRow: "3", gridColumn: "1/3", mt: "20px" }}>
      <Typography
        sx={(theme) => ({
          borderLeft: `3px solid ${theme.palette.primary.main}`,
          p: "5px",
        })}
        variant="h6"
      >
        {props.content}
      </Typography>
      <Box>
        {props.type === "basic" ? (
          <YesNoAnseswer
            setChosenAnsewer={setSelectedAnsewer}
            chosenAnsewer={chosenAnsewer as BasicAnsewer}
            correctAnsewer={props.correctAnsewer}
            size={5}
            sx={{ mt: "35px" }}
          />
        ) : (
          <ABCAnsewer
            ansewers={props.ansewers as ABCansewers}
            chosenAnsewer={chosenAnsewer as SpecializedAnsewer}
            correctAnsewer={props.correctAnsewer}
            setChosenAnsewer={setSelectedAnsewer}
            sx={{ mt: "35px" }}
          />
        )}
      </Box>
    </Box>
  );
}
