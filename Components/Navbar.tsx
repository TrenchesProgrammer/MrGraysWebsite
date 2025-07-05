import React from 'react'
import '../app/globals.css'
import {Box, Flex, Text} from '@mantine/core';
import '@mantine/core/styles.css';
const Navbar = () => {
  return (
    <>
            <Flex h={'5rem'} justify={'space-around'} align={'center'} gap={'lg'}>
                <Box>
                    <h2 style={{fontFamily:'Graduate'}}>MR GRAY'S</h2>
                    <h5  >TATTOO STUDIO</h5>
                </Box>
                <Flex  h={'65%'} w={'80%'} style={{borderRadius:'10px'}} ff={'Graduate'} justify={'space-around'} gap={'40px'} align={'center'} bg={'#d9d9d9'}>
                  <Text >Home</Text>
                  <Text >About</Text>
                  <Text >Our Artists</Text>
                  <Text >Frequently Asked Questions</Text>
                  <Text >Contact</Text>        
                  <button style={{backgroundColor:'black', color:'white', border:'none', borderRadius:'7px', padding:'5px'}}>Get Tattooed</button>          
                </Flex>

            </Flex>
    </>
  )
}

export default Navbar