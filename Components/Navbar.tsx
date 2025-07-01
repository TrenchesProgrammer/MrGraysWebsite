import React from 'react'
import '../app/globals.css'
import {Box, Flex, Text} from '@mantine/core';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
        {/* <Box > */}
            <Flex h={'5rem'} justify={'space-around'} align={'center'} gap={'lg'}>
                <Box>
                    <h2 style={{fontFamily:'Graduate'}}>MR GRAY'S</h2>
                    <h5  style={{fontFamily:'Asap condensed'}}>TATTOO STUDIO</h5>
                </Box>
                <Flex  h={'65%'} w={'80%'} style={{borderRadius:'10px'}} ff={'Graduate'} gap={'20px'} align={'center'} bg={'#d9d9d9'}>
                  <Text >Home</Text>
                  <Text >Our Artists</Text>
                  <Text >Navigation</Text>
                  <Text >Contact</Text>                  
                </Flex>

            </Flex>
        {/* </Box> */}
    </>
  )
}

export default Navbar