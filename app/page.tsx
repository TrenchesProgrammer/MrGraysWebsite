"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import ScrollingColumn from "../Components/ScrollingColumn";
import "../app/globals.css";
import { Flex, Box } from "@mantine/core";
import { Bodoni_Moda, Poppins } from "next/font/google";
import { IconMapPin } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
import Faq from "../Components/Faq";

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
  const mobile = useMediaQuery("(max-width: 768px)");
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
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <Flex
        pos={"relative"}
        // pt="4.5rem"
        bg="black"
        gap="9px"
        className="hero"
        style={{
          height: "92vh",
          overflow: "hidden",
        }}
      >
        {galleryColumns
          .slice(0, mobile ? 2 : galleryColumns.length)
          .map((column, index) => (
            <ScrollingColumn
              key={index}
              images={column.images}
              direction={column.direction}
              speed={column.speed}
            />
          ))}

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
          <Flex gap={"sm"}>
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
          top={"25%"}
          gap={"50px"}
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
          <Box>
            <p
              style={{
                textAlign: "center",
                fontSize: "clamp(2rem, 5vw, 10rem)",
              }}
            >
              MR GRAY'S TATTOO STUDIO
            </p>
            <p
              style={{
                fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
                textAlign: "center",
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Bringing your tattoo dreams to life with precision and artistry.
            </p>
          </Box>
          <Flex direction={mobile ? "column" : "row"} gap={"10px"}>
            <Link className={poppins.className} href="/book-appointment">
              OUR ARTISTS
            </Link>
            <Link className={poppins.className} href="/get-tattooed">
              GET TATTOOED
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <div style={{ marginTop: "50px" }}>
        <h1 className={bodoniModa.className} style={{ textAlign: "center" }}>
          About Us
        </h1>
        <Flex justify="space-around" direction={mobile ? "column-reverse" : "row"}>
          <div>
            <p>Welcome to Mr. Gray's Tattoo Studio, where art meets skin.</p>
            <p>
              Our studio is dedicated to providing a unique and personalized
              tattoo experience.
            </p>
            <p>
              With a team of skilled artists, we bring your ideas to life with
              precision and creativity.
            </p>
            <p>
              Whether you're looking for a small design or a full sleeve, we are
              here to help you every step of the way.
            </p>
          </div>
          <div>
            <Image
              src="/tattoo-studio.webp"
              alt=""
              // style={{ borderRadius: "10px" }}
              width={mobile ? 410 : 540}
              height={mobile ? 300 : 400}
              // height={400}
              // width={540}
            />
          </div>
        </Flex>
      </div>
      <div>
        <h1 className={bodoniModa.className} style={{ textAlign: "center" }}>
          Our Artists
        </h1>

      </div>
      <div>
        <Faq bodoniModa={bodoniModa.className} />
      </div>
    </div>
  );
};

export default Page;
