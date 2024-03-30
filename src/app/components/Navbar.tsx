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
    <Box
      className="flex justify-between gap-8 hover:cursor-pointer"
      style={{ borderBottom: "1px solid white" }}
    >
      <Image
        src="/logo-LG.svg"
        style={{ width: 58 }}
        onClick={() => router.push("/")}
      />
      <HStack spacing={48}>
        <Link href="#" className="navbar-link">
          Our Trip
        </Link>
        <Link href="#" className="navbar-link">
          Contact Us
        </Link>
        <Link href="#" className="navbar-link">
          Privacy Policy
        </Link>
      </HStack>
    </Box>
  );
}
