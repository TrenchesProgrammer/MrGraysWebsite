import React from 'react'
import Navbar from '../Components/Navbar'
import '../app/globals.css'
import {Flex, Text} from '@mantine/core';
const page = () => {
  return (
    <>
      <Navbar/>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} className='hero'>
        <Flex align={'center'} justify={'center'} gap={'md'} pt={'lg'} >
          <img style={{width:'150px'}} src="/five-star.svg" alt="" />
          <Text ff={'Graduate'}>Trusted by 5000+ customers</Text>
        </Flex>
        <h1 style={{fontFamily:'ARchivo Black', fontWeight:'bolder', fontSize:'80px'}}>WEAR YOUR STORY IN INK</h1>
        <p style={{fontFamily:'Graduate'}}>Custom tattoos by skilled artists in a clean, creative space</p>
      </div>
    </>
  )
}

export default page