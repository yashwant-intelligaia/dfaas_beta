import { Box, Heading, Image, Text } from "grommet";

const WarningPage = () => {
  return (
    <Box>
      <Box height="small" width="small">
        <Image fit="cover" src="/images/warning.png" />
      </Box>
      <Heading level={3}>Oops! Looks like the Beta got oversubscribed.</Heading>
      <Text>
        However stay tuned, we are working hard to get you in. We will email you
        when ready.
      </Text>
    </Box>
  );
};

export { WarningPage };
