import React, { useState} from 'react';
import {Box, Button, Form, FormField, Header, RadioButtonGroup, Select, Text, TextArea, TextInput} from "grommet";
import {fetchSignUp} from "../actions";

const zones = ["us-east-2", "us-east-1", "us-west-1", "us-west-2"];
const COUNTRIES = ["US"];

function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [accaptedAgreement, setAccaptedAgreemant] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        country: COUNTRIES[0],
    })
    const onClose=()=>setAccaptedAgreemant(null)
    const onSubmit = ()=>{
        console.log("1111")
        setIsLoading(true);
        const signupData = {...formData};
        console.log(signupData)
        fetchSignUp(signupData)
            .then(resp=>{
                if (resp?.status === "OK") {
                    setIsLoading(false);
// show success msg
                }
            }).catch(()=>{
// show err msg
        })
    }
    return (
            <Form
                value={formData}
                onChange={nextValue => setFormData(nextValue)}
                onSubmit={onSubmit}

            >
                <Header >
                    Sign up for GreenLake for Data Fabric beta access
                </Header>
                <Box direction={"row"} justify={"center"}align={"center"}>
                   <Box width={"70px"}>
                       <Box  justify={"center"} direction={"column"} align={"center"} alignContent={"center"} alignSelf={"center"}>
                           <Text>Name</Text>
                       </Box>
                       <Box justify={"center"} direction={"column"} align={"center"} alignContent={"center"} alignSelf={"center"}>
                           <Text>Email</Text>
                       </Box>

                   </Box>
                    <Box width={"100%"}>
                        <FormField
                            htmlFor="text-input-id-name"
                            // label={"Cluster Name"}
                            name="name"
                            // className={"margin-r-5 width-50"}
                        >
                            <TextInput
                                autoFocus={true}
                                id="text-input-id-name"
                                name="name"
                            />
                        </FormField>
                    </Box>
                </Box>
                <Box direction={"row"} align={"center"}>
                    <Text margin={{right: "5px"}}>Name</Text>
                    <FormField
                        htmlFor="text-input-id-name"
                        // label={"Cluster Name"}
                        name="name"
                        className={"margin-r-5 width-50"}
                    >
                        <TextInput
                            autoFocus={true}
                            id="text-input-id-name"
                            name="name"
                        />
                    </FormField>
                </Box>


                <FormField
                    htmlFor="text-input-id-email"
                    label={"Email"}
                    name="email"
                    className={"margin-r-5 width-50"}
                >
                    <TextInput
                        autoFocus={true}
                        id="text-input-id-name"
                        name="email"
                    />
                </FormField>
                    <FormField label="Country" htmlFor="select-size" name={"country"} className={"width-50"}>
                        <Select
                            id="select-country"
                            placeholder="Select Country"
                            options={COUNTRIES}
                            // labelKey={(val)=>val + "TB"}
                            onChange={({ option }) => setFormData({
                                ...formData,
                                country: option
                            })}
                        />
                    </FormField>
                <Text>End User License Agreement</Text> <Button label={"Read and acccept"} onClick={()=>setAccaptedAgreemant(true)}/>
<Button label={"Register"} type={"submit"} />
            </Form>
    );
}

export default SignUp;