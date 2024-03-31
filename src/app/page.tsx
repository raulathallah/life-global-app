"use client";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  LockIcon,
  MoonIcon,
  PhoneIcon,
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
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const iconSize = "text-xl";
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
        className="bg-white w-full flex flex-col gap-12"
        style={{ borderRadius: 12, height: 600 }}
      >
        <HStack spacing={128} className="w-full justify-center">
          <VStack spacing={12} className="">
            <Text className="text-3xl font-medium" style={{ color: "teal" }}>
              Need help?
            </Text>
            <Text style={{ color: "black" }}>
              Don't worry, we are always available!
            </Text>
            <Button
              className="w-fit"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
            >
              CONTACT US
            </Button>
          </VStack>
          <Image src={"../contact-us.svg"} style={{ width: 500 }} />
        </HStack>
      </div>
      <div
        className="bg-teal-600 w-full p-8"
        style={{ borderRadius: "30px 30px 0 0" }}
      >
        <HStack className="w-full justify-center" spacing={40}>
          <Image src="/logo-LG.svg" style={{ width: 72 }} />

          <List spacing={3}>
            <ListItem>
              <Link href="#">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Our Trip</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Privacy Policy</Link>
            </ListItem>
          </List>
          <VStack spacing={6}>
            <Text>Get in touch</Text>
            <HStack spacing={3} className="w-full">
              <Link href="#">
                <FaInstagram className={iconSize} />
              </Link>
              <Link href="#">
                <FaFacebook className={iconSize} />
              </Link>
              <Link href="#">
                <FaXTwitter className={iconSize} />
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </div>
    </div>
  );
}
