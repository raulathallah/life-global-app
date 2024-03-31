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
  const iconSize = "text-xl";
  const router = useRouter();
  return (
    <div className="w-full">
      <Reveal>
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
            onClick={() => router.push("/trip")}
          >
            VIEW TRIP
          </Button>
        </header>
      </Reveal>

      <Reveal>
        <div
          className="bg-white w-full p-12 flex flex-col gap-12"
          style={{ color: "teal", borderRadius: 12, height: 600 }}
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
                className="align-middle items-center p-3"
              >
                <LockIcon boxSize={12} color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Safe & Secure</Heading>
                    <Text py="2" className="text-sm">
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
                className="align-middle items-center p-3"
              >
                <CheckCircleIcon boxSize={12} color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Complete</Heading>
                    <Text py="2" className="text-sm">
                      There is no need to ask about our experience. We have
                      already brought more than 50+ participants in our services
                      to 120+ tropical places around the world.
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
                className="align-middle items-center p-3"
              >
                <MoonIcon boxSize={12} color={"teal"} />
                <Stack>
                  <CardBody>
                    <Heading size="md">Comfort</Heading>
                    <Text py="2" className="text-sm">
                      Participants comfort is always number one. We provide
                      excellent accommodation and transportation.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </VStack>

            <Image
              src={"./tropical_1.jpg"}
              h={400}
              w={"100%"}
              objectFit={"cover"}
              style={{
                borderRadius: 20,
                padding: 10,
                border: "1px solid gainsboro",
              }}
            />
          </HStack>
        </div>
      </Reveal>

      <Reveal>
        <div
          className="bg-white w-full flex flex-col gap-12"
          style={{ borderRadius: 12, height: 600 }}
        >
          <HStack spacing={128} className="w-full justify-center">
            <Image src={"../contact-us.svg"} style={{ width: 500 }} />
            <VStack spacing={12} className="">
              <Text className="text-3xl font-medium" style={{ color: "teal" }}>
                Need help?
              </Text>
              <Text style={{ color: "black" }}>
                {"Don't worry, we are always available!"}
              </Text>
              <Button
                className="w-fit"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                onClick={() => router.push("/contact-us")}
              >
                CONTACT US
              </Button>
            </VStack>
          </HStack>
        </div>
      </Reveal>

      <div
        className="bg-teal-600 w-full p-8"
        style={{ borderRadius: "30px 30px 0 0" }}
      >
        <HStack className="w-full justify-center" spacing={40}>
          <Image
            alt={"/logo-LG.svg"}
            src="/logo-LG.svg"
            style={{ width: 72 }}
          />

          <List spacing={3}>
            <ListItem>
              <Link href="#">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/trip">Our Trip</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact-us">Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
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
