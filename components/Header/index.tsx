import { Box } from '@chakra-ui/react';
import React from 'react';
import Currency from './Currency';
import Nav from './Nav';
import MobileNav from './MobileNav';
import UserMenu from './UserMenu';

function Header() {
  return (
    <Box
      height="43px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="33px"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex={9999}
      bg="#fff"
    >
      <MobileNav />
      <Currency />
      <Nav />
      <UserMenu />
    </Box>
  );
}

export default Header;
