import { Box, Image, Text, Anchor } from "grommet";
import styled from "styled-components";

const RoadmapContainer = styled(Box)`
width: 590px;
.roadmap{
  position:relative;
  width:10px;
}
.roadmap::before{
  content:"";
  display:block;
  width:10px;
  height: 10px;
  border-radius:100%;
  background: #000;
  position: absolute;
  top: 8px;
}
.roadmap::after {
  content: '';
  display: block;
  width: 2px;
  height: calc(100% - 20px);
  background: red;
  top: 23px;
  position: absolute;
  left: 4px;
}
.roadmap.success::before{
  background: #17EBA0;
}
.roadmap.success::after{
  background: #000;
}
.roadmap.active::before{
  background: #307299;
}
.roadmap.active::after{
  background: #ccc;
}
.roadmap.disabled::before{
  background: #CCCCCC;;
}
.roadmap.disabled::after{
  display: none;
}
`;

const SignupSuccess = () => {
  return (
    <Box flex align="center" margin={{ top: "medium" }}>
      <Box height="xsmall" width="xsmall">
        <Image fit="cover" src="/images/signup-success.png" />
      </Box>
      <RoadmapContainer margin={{ top: "large" }} >
        <Box flex direction="row" gap="small">
          <Box className="roadmap success"></Box>
          <Box pad={{ bottom: "large" }}>
          <Text size="xxlarge" color="text-strong">
            Your registration is complete.
          </Text>
          </Box>
        </Box>
        <Box flex direction="row" gap="small">
        <Box className="roadmap active"></Box>
        <Box pad={{ bottom: "large" }}>
          <Text size="medium" color="text-strong">
            Activate Account
          </Text>
          <Text size="large" color="text-strong">
            You’re almost there! We have sent an email to abc@gmail.com
          </Text>
          </Box>
        </Box>
        <Box flex direction="row" gap="small">
        <Box className="roadmap disabled"></Box>
        <Box pad={{ bottom: "large" }}>
          <Text size="medium" color="text-weak">
            Access GreenLake for Data Fabric Dashboard.
          </Text>
          <Text size="large" color="text-weak">
              Click <Anchor color="text-weak" href="#">here</Anchor> to access your Data Fabric.
          </Text>
          </Box>
        </Box>
      </RoadmapContainer>
    </Box>
  );
};

export { SignupSuccess };
