import React from 'react'
import '../app/globals.css'
import {Box, Flex} from '@mantine/core';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
        <Box w={'100%'} h={'5rem'}>
            <Flex>
                <Box>
                    <h2 style={{fontFamily:''}}>MR GRAY'S</h2>
                    <h5>TATTOO STUDIO</h5>
                    {/* <img style={{width:'50px', height:'50px', borderRadius:'50%'}} src='logo.jpeg' alt="Mr gray's Tattoo studio logo" /> */}
                </Box>
                <Box w={'60%'} h={'100%'} >Navigation</Box>
                <Box w={'20%'} h={'100%'}>Contact</Box>
            </Flex>
        </Box>
    </>
  )
}

export default Navbar