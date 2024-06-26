"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
    <div className="bg-white h-full">
      <VStack className="justify-center" style={{ color: "teal" }}>
        <Reveal>
          <div className="w-full text-center my-12 flex flex-col gap-6 items-center">
            <Text className="text-4xl font-bold">Our Trip</Text>
            <Text className="">
              We have 3 package that you can choose for tropical holiday!
            </Text>
            <a href="/contact-us">
              <Button
                className="w-fit"
                leftIcon={<PhoneIcon />}
                colorScheme="teal"
              >
                BOOK TRIP NOW
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid lg:flex gap-2 lg:gap-12 lg:w-[1200px]">
            {trip.map((att) => (
              <Card
                key={att.id}
                w={{ sm: 500 }}
                borderRadius={"20px"}
                className="w-[100%]"
                variant={"outline"}
              >
                <Image
                  src={att.image}
                  alt={att.image}
                  objectFit={"cover"}
                  className="w-full h-[200px]"
                  borderRadius="20px 20px 0 0"
                />
                <CardBody className="flex flex-col gap-2">
                  <Text
                    className="text-xl font-bold italic"
                    style={{ color: "teal" }}
                    textShadow={"lg"}
                  >
                    {att.name}
                  </Text>
                  <Text className="text-xs">{att.description}</Text>
                  <UnorderedList>
                    {att.place.map((e, i) => {
                      return (
                        <ListItem key={e} className="text-xs lg:text-base">
                          {e}
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </CardBody>
                <CardFooter>
                  <Text
                    className="text-xl"
                    style={{ color: "teal" }}
                    textShadow={"lg"}
                  >
                    {formatCurrency(att.price)}
                  </Text>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Reveal>
      </VStack>
    </div>
  );
}
