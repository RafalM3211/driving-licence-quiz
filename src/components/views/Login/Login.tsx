import { Box, Tabs, Tab } from "@mui/material";
import LoginForm from "./subcomponents/LoginForm";
import RegistryForm from "./subcomponents/RegistryForm";
import bgImage from "../../../images/backgrounds/wave.svg";
import { backgroundImg, flexCenter } from "../../../utility/styling";
import { useState } from "react";
import { useOnMount } from "../../../utility/hooks";
import { useUserContext } from "../../../context/user/user";

enum TabType {
  login = 0,
  registry = 1,
}

export default function Login() {
  const { setUser } = useUserContext();
  const [currentTab, setCurrentTab] = useState<TabType>(TabType.login);

  function handleTabChange(e: React.SyntheticEvent, newTab: TabType) {
    setCurrentTab(newTab);
  }

  useOnMount(() => {
    setUser(null);
  });

  return (
    <Box
      sx={{
        ...backgroundImg(bgImage),
        ...flexCenter,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          pb: "2em",
          position: "absolute",
          top: "30vh",
          width: "25%",
          ...flexCenter,
          flexDirection: "column",
        }}
      >
        <Tabs value={currentTab} onChange={handleTabChange}>
          <Tab label="zaloguj się" />
          <Tab label="zarejestruj się" />
        </Tabs>
        {currentTab == TabType.login ? <LoginForm /> : <RegistryForm />}
      </Box>
    </Box>
  );
}
