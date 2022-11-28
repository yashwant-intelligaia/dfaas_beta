import React from "react"; // useState
// import { Box, Heading } from "grommet";
// import Logo from "./logo.svg";
import "./App.sass";
// import SignUp from "./components/signupForm";
import { SignupPage, SignupSuccess, WarningPage } from "./pages";

function App() {
  // const [userData, setUserData] = useState({
  //   isAuth: false,
  //   customerid: null,
  //   customername: "",
  // });
  return (
    // <Box>
    //   <Box margin={{ left: "large", top: "medium" }} width={"medium"}>
    //     {" "}
    //     <img src={Logo} alt="Hpe" />
    //   </Box>
    //   <Box justify={"center"} align={"center"}>
    //     <Heading level={2}>Welcome to Ezmeral Data Fabric</Heading>
    //     <SignUp />
    //   </Box>
    // </Box>
    // <SignupPage />
    <WarningPage />
  );
}

export default App;
