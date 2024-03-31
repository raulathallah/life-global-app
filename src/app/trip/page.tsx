"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import formatCurrency from "../_lib/currencyFormat";
import { PhoneIcon } from "@chakra-ui/icons";
import Reveal from "../components/Reveal";

export default function Trip() {
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
    <div>
      <VStack className="justify-center">
        <Reveal>
          <div className="w-full text-center my-12 flex flex-col gap-6 items-center">
            <Text className="text-4xl font-bold">Our Trip</Text>
            <Text className="">
              We have 3 package that you can choose for tropical holiday!
            </Text>
            <Button
              className="w-fit"
              leftIcon={<PhoneIcon />}
              colorScheme="teal"
            >
              BOOK TRIP NOW
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <HStack spacing={12}>
            {trip.map((att) => (
              <Card
                maxW="md"
                h={600}
                borderRadius={"20px"}
                className="w-full"
                variant={"elevate"}
              >
                <Image
                  src={att.image}
                  h={350}
                  objectFit={"cover"}
                  borderRadius={"20px 20px 0 0"}
                />
                <CardBody className="flex flex-col gap-2">
                  <Text
                    className="text-3xl font-bold italic"
                    style={{ color: "teal" }}
                    textShadow={"lg"}
                  >
                    {att.name}
                  </Text>
                  <Text>{att.description}</Text>
                  <UnorderedList>
                    {att.place.map((e, i) => {
                      return <ListItem>{e}</ListItem>;
                    })}
                  </UnorderedList>
                  <Text
                    className="text-xl"
                    style={{ color: "teal" }}
                    textShadow={"lg"}
                  >
                    {formatCurrency(att.price)}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </HStack>
        </Reveal>
      </VStack>
    </div>
  );
}
