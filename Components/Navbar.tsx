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

  const mobile = useMediaQuery("(max-width: 768px)");
  const MobileNav = () => {
    const [opened, {toggle}] = useDisclosure();
    return (
      <>
        <Flex justify={'space-between'} align={'center'} className="navbar">
          <Box className={bodoniModa.className} pl={"1rem"} c={"white"}>
            <h2>MR GRAY'S</h2>
            <h5>TATTOO STUDIO</h5>
          </Box>
          <Box pr={"1rem"}>
            <Burger color={'white'} lineSize={2} size="2rem" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
          </Box>
        </Flex>
      </>
    );
  };
  const DesktopNav = () => {
    return (
      <>
        <Flex
          h={"4.5rem"}
          justify={"space-between"}
          gap={"lg"}
          className="navbar"
        >
          <Box pl={"2rem"} c={"white"}>
            <h2>MR GRAY'S</h2>
            <h5>TATTOO STUDIO</h5>
          </Box>
          <Flex
            style={{ borderRadius: "10px" }}
            gap={"20px"}
            align={"center"}
            pr={"2rem"}
          >
            <Link href="">
              <Text>Home</Text>
            </Link>
            <Link href="">
              <Text>About</Text>
            </Link>
            <Link href="">
              <Text>Our Artists</Text>
            </Link>
            <Link href="">
              <Text>FAQ</Text>
            </Link>
            <Link href="">
              <Text>Contact</Text>
            </Link>
            <Link href="">GET TATTOOED</Link>
          </Flex>
        </Flex>
      </>
    );
  };
  return <>{mobile ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
