import React from 'react'
import '../app/globals.css'
import {Box, Flex, Text} from '@mantine/core';
import Link from 'next/link';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
            <Flex h={'5rem'} justify={'space-around'} align={'center'} gap={'lg'} className='navbar'>
                <Box>
                    <h2 >MR GRAY'S</h2>
                    <h5  >TATTOO STUDIO</h5>
                </Box>
                <Flex  h={'65%'} w={'80%'} style={{borderRadius:'10px'}}  justify={'space-around'} gap={'40px'} align={'center'} bg={'#d9d9d9'}>
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
                    <Text >Frequently Asked Questions</Text>
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