import React, {useState} from "react";
import {Box, Heading} from "grommet";
import Logo from "./logo.svg"
import './App.sass';
import SignUp from "./components/signupForm";

function App() {
    const [userData, setUserData] = useState({isAuth: false, customerid: null, customername: ""});
    return <Box>
        <Box  margin={{left: "large", top: "medium"}} width={"medium"}>  <img src={Logo} alt="Hpe" /></Box>
        <Box justify={'center'} width={'xlarge'} align={'center'}>
            <Heading level={3}>Welcome to Ezmeral Data Fabric</Heading>
            <SignUp />
        </Box>
    </Box>
}

export default App;
