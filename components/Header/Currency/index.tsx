import {
  Popover,
  Box,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Currency() {
  return (
    <Box zIndex={9999} mr={{ base: 'auto', lg: '0' }}>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box
            d="flex"
            alignItems="center"
            mr="auto"
            justifySelf="left"
            justifyContent="left"
          >
            <Text
              mr="7px"
              _hover={{
                color: '#a3a3a3',
              }}
            >
              <Link href="#">TH-THB</Link>
            </Text>
            <Box w="8px">
              <Image
                src="/images/icon-arrow-down.png"
                width={15}
                height={9}
                layout="responsive"
                alt="cart icon"
              />
            </Box>
          </Box>
        </PopoverTrigger>
        <PopoverContent
          w="90px"
          top="3px"
          left="0"
          p="10px"
          border="none"
          borderRadius="0px"
        >
          <PopoverBody>
            <Link href="#" passHref>
              <Text
                cursor="pointer"
                _hover={{
                  color: '#a3a3a3',
                }}
              >
                US-USD
              </Text>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default Currency;
