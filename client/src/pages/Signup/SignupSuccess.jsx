import { Box, Image } from "grommet";

const SignupSuccess = () => {
  return (
    <Box>
      <Box height="small" width="small">
        <Image fit="cover" src="/images/signup-success.png" />
      </Box>
      <Box>Your registration is completed.</Box>
      <Box>
        Activate Account
        <br />
        You’re almost there! We have sent an email to smith.john@hpe.com
        <br /> Resend mail if you did not recieve an email.
      </Box>
      <Box>
        Access GreenLake for Data Fabric Dashboard.
        <br />
        Go to link http://client.greenlake.hpe.gl-intg.com/ to access the Beta
        program.
      </Box>
    </Box>
  );
};

export { SignupSuccess };
