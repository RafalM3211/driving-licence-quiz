import { Stack } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../../atoms/TextInput/TextInput";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../../core/services/user";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../../atoms/SuccessMessage/SuccessMessage";
import LoadingButton from "../../../atoms/LoadingButton/LoadingButton";
import { useUserContext } from "../../../../context/user/user";
import { useNavigate } from "react-router-dom";
import type { User } from "../../../../types/globalTypes";

export default function LoginForm() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const {
    mutate,
    isLoading,
    isError: isLoginError,
    isSuccess,
  } = useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      const user = (await data.json()) as User;
      setUser(user);
      navigate("/");
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("to pole jest wymagane")
            .email("niepoprwany adres email"),
          password: Yup.string().required("to pole jest wymagane"),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => {
          if (isLoginError && !formik.isValid) {
            formik.setErrors({
              email: "",
              password: "",
            });
          }
          return (
            <Form style={{ width: "100%" }}>
              <Stack
                spacing={3}
                sx={{ pt: "20px", mb: "10px" }}
                data-testid="clickaway"
              >
                <TextInput label="email*" name="email" variant="standard" />
                <TextInput
                  label="hasło*"
                  type="password"
                  name="password"
                  variant="standard"
                />
                <LoadingButton
                  loading={isLoading}
                  disabled={!formik.isValid}
                  type="submit"
                >
                  zaloguj
                </LoadingButton>
              </Stack>
            </Form>
          );
        }}
      </Formik>
      {isLoginError ? (
        <ErrorMessage sx={{ fontSize: "0.9em" }}>
          Błędny email lub hasło
        </ErrorMessage>
      ) : (
        <></>
      )}
      {isSuccess ? (
        <SuccessMessage sx={{ fontSize: "0.9em" }}>
          Zalowowano pomyślnie!
        </SuccessMessage>
      ) : (
        <></>
      )}
    </>
  );
}
