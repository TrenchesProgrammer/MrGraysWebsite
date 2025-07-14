"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import ScrollingColumn from "../Components/ScrollingColumn";
import "../app/globals.css";
import { Flex, Box } from "@mantine/core";
import { Bodoni_Moda, Poppins } from "next/font/google";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

const bodoniModa = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  // Gallery data organized by columns
  const galleryColumns: {
    images: string[];
    direction: "up" | "down";
    speed: number;
  }[] = [
    {
      images: [
        "/tattoo-sample-1.svg",
        "/tattoo-sample-2.jpg",
        "/tattoo-sample-3.jpg",
      ],
      direction: "up",
      speed: 25,
    },
    {
      images: [
        "/tattoo-sample-4.jpg",
        "/tattoo-sample-5.jpg",
        "/tattoo-sample-6.jpg",
      ],
      direction: "down",
      speed: 30,
    },
    {
      images: [
        "/tattoo-sample-7.jpg",
        "/tattoo-sample-8.jpg",
        "/tattoo-sample-9.jpg",
      ],
      direction: "up",
      speed: 22,
    },
    {
      images: [
        "/tattoo-sample-10.jpg",
        "/tattoo-sample-11.jpg",
        "/tattoo-sample-12.jpg",
      ],
      direction: "down",
      speed: 28,
    },
  ];

  return (
    <>
      <Navbar />
      <Flex
        pos={"relative"}
        pt="4.5rem"
        bg="black"
        gap="9px"
        style={{
          height: "100vh",
          overflow: "hidden",
          // border: "1px solid green",
        }}
      >
        {galleryColumns.map((column, index) => (
          <ScrollingColumn
            key={index}
            images={column.images}
            direction={column.direction}
            speed={column.speed}
          />
        ))}

        {/* <Box
          h={"10px"}
          w={"100%"}
          style={{
            boxShadow: "20px 0px 30px #000",
            backgroundColor: "#000",
            position: "absolute",
            bottom: "0",
          }}
        ></Box> */}
        <Box
          h={"250px"}
          style={{ position: "absolute", borderRadius: "10px" }}
          bottom={10}
          left={10}
          p={10}
          w={"200px"}
          bg={"#00000086"}
          c={"#fff"}
        >
          <Flex gap={'sm'}>
            <IconMapPin />
            <p>Magnolia, Tx</p>
          </Flex>

          <h4>OPEN</h4>
          <p>Tuesday - Thursday</p>
          <p>12pm - 10pm</p>
          <p>Friday - Saturday</p>
          <p>12pm - 10pm</p>

          <h4>CLOSED</h4>
          <p>Sunday - Monday</p>
        </Box>
        <Flex
          direction="column"
          top={"20%"}
          // justify="center"
          align="center"
          style={{
            flex: 1,
            color: "white",
            position: "absolute",
            width: "100%",
            height: "100%",
            fontFamily: bodoniModa.style.fontFamily,
          }}
        >
          <p
            style={{
              fontSize: "5rem",
              boxShadow: "20px 20px 20px 20px 30px #000",
            }}
          >
            Mr. Gray's Tattoo Studio
          </p>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "center",
              fontFamily: poppins.style.fontFamily,
            }}
          >
            Bringing your tattoo dreams to life with precision and artistry.
          </p>
          <Flex>
              
          </Flex>
        </Flex>
      </Flex>

      <Box>dgghh</Box>
    </>
  );
};

export default Page;
