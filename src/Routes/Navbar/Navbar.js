import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";

const HamburgerIcon = (props) => (
  <svg
    viewBox="0 0 80 62"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M80 0H0V6H80V0Z"></path>
    <path d="M80 28H0V34H80V28Z"></path>
    <path d="M80 56H0V62H80V56Z"></path>
  </svg>
);

const NavItem = (props) => <Box as="a" href="#" fontSize="sm" {...props} />;

export const Navbar = () => {
  const nav = useDisclosure();
  const ref = React.useRef(null);
  return (
    <Box as="header" pb="20">
      <Box borderBottomWidth="1px" px="4" bg="bg-surface">
        <Flex align="center" justify="space-between" height="4.5rem">
          {/* <Logo /> */}
          <HStack spacing="2">
            <Button as="a" href="#" variant="ghost" size="sm">
              Log in
            </Button>
            <Button as="a" href="#" colorScheme="blue" size="sm">
              Sign up
            </Button>
            <IconButton
              size="sm"
              variant="ghost"
              icon={<HamburgerIcon />}
              aria-label="Toggle menu"
              {...nav.getButtonProps()}
            />
          </HStack>
        </Flex>
      </Box>

      <Flex
        ref={ref}
        justify="center"
        align="center"
        initial={false}
        hidden={!nav.isOpen}
        aria-label="Submenu"
        bg="bg-surface"
        height="16"
        borderBottomWidth="1px"
        position="absolute"
        width="full"
        top="4.5rem"
        zIndex={-1}
        as={motion.nav}
        variants={{
          open: {
            y: "0",
            transition: {
              ease: [0.75, 0, 0.25, 1],
            },
          },
          closed: {
            y: "-100%",
          },
        }}
        animate={nav.isOpen ? "open" : "closed"}
        onAnimationStart={() => {
          ref.current?.removeAttribute("hidden");
        }}
        onAnimationComplete={() => {
          if (!ref.current) return;
          ref.current.hidden = !nav.isOpen;
        }}
      >
        <HStack spacing="6">
          <NavItem color="accent" fontWeight="semibold">
            Pricing
          </NavItem>
          <NavItem>Career</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Careers</NavItem>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;
