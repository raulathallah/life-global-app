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
import { useEffect, useState } from "react";

const contact = [
  {
    icon: <FaWhatsapp color={"teal"} className="text-3xl" />,
    text: "+62-856-555-341",
  },
  {
    icon: <IoIosMail color={"teal"} className="text-3xl" />,
    text: "life.global@gmail.com",
  },
  {
    icon: <PhoneIcon color={"teal"} className="text-3xl" />,
    text: "021-22839201",
  },
];

export default function ContactUs() {
  const [trip, setTrip] = useState<Trip[]>([]);
  const getTrip = async () => {
    const response = await fetch("trip.json");
    const res = await response.json();
    setTrip(res);
  };
  useEffect(() => {
    getTrip();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col p-8 gap-8 justify-between lg:justify-center lg:grid grid-flow-col">
        <HStack
          spacing={0}
          style={{ border: "1px solid white" }}
          className="p-2 w-fit"
        >
          {trip.map((att) => (
            <Reveal delay={0} key={att.id}>
              <Image
                src={att.image}
                w={300}
                h={{ sm: 200, lg: 600 }}
                alt={att.image}
                objectFit={"cover"}
              />
            </Reveal>
          ))}
        </HStack>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Reveal delay={0.2}>
            <Text
              className="text-4xl font-bold text-center"
              style={{ color: "teal" }}
            >
              Contact Us
            </Text>
            <Text className="text-center" style={{ color: "black" }}>
              24/7 available through several contact.
            </Text>
          </Reveal>
          {contact.map((att, i) => (
            <Reveal delay={0.4 * i} key={i}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant={"outline"}
                w={400}
                maxH={100}
                style={{ borderRadius: "20px" }}
                className="align-middle items-center px-6"
              >
                {att.icon}
                <Stack>
                  <CardBody>
                    <Heading size="md">{att.text}</Heading>
                  </CardBody>
                </Stack>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
