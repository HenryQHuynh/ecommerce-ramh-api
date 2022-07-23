import React from "react";
import { useState } from "react";
import { registerUser } from "../../api";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(username);
  console.log(password);

  const handleSubmit = async (e) => {
    e.ppreventDefault();
    const registerInfo = await registerUser(username, password);
    setToken(registerInfo);
    setUsername("");
    setPassword("");
    navigate("/Home");
  };

  return (
    <Box h={"100vh"} bg={"#3F4E4F"}>
      <Container
        maxW="md"
        color={"#EFFFFD"}
        py={{
          base: "12",
          md: "24",
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Stack
              spacing={{
                base: "2",
                md: "3",
              }}
              textAlign="center"
            >
              <Heading
                size={useBreakpointValue({
                  base: "xs",
                  md: "sm",
                })}
              >
                Create an account
              </Heading>
              <Text color="muted">Start making your dreams come true</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Create Username</FormLabel>
                <Input
                  id="username"
                  placeholder="Create Username"
                  type="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Create Password</FormLabel>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
            </HStack>
            <Stack spacing="4" onSubmit={handleSubmit}>
              <Button type="submit" variant="solid" size="lg" bg={"#2C3639"}>
                Sign up
              </Button>
              <Button
                variant="secondary"
                //leftIcon={<GoogleIcon boxSize="5" />}
                iconSpacing="3"
              >
                Sign up with Google
              </Button>
            </Stack>
          </Stack>
          <HStack spacing="1" justify="center"></HStack>
        </Stack>
      </Container>
    </Box>
  );
}
