'use client'
import React from "react";
import "../app/globals.css";
import { Box, Flex, Text, Burger } from "@mantine/core";
import Link from "next/link";
import "@mantine/core/styles.css";
import { Bodoni_Moda } from "next/font/google";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

const bodoniModa = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  const mobile = useMediaQuery("(max-width: 768px)");

  // Sidebar stays mounted always
  const Sidebar = () => (
    <Box
      bg="#000"
      h="93vh"
      w="200px"
      pos="fixed"
      top="7vh"
      right="0" // Position it at the right edge
      style={{
        zIndex: 9999,
        transform: opened ? "translateX(0)" : "translateX(100%)", // Fixed logic
        transition: "transform 0.3s ease",
      }}
    >
      <Box p="md" c="white">
        <Text>Menu Item 1</Text>
        <Text>Menu Item 2</Text>
        <Text>Menu Item 3</Text>
      </Box>
    </Box>
  );

  const MobileNav = () => (
    <>
      <Sidebar />
      <Flex justify="space-between" align="center" className="navbar">
        <Box className={bodoniModa.className} pl="1rem" c="white">
          <h2>MR GRAY'S</h2>
          <h5>TATTOO STUDIO</h5>
        </Box>
        <Box pr="1rem">
          <Burger
            color="white"
            lineSize={2}
            size="2rem"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Box>
      </Flex>
    </>
  );

  const DesktopNav = () => (
    <Flex
      h="4.5rem"
      justify="space-between"
      gap="lg"
      className="navbar"
    >
      <Box pl="2rem" c="white">
        <h2>MR GRAY'S</h2>
        <h5>TATTOO STUDIO</h5>
      </Box>
      <Flex
        style={{ borderRadius: "10px" }}
        gap="20px"
        align="center"
        pr="2rem"
      >
        <Link href=""><Text>Home</Text></Link>
        <Link href=""><Text>About</Text></Link>
        <Link href=""><Text>Our Artists</Text></Link>
        <Link href=""><Text>FAQ</Text></Link>
        <Link href=""><Text>Contact</Text></Link>
        <Link href="">GET TATTOOED</Link>
      </Flex>
    </Flex>
  );

  return mobile ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;