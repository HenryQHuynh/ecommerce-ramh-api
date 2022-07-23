import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Register from "../Register/Register.jsx";
import { useState, useEffect } from 'react'
import Home from "../Home/Home.jsx"
const NavItem = (props) => <Box as="a" href="#" fontSize="sm" {...props} />;

export const Navbar = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  console.log(token);
  return (
    <Box as="header" pb="20">
      <Box borderBottomWidth="1px" px="4" bg="bg-surface">
        <Flex justify={"center"}>
          <HStack spacing={"2"}>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/Home"
                style={{
                  color: "#AAA492",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "semi-bold",
                }}
              >
                Home
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/products"
                style={{
                  color: "#AAA492",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "semi-bold",
                }}
              >
                Products
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/events"
                style={{
                  color: "#AAA492",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "semi-bold",
                }}
              >
                Events
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/profile"
                style={{
                  color: "#AAA492",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "semi-bold",
                }}
              >
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Button as="a" href="#" variant="ghost" size="md" fontSize="18px">
                Log in
              </Button>
            </NavItem>
            <NavItem>
            <Button
                as="a"
                href="/register"
                colorScheme="blue"
                size="sm"
                fontSize="18px"
              >
                Sign up
              </Button>
            </NavItem>
          </HStack>
        </Flex>
      </Box>
      <Routes>
        <Route path="*" element={<Home  token={token} />} />
        {/* <Route path="products" element ={<Products />} /> */}
        {/* <Route path="events" element ={<Events />} /> */}
        {/* <Route path="profile" element={<Profile token={token} />} /> */}
        {/* <Route path="login" element ={<Login />} /> */}
        <Route path="register" element={<Register setToken={setToken}/>} />
      </Routes>
    </Box>
  );
};
export default Navbar;
