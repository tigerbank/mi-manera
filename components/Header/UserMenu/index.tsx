import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function UserMenu() {
  return (
    <Box d="flex">
      <Text mr="25px">
        <Link href="#">SIGN IN</Link>
      </Text>
      <Box w="15px" cursor="pointer">
        <Link href="#" passHref>
          <Box>
            <Image
              src="/images/icon-cart.png"
              width={15}
              height={15}
              layout="responsive"
              alt="cart icon"
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default UserMenu;
