import { HStack, Image, List, ListItem, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="w-full p-8" style={{ backgroundColor: "teal" }}>
      <div className="flex justify-between w-full lg:px-36">
        <Image alt={"/logo-LG.svg"} src="/logo-LG.svg" style={{ width: 72 }} />

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
              <FaInstagram className={"text-xl"} />
            </Link>
            <Link href="#">
              <FaFacebook className={"text-xl"} />
            </Link>
            <Link href="#">
              <FaXTwitter className={"text-xl"} />
            </Link>
          </HStack>
        </VStack>
      </div>
    </footer>
  );
}
