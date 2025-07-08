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
  
    </>
  );
};

export default Page;
