import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function FeaturedProduct1() {
  return (
    <Box width="534px" ml="auto" mr="auto" mb="95px">
      <Box position="relative">
        <Box width="534px" zIndex="2">
          <Image
            src="/images/featured-product1.jpg"
            layout="responsive"
            alt=""
            width="1068"
            height="1068"
          />
        </Box>
        <Text
          fontSize="100px"
          zIndex="10"
          color="#fff"
          position="absolute"
          textAlign="center"
          width="100%"
          height="100%"
          top="105px"
          fontFamily="AkzidenzGrotesk-Medium"
        >
          NEW
        </Text>
      </Box>
      <Heading
        as="h3"
        textAlign="center"
        fontSize="15px"
        fontFamily="AkzidenzGrotesk-Medium"
      >
        Sed egestas, nibh a condimentum imperdiet
      </Heading>
      <Text textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare,
        nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie
        quam justo ut lacus. Proin vitae
      </Text>
    </Box>
  );
}

export default FeaturedProduct1;
