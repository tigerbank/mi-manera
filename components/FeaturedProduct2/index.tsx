import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function FeaturedProduct2() {
  const { scrollY } = useViewportScroll();
  const top = useTransform(scrollY, [1598, 1900], [220, 570]);

  const MotionText = motion(Text);

  // scrollY.onChange((y) => {
  //   console.log(y);
  // });

  return (
    <Box
      width={{ base: '100%', lg: '1125px' }}
      ml="auto"
      mr="auto"
      mb="95px"
      overflow="hidden"
    >
      <Box position="relative">
        <Box width={{ base: '100%', lg: '1125px' }} height="716px" zIndex="2">
          <Image
            src="/images/featured-product2.jpg"
            layout="fill"
            alt=""
            width="2250"
            height="1432"
            objectFit="cover"
          />
          <MotionText
            fontSize="100px"
            zIndex="10"
            color="#fff"
            position="absolute"
            textAlign="center"
            width="100%"
            height="100%"
            top="220px"
            fontFamily="AkzidenzGrotesk-Medium"
            style={{ top: top }}
          >
            THINGS
          </MotionText>
        </Box>
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
