import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function FeaturedProduct1() {
  const { scrollY } = useViewportScroll();
  const top = useTransform(scrollY, [855, 1100], [150, 385]);

  const MotionText = motion(Text);

  // scrollY.onChange((y) => {
  //   console.log(y);
  // });

  return (
    <Box
      overflow="hidden"
      width={{ base: '100%', md: '534px' }}
      ml="auto"
      mr="auto"
      mb="95px"
    >
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
        <MotionText
          fontSize="100px"
          zIndex="10"
          color="#fff"
          position="absolute"
          textAlign="center"
          width={{ base: '100%', md: '534px' }}
          height="100%"
          fontFamily="AkzidenzGrotesk-Medium"
          style={{ top: top }}
        >
          NEW
        </MotionText>
      </Box>
      <Heading
        as="h3"
        textAlign="center"
        fontSize="15px"
        fontFamily="AkzidenzGrotesk-Medium"
        mt="20px"
        mb="15px"
        color="#282728"
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
