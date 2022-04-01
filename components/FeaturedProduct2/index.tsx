import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function FeaturedProduct2() {
  return (
    <Box width="1125px" ml="auto" mr="auto" mb="95px">
      <Box position="relative">
        <Box width="1125px" zIndex="2">
          <Image
            src="/images/featured-product2.jpg"
            layout="responsive"
            alt=""
            width="2250"
            height="1432"
          />
          <Text
            fontSize="100px"
            zIndex="10"
            color="#fff"
            position="absolute"
            textAlign="center"
            width="100%"
            height="100%"
            top="220px"
            fontFamily="AkzidenzGrotesk-Medium"
          >
            THINGS
          </Text>
        </Box>
      </Box>
      <Heading as="h3" textAlign="center" fontSize="15px">
        Sed egestas, nibh a condimentum imperdiet
      </Heading>
      <Box w="534px" ml="auto" mr="auto">
        <Text textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare,
          nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie
          quam justo ut lacus. Proin vitae
        </Text>
      </Box>
    </Box>
  );
}

export default FeaturedProduct2;
