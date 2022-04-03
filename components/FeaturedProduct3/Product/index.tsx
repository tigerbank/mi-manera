import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function Product({
  width,
  src,
  text,
  imgWidth,
  imgHeight,
}: {
  width: string | {};
  src: string;
  text: string;
  imgWidth: number;
  imgHeight: number;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const MotionBox = motion(Box);
  return (
    <Link passHref href="#">
      <Box
        width={width}
        height="100%"
        overflow="hidden"
        cursor="pointer"
        onMouseEnter={() => {
          setShowVideo(true);
        }}
        onMouseLeave={() => {
          setShowVideo(false);
        }}
      >
        <Box position="relative">
          <Box width={width} zIndex="2">
            <Image
              src={src}
              layout="responsive"
              alt=""
              width={imgWidth}
              height={imgHeight}
            />

            <AnimatePresence>
              {showVideo && (
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  as="video"
                  autoPlay
                  muted
                  loop
                  objectFit="cover"
                  width="100%"
                  zIndex={1}
                  position="absolute"
                  top="0px"
                  height="100%"
                >
                  <source src="/video/mockup_video576.mp4" type="video/mp4" />
                </MotionBox>
              )}
            </AnimatePresence>

            <Text
              fontSize={{ base: '35px', md: '40px' }}
              zIndex="10"
              color="#fff"
              position="absolute"
              textAlign="center"
              width="100%"
              height="100%"
              top="calc(50% - 40px)"
              fontFamily="AkzidenzGrotesk-Medium"
            >
              {text}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default Product;
