'use client';

import React from 'react';
import Navbar from '../Components/Navbar';
import '../app/globals.css';
import { Flex, Text } from '@mantine/core';
import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';

// ✅ Re-import and initialize Archivo Black
const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'], display: 'swap' });

const Page = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        className="hero"
      >
        <Flex align="center" justify="center" gap="md" pt="lg">
          <Image width={100} height={50} src="/five-star.svg" alt="" />
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
