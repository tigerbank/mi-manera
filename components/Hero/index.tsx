import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <Box bg="#d5d5d5" mb="94px">
      <Image
        src="/images/hero.jpg"
        layout="responsive"
        alt=""
        width="2700"
        height="1600"
      />
    </Box>
  );
}

export default Hero;
