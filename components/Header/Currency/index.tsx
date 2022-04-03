import {
  Popover,
  Box,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Currency() {
  return (
    <Box zIndex={9999}>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box d="flex" alignItems="center">
            <Text mr="7px">TH-THB</Text>
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
          <PopoverBody>US-USD</PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default Currency;
