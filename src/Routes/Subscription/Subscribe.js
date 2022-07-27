import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { products } from "./data";
import { PricingCard } from "./PricingCard";

function Subscribe() {
  return (
    <Box as="section">
      <Container
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Stack
          spacing={{
            base: "16",
            md: "24",
          }}
        >
          <Stack
            spacing={{
              base: "4",
              md: "6",
            }}
          >
            <Stack spacing="3">
              <Text color="accent" fontWeight="semibold">
                Pricing
              </Text>
              <Heading
                size={useBreakpointValue({
                  base: "md",
                  md: "lg",
                })}
              >
                Get lifetime access
              </Heading>
            </Stack>
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              color="muted"
              maxW="3xl"
            >
              Get access to 210+ components and free updates. Customize it to
              your needs, and make it yours today!
            </Text>
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            columnGap="8"
            rowGap="6"
          >
            {products.map((product, id) => (
              <PricingCard key={id} product={product} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Subscribe;
