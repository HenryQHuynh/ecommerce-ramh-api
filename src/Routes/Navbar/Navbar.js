import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Register from "../Register/Register.jsx";
import { useState, useEffect } from "react";
import Home from "../Home/Home.jsx";
const NavItem = (props) => <Box as="a" href="#" fontSize="sm" {...props} />;

export const Navbar = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  console.log(token);
  return (
    <Box as="header" pb="20" height={"3em"} bg={"#2C3639"}>
      <Box px="4" bg={"#2C3639"} h={"6em"}>
        <Flex justify={"center"}>
          <HStack spacing={"2"} pt={"1.75em"}>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/Home"
                style={{
                  color: "#DCD7C9",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Home
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/products"
                style={{
                  color: "#DCD7C9",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Products
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/events"
                style={{
                  color: "#DCD7C9",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Events
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/profile"
                style={{
                  color: "#DCD7C9",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Profile
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/subscribe"
                style={{
                  color: "#DCD7C9",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Subscription
              </Link>
            </NavItem>
            <NavItem>
              <Button
                as="a"
                href="#"
                variant="ghost"
                size="md"
                color="#DCD7C9"
                fontSize="22px"
              >
                Log in
              </Button>
            </NavItem>
            <NavItem>
              <Button
                as="a"
                href="/register"
                colorScheme="blue"
                size="md"
                color="#DCD7C9"
                fontSize="22px"
              >
                Sign up
              </Button>
            </NavItem>
          </HStack>
        </Flex>
      </Box>
      <Routes>
        <Route path="*" element={<Home token={token} />} />
        {/* <Route path="products" element ={<Products />} /> */}
        {/* <Route path="events" element ={<Events />} /> */}
        {/* <Route path="profile" element={<Profile token={token} />} /> */}
        {/* <Route path="subscribe" element ={<Subscribe />} /> */}
        {/* <Route path="login" element ={<Login />} /> */}
        <Route path="register" element={<Register setToken={setToken} />} />
      </Routes>
    </Box>
  );
};
export default Navbar;
