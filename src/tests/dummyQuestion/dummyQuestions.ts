import type {
  ABCanswers,
  BasicQuestion,
  SpecializedQuestion,
} from "../../types/globalTypes";
import { createDummyExam } from "./helpers";

export const basic = {
  id: 6301,
  content:
    "Czy postąpisz właściwie umieszczając ostrzegawczy trójkąt odblaskowy w odległości 30-50 m za pojazdem, który uległ awarii na drodze ekspresowej?",
  correctAnswer: false,
  media: "question.jpg",
  type: "basic",
  value: 1,
} satisfies BasicQuestion;

export const answeredBasic = { ...basic, chosenAnswer: true };

export const basicWithVideo = {
  ...basic,
  id: 6245,
  media: "question.mp4",
};

export const answeredBasicWithVideo = { ...basicWithVideo, chosenAnswer: true };

export const specialized = {
  id: 10060,
  content:
    "Poruszasz się autostradą i zamierzasz ją opuścić. W którym miejscu rozpoczniesz hamowanie przed zjazdem z autostrady?",
  correctAnswer: "B",
  media: "question.jpg",
  type: "specialized",
  value: 3,
  answers: {
    A: "Przed wjazdem na pas wyłączenia (zjazdu).",
    B: "Po wjeździe na początek pasa wyłączenia (zjazdu). Po wjeździe na początek pasa wyłączenia (zjazdu) Po wjeździe na początek pasa wyłączenia (zjazdu)",
    C: "W dowolnym miejscu na autostradzie.",
  },
} satisfies SpecializedQuestion;

export const answeredSpecialized = {
  ...specialized,
  chosenAnswer: "A" as const,
};

export const exam = createDummyExam();
