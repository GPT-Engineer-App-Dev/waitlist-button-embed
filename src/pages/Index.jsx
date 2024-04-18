import { Button, Box, Center } from "@chakra-ui/react";
import { FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
        <Button size="lg" colorScheme="teal" leftIcon={<FaClipboardList />} onClick={() => alert("Placeholder for waitlist functionality")}>
          Sign Up Now
        </Button>
      </Box>
    </Center>
  );
};

export default Index;
