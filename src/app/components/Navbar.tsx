"use client";
import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <Box
      className="flex gap-8 hover:cursor-pointer"
      style={{ borderBottom: "1px solid dodgerblue" }}
    >
      <Stack>
        <Text
          onClick={() => router.push("/")}
          fontSize={"2xl"}
          className="italic"
          fontWeight={"bold"}
          color="dodgerblue"
        >
          Life Global
        </Text>
      </Stack>

      <HStack spacing={6}>
        <Link>Catalog</Link>
        <Link>Contact</Link>
        <Link>Privacy Policy</Link>
      </HStack>
    </Box>
  );
}
