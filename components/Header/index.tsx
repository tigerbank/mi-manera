import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';
import UserMenu from './UserMenu';

function Header() {
  return (
    <Box
      height="43px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="33px"
    >
      <Text> TH-THB</Text>
      <Nav />
      <UserMenu />
    </Box>
  );
}

export default Header;
