'use client';

import React from 'react';
import Navbar from '../Components/Navbar';
import '../app/globals.css';
import { Flex, Text } from '@mantine/core';
import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';


const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'], display: 'swap' });

const Page = () => {
  return (  
    <>
      <Navbar />
      <div
        style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', position:'relative', width: '100%', height: '87.3vh', border:'1px solid black' }}
        className="hero"

      >
        <Image style={{position:'absolute', zIndex:'-1', objectFit:'cover'}}  fill priority src='/tattoo-studio.webp' alt="mr gray's tattoo website background"/>
        <Flex align="center" justify="center" gap="md" pt="lg">
          <Image width={100} height={50} src="/five-star.svg" alt="mr gray's tattoo website 5 star" />
          <Text>Trusted by 5000+ customers</Text>
        </Flex>
        <h1 className={archivoBlack.className} style={{ fontWeight: 'bolder', fontSize: '80px' }}>
          WEAR YOUR STORY IN INK
        </h1>

        <p>Custom tattoos by skilled artists in a clean, creative space</p>
      </div>
    </>
  );
};

export default Page;
