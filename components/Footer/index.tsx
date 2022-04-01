import { Box } from '@chakra-ui/react';
import React from 'react';
import BottomNav from './BottomNav';
import Breadcrumbs from './Breadcrumbs';
import BuyStrips from './BuyStrips';
import Copyrights from './Copyrights';

function Footer() {
  return (
    <Box>
      <BuyStrips />
      <Breadcrumbs />
      <Box mt="20px" pt="33px" pb="30px" bg="#f8f9f8">
        <Box className="container">
          <BottomNav />
          <Copyrights />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
