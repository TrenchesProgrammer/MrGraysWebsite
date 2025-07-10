"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import "../app/globals.css";
import { Flex, Text, Box } from "@mantine/core";
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
      <Flex h={"90vh"} bg={"black"} gap={'7px'}>
        <Flex direction={"column"} flex={1} gap={"7px"}>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"7px"}>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"7px"}>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
        </Flex>
        <Flex direction={"column"} flex={1} gap={"7px"}>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
          <Box h={"33%"} bg={"#fff"}></Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Page;
