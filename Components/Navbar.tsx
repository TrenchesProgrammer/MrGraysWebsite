import React from 'react'
import '../app/globals.css'
import {Box, Flex, Text} from '@mantine/core';
import Link from 'next/link';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
            <Flex h={'4rem'} justify={'space-around'}  gap={'lg'} className='navbar'>
                <Box c={'white'} >
                    <h2 >MR GRAY'S</h2>
                    <h5  >TATTOO STUDIO</h5>
                </Box>
                <Flex   style={{borderRadius:'10px'}}   gap={'20px'} align={'center'} >
                  <Link href=''>
                    <Text >Home</Text>
                  </Link>
                  <Link href=''>
                    <Text >About</Text>
                  </Link>
                  <Link href=''>
                    <Text >Our Artists</Text>
                  </Link>
                  <Link href=''>
                    <Text >FAQ</Text>
                  </Link>
                  <Link href=''>
                    <Text >Contact</Text>
                  </Link>   
                  <Link href=''>
                    Get Tattooed
                  </Link>       
                </Flex>

            </Flex>
    </>
  )
}

export default Navbar