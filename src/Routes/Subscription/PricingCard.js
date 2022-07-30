import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  List,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import { FiCheck } from "react-icons/fi";

export const PricingCard = (props) => {
  const { product } = props;
  return (
    <Box
      bg="bg-surface"
      borderRadius="2xl"
      boxShadow={mode("lg", "lg-dark")}
      px={{
        base: "6",
        md: "8",
      }}
      py="8"
    >
      <Stack spacing="8" textAlign="center">
        <Stack spacing="5" align="center">
          <Circle bg={mode("blue.50", "whiteAlpha.50")} size="12">
            <Icon as={product.icon} boxSize="6" color="accent" />
          </Circle>
          <Stack>
            <Text fontSize="xl" color="accent" fontWeight="semibold">
              {product.name}
            </Text>
            <Heading
              size={useBreakpointValue({
                base: "md",
                md: "lg",
              })}
            >
              {product.price}
            </Heading>
            <Text color="muted">{product.description}</Text>
          </Stack>
        </Stack>
        <List as="ul" spacing="4">
          {product.features.map((feature) => (
            <HStack key={feature} as="li" spacing="3">
              <Circle size="6" bg={mode("blue.50", "whiteAlpha.50")}>
                <Icon as={FiCheck} color="accent" />
              </Circle>
              <Text color="muted">{feature}</Text>
            </HStack>
          ))}
        </List>
        <Button variant="primary" size="lg">
          Get started
        </Button>
      </Stack>
    </Box>
  );
};
