"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import "../app/globals.css";
import { Flex, Box } from "@mantine/core";
import { Archivo_Black } from "next/font/google";
import Image from "next/image";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  return (
    <>
      <Navbar />
      <Flex pt={'4.5rem'} bg={"black"} gap={'9px'}>
        <Flex direction={"column"}  flex={1} gap={"9px"}>
          <Box className="hero-gallery-container" h={"34vh"}>
            <Box style={{width:'100%', height:'100%', position:'relative'}}>
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-1.svg'/>
            </Box>
          </Box>
          <Box className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-2.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-3.jpg'/>
          </Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"9px"}>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-4.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-5.jpg'/>

          </Box>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-6.jpg'/>
          </Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"9px"}>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-7.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-8.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"} >
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-9.jpg'/>
          </Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"9px"}>
          <Box  className="hero-gallery-container" h={"34vh"}>
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-10.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"}>
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-11.jpg'/>
          </Box>
          <Box  className="hero-gallery-container" h={"34vh"}>
              <Image alt="mr gray tattoo sample" height={200} width={200} src='/tattoo-sample-12.jpg'/>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
