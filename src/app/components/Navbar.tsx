"use client";
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <Box className="grid lg:flex justify-center lg:justify-between gap-8 hover:cursor-pointer p-10">
      <div className="place-self-center">
        <Image
          src="/logo-LG.svg"
          style={{ width: 58 }}
          className="text-center"
          onClick={() => router.push("/")}
        />
      </div>

      <HStack spacing={48} className="">
        <Link href="/trip" className="">
          <p className="">Our Trip</p>
        </Link>
        <Link href="/contact-us" className="">
          Contact Us
        </Link>
        <Link href="/privacy-policy" className="">
          Privacy Policy
        </Link>
      </HStack>
    </Box>
  );
}
