"use client";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Reveal from "../components/Reveal";
import { PhoneIcon } from "@chakra-ui/icons";

export default function ContactUs() {
  return (
    <div className="">
      <div className="flex flex-col p-8 gap-8 justify-between">
        <HStack spacing={0} className="">
          <Reveal delay={0.2}>
            <Image
              src="/tropical_2.jpg"
              w={300}
              h={{ sm: 200 }}
              alt="tropical_2.jpg"
              objectFit={"cover"}
            />
          </Reveal>
          <Reveal delay={0.4}>
            <Image
              src="/tropical_3.jpg"
              w={300}
              maxW={300}
              h={{ sm: 200 }}
              alt="/tropical_3.jpg"
              objectFit={"cover"}
            />
          </Reveal>
          <Reveal delay={0.6}>
            <Image
              src="/tropical_4.jpg"
              w={300}
              h={{ sm: 200 }}
              alt="/tropical_4.jpg"
              objectFit={"cover"}
            />
          </Reveal>
        </HStack>
        <Reveal>
          <div className="grid gap-4">
            <Reveal delay={0.2}>
              <Text className="text-4xl font-bold">Contact Us</Text>
              <Text className="">24/7 available through several contact.</Text>
            </Reveal>
            <Reveal delay={0.4}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                w={400}
                maxH={100}
                style={{ borderRadius: "20px" }}
                className="align-middle items-center px-6 py-2"
              >
                <FaWhatsapp color={"teal"} className="text-3xl" />
                <Stack>
                  <CardBody>
                    <Heading size="md">+62-856-555-341</Heading>
                  </CardBody>
                </Stack>
              </Card>
            </Reveal>
            <Reveal delay={0.6}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                w={400}
                maxH={100}
                style={{ borderRadius: "20px" }}
                className="align-middle items-center px-6 py-2"
              >
                <IoIosMail color={"teal"} className="text-3xl" />
                <Stack>
                  <CardBody>
                    <Heading size="md">life.global@gmail.com</Heading>
                  </CardBody>
                </Stack>
              </Card>
            </Reveal>
            <Reveal delay={0.8}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"elevated"}
                w={400}
                maxH={100}
                style={{ borderRadius: "20px" }}
                className="align-middle items-center px-6 py-2"
              >
                <PhoneIcon color={"teal"} className="text-3xl" />
                <Stack>
                  <CardBody>
                    <Heading size="md">021-22839201</Heading>
                  </CardBody>
                </Stack>
              </Card>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
