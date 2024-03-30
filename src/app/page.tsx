"use client";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  LockIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="w-full">
      <header className="w-full text-center p-36 my-28 flex flex-col gap-12 items-center">
        <TypeAnimation
          sequence={[
            "Holiday?",
            1000,
            "Tropical destination?",
            1000,
            `Life Global.`,
            12000,
          ]}
          wrapper="span"
          speed={20}
          className="italic text-8xl font-bold"
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
        <Text className="text-xl">
          We provide a tropical family trip around the world with the best
          holiday and genuine ethnicity experience.
        </Text>
        <Button
          className="w-fit"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
        >
          VIEW TRIP
        </Button>
      </header>
      <div
        className="bg-white w-full px-6 py-24 text-center flex flex-col gap-12"
        style={{ color: "teal", borderRadius: 12, height: 600 }}
      >
        <Text className="text-3xl font-medium">Our Value</Text>
        <HStack spacing={12} className="w-full justify-center">
          <Card maxW="sm" h={300}>
            <CardBody>
              <LockIcon boxSize={12} color={"teal"} />
              <Stack mt="6" spacing="3">
                <Heading size="md">Safe & Secure</Heading>
                <Text>
                  Our services are secure and safe. We do have many trusted
                  partners to support our trip services.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm" h={300}>
            <CardBody>
              <CheckCircleIcon boxSize={12} color={"teal"} />
              <Stack mt="6" spacing="3">
                <Heading size="md">Complete</Heading>
                <Text>
                  There is no need to ask about our experience. We have already
                  brought more than 50+ participants in our services to 120+
                  tropical places around the world.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm" h={300}>
            <CardBody>
              <MoonIcon boxSize={12} color={"teal"} />
              <Stack mt="6" spacing="3">
                <Heading size="md">Comfort</Heading>
                <Text>
                  Participants comfort is always number one. We provide
                  excellent accommodation and transportation.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </HStack>
      </div>
      <div
        className="bg-white w-full px-6 py-24 flex flex-col gap-12"
        style={{ color: "teal", borderRadius: 12, height: 600 }}
      >
        test
      </div>
      <footer className="bg-black">test</footer>
    </div>
  );
}
