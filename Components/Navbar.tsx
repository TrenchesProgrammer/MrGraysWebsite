import React from 'react'
import '../app/globals.css'
import {Box, Flex} from '@mantine/core';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
        <Box bg={''} w={'100%'} h={'5rem'}>
            <Flex>
                <Box>
                    <h2 style={{fontFamily:'Graduate'}}>MR GRAY'S</h2>
                    <h5  style={{fontFamily:'Asap condensed'}}>TATTOO STUDIO</h5>
                </Box>
                <Box w={'60%'} h={'100%'} >Navigation</Box>
                <Box w={'20%'} h={'100%'}>Contact</Box>
            </Flex>
        </Box>
    </>
  )
}

export default Navbar