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
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Reveal from "./components/Reveal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full">
      <Reveal>
        <header className="w-full text-center p-36 lg:my-32 flex flex-col gap-12 items-center">
          <TypeAnimation
            sequence={[
              "Holiday?",
              1000,
              "Tropical?",
              1000,
              `Life Global.`,
              12000,
            ]}
            wrapper="span"
            speed={20}
            className="italic text-4xl lg:text-8xl font-bold"
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <Text className="text-base lg:text-xl">
            We provide a tropical family trip around the world with the best
            holiday and genuine ethnicity experience.
          </Text>
          <Button
            className="w-fit"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            onClick={() => router.push("/trip")}
          >
            VIEW TRIP
          </Button>
        </header>
      </Reveal>

      <Reveal>
        <div
          className="bg-white w-full p-12 flex flex-col gap-12"
          style={{ color: "teal", height: 600 }}
        >
          <Text className="text-3xl font-medium text-center">Our Value</Text>
          <HStack spacing={0} className="justify-center">
            <VStack spacing={6} className="w-full">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                maxW={600}
                maxH={100}
                className="align-middle items-center p-3 w-full"
              >
                <LockIcon className="text-3xl" color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Safe & Secure</Heading>
                    <Text className="text-xs mt-2">
                      Our services are secure and safe. We do have many trusted
                      partners to support our trip services.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                maxW={600}
                maxH={100}
                className="align-middle items-center p-3 w-full"
              >
                <CheckCircleIcon className="text-3xl" color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Complete</Heading>
                    <Text className="text-xs mt-2">
                      We have already brought participants to 120+ tropical
                      places around the world.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                maxW={600}
                maxH={100}
                className="align-middle items-center p-3 w-full"
              >
                <MoonIcon className="text-3xl" color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Comfort</Heading>
                    <Text className="text-xs mt-2">
                      Participants comfort is always number one. We provide
                      excellent accommodation and transportation.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </VStack>

            <Image
              src={"./tropical_1.jpg"}
              objectFit={"cover"}
              style={{
                borderRadius: 20,
                padding: 10,
                border: "1px solid gainsboro",
              }}
              className="w-0 h-0 lg:h-[400px] lg:w-full opacity-0 lg:opacity-100"
            />
          </HStack>
        </div>
      </Reveal>

      <Reveal>
        <div style={{ height: 600 }}>
          <div className="w-full grid lg:flex lg:gap-48 justify-center">
            <Image
              src={"../contact-us.svg"}
              className="w-[300px] lg:w-[550px] place-self-center"
            />
            <div className="text-center lg:text-left place-self-center">
              <Text className="text-3xl font-medium" style={{ color: "teal" }}>
                Need help?
              </Text>
              <Text style={{ color: "black" }}>
                {"We are always available!"}
              </Text>
              <Button
                className="w-fit mt-6"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                onClick={() => router.push("/contact-us")}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
