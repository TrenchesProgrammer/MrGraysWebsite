'use client'
import React from "react";
import "../app/globals.css";
import { Box, Flex, Text, Burger, Drawer, Stack, CloseButton } from "@mantine/core";
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
    const [opened, { toggle, close }] = useDisclosure();
    
    return (
      <>
        <Flex justify={'space-between'} align={'center'} className="navbar">
          <Box className={bodoniModa.className} pl={"1rem"} c={"white"}>
            <h2>MR GRAY'S</h2>
            <h5>TATTOO STUDIO</h5>
          </Box>
          <Box pr={"1rem"}>
            <Burger 
              color={'white'} 
              lineSize={2} 
              size="2rem" 
              opened={opened} 
              onClick={toggle} 
              aria-label="Toggle navigation"
            />
          </Box>
        </Flex>

        {/* Mobile Sidebar */}
        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="300px"
          padding="md"
          title={
            <Box className={bodoniModa.className}>
              <Text size="lg" fw={600}>MR GRAY'S</Text>
              <Text size="sm">TATTOO STUDIO</Text>
            </Box>
          }
          styles={{
            header: {
              backgroundColor: '#1a1a1a',
              borderBottom: '1px solid #333',
            },
            body: {
              backgroundColor: '#1a1a1a',
              padding: 0,
            },
            content: {
              backgroundColor: '#1a1a1a',
            }
          }}
        >
          <Stack p="md">
            <Link href="" onClick={close} style={{ textDecoration: 'none' }}>
              <Text c="white" size="lg" py="sm" style={{ borderBottom: '1px solid #333' }}>
                About
              </Text>
            </Link>
            <Link href="" onClick={close} style={{ textDecoration: 'none' }}>
              <Text c="white" size="lg" py="sm" style={{ borderBottom: '1px solid #333' }}>
                Our Artists
              </Text>
            </Link>
            <Link href="" onClick={close} style={{ textDecoration: 'none' }}>
              <Text c="white" size="lg" py="sm" style={{ borderBottom: '1px solid #333' }}>
                FAQ
              </Text>
            </Link>
            <Link href="" onClick={close} style={{ textDecoration: 'none' }}>
              <Text c="white" size="lg" py="sm" style={{ borderBottom: '1px solid #333' }}>
                Contact
              </Text>
            </Link>
            <Link href="" onClick={close} style={{ textDecoration: 'none' }}>
              <Box
                style={{
                  backgroundColor: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: '1px solid #fff',
                  textAlign: 'center',
                  marginTop: '20px'
                }}
              >
                <Text c="white" fw={600} size="lg">
                  GET TATTOOED
                </Text>
              </Box>
            </Link>
          </Stack>
        </Drawer>
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
          <Box pl={"2rem"} c={"white"} className={bodoniModa.className}>
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
              <Text c="white">Home</Text>
            </Link>
            <Link href="">
              <Text c="white">About</Text>
            </Link>
            <Link href="">
              <Text c="white">Our Artists</Text>
            </Link>
            <Link href="">
              <Text c="white">FAQ</Text>
            </Link>
            <Link href="">
              <Text c="white">Contact</Text>
            </Link>
            <Link href="">
              <Box
                style={{
                  backgroundColor: '#ff4444',
                  padding: '8px 16px',
                  borderRadius: '6px',
                }}
              >
                <Text c="white" fw={600}>GET TATTOOED</Text>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </>
    );
  };

  return <>{mobile ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;