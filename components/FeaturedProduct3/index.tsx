import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function FeaturedProduct3() {
  return (
    <Box width="922px" ml="auto" mr="auto" mb="148px">
      <Box position="relative">
        <Box width="922px" zIndex="2">
          <Image
            src="/images/featured-product3.jpg"
            layout="responsive"
            alt=""
            width="1844"
            height="896"
          />
          <Text
            fontSize="75px"
            zIndex="10"
            color="#fff"
            position="absolute"
            textAlign="center"
            width="100%"
            height="100%"
            top="100px"
            fontFamily="AkzidenzGrotesk-Medium"
          >
            COLLECTION 01
          </Text>
        </Box>
      </Box>
      <Box d="flex" justifyContent="space-between" mt="63px">
        <Box width="428px">
          <Box position="relative">
            <Box width="428px" zIndex="2">
              <Image
                src="/images/featured-product4.jpg"
                layout="responsive"
                alt=""
                width="857"
                height="857"
              />
              <Text
                fontSize="40px"
                zIndex="10"
                color="#fff"
                position="absolute"
                textAlign="center"
                width="100%"
                height="100%"
                top="150px"
                fontFamily="AkzidenzGrotesk-Medium"
              >
                COLLECTION 02
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width="428px">
          <Box position="relative">
            <Box width="428px" zIndex="2">
              <Image
                src="/images/featured-product5.jpg"
                layout="responsive"
                alt=""
                width="857"
                height="857"
              />
              <Text
                fontSize="40px"
                zIndex="10"
                color="#fff"
                position="absolute"
                textAlign="center"
                width="100%"
                height="100%"
                top="150px"
                fontFamily="AkzidenzGrotesk-Medium"
              >
                COLLECTION 02
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturedProduct3;
