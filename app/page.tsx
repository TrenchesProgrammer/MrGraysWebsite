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

// Reusable ScrollingColumn component
const ScrollingColumn = ({ images, direction = "up", speed = 20 }) => {
  const animationName = direction === "up" ? "scrollUp" : "scrollDown";
  const animationDuration = `${speed}s`;

  return (
    <Flex 
      direction="column" 
      flex={1} 
      gap="9px"
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Box
        style={{
          animation: `${animationName} ${animationDuration} linear infinite`,
          display: "flex",
          flexDirection: "column",
          gap: "9px",
        }}
      >
        {/* Render images twice for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            className="hero-gallery-container"
            h="34vh"
            style={{
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              alt={`mr gray tattoo sample ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              src={src}
            />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

const Page = () => {
  // Gallery data organized by columns
  const galleryColumns = [
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
      <Flex pos={'relative'} pt="4.5rem" bg="black" gap="9px" style={{ height: "100vh", overflow: "hidden" }}>
        {galleryColumns.map((column, index) => (
          <ScrollingColumn
            key={index}
            images={column.images}
            direction={column.direction}
            speed={column.speed}
          />
        ))}
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{ flex: 1, color: "white", position:'absolute', width:'100%', height:'100%',  fontFamily: archivoBlack.style.fontFamily }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem", boxShadow: '20px 20px 20px 20px 30px #000' }}>Mr. Gray Tattoo</h1>
          <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
            Bringing your tattoo dreams to life with precision and artistry.
          </p>
        </Flex>
        <Box h={'10px'} w={'100%'} style={{boxShadow: '20px 0px 30px #000', backgroundColor:'#000', position:'absolute', bottom:'0',}}></Box>
      </Flex>


    </>
  );
};

export default Page;