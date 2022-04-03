import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.15]);
  const top = useTransform(scrollY, [0, 400, 800], [68, 20, 20]);

  const width = useTransform(scrollY, [0, 400], [800, 195]);

  const MotionBox = motion(Box);

  // scrollY.onChange((y) => {
  //   console.log(y);
  // });

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  }, []);

  return (
    <Box
      mb="94px"
      position="relative"
      height="800px"
      width={{ base: '100%', xl: '1350px' }}
      ml="auto"
      mr="auto"
    >
      <Box
        position="relative"
        ml="auto"
        mr="auto"
        width={{ base: '100%', xl: '1350px' }}
        height="800px"
      >
        <Image src="/images/hero.jpg" layout="fill" alt="" objectFit="cover" />
      </Box>

      {showVideo && (
        <MotionBox
          as="video"
          autoPlay
          muted
          loop
          objectFit="cover"
          width={{ base: '100%', xl: '1350px' }}
          height="800px"
          zIndex={1}
          position="absolute"
          top="0px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <source src="/video/mockup_video576.mp4" type="video/mp4" />
        </MotionBox>
      )}

      <MotionBox
        d={{ base: 'none', xl: 'block' }}
        textAlign="center"
        position="fixed"
        zIndex="99"
        overflow="hidden"
        width={{ base: '100%', xl: '1350px' }}
        top="68px"
        px="22px"
        style={{ top, scale }}
      >
        <Image
          src="/images/logo.png"
          layout="responsive"
          alt=""
          width="1462"
          height="144"
        />
      </MotionBox>

      <MotionBox
        d={{ base: 'block', xl: 'none' }}
        width="100%"
        textAlign="center"
        zIndex="9999"
        position="fixed"
        overflow="hidden"
        top="68px"
        px="22px"
        style={{ width }}
        left="50%"
        transform="translate(-50%, 0)"
      >
        <Image
          src="/images/logo.png"
          layout="responsive"
          alt=""
          width="1462"
          height="144"
        />
      </MotionBox>
    </Box>
  );
}

export default Hero;
