import { Box, Image, Text, Anchor } from "grommet";

const SignupSuccess = () => {
  return (
    <Box flex align="center" margin={{ top: "medium" }} alignSelf="center">
      <Box height="small" width="small">
        <Image fit="cover" src="/images/signup-success.png" />
      </Box>
      <Box margin={{ top: "large" }} width="575px">
        <Text size="xxlarge" color="text-strong">
          Your registration is completed.
        </Text>
        <Box margin={{ top: "large" }}>
          <Text size="medium" color="text-strong">
            Activate Account
          </Text>
          <Text size="large" color="text-strong">
            You’re almost there! We have sent an email to smith.john@hpe.com
          </Text>
          <Text size="large" color="text-strong">
            <Anchor href="#" color="text-strong">
              Resend mail
            </Anchor>{" "}
            if you did not recieve an email.
          </Text>
        </Box>
        <Box margin={{ top: "large" }}>
          <Text size="medium" color="text-weak">
            Access GreenLake for Data Fabric Dashboard.
          </Text>
          <Text size="large" color="text-weak">
            Go to link{" "}
            <Anchor color="text-weak" href="#">
              http://client.greenlake.hpe.gl-intg.com/
            </Anchor>
            to access the Beta program.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { SignupSuccess };
