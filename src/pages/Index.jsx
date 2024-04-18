import { Button, Box, Center, Text } from "@chakra-ui/react";
import { FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box p={8} bg="white" boxShadow="md" borderRadius="lg">
        <Text fontSize="2xl" mb={4} fontWeight="bold" textAlign="center">
          Join Our Waitlist
        </Text>
        <Button size="lg" colorScheme="teal" leftIcon={<FaClipboardList />} onClick={() => alert("Placeholder for waitlist functionality")}>
          Sign Up Now
        </Button>
      </Box>
    </Center>
  );
};

export default Index;
