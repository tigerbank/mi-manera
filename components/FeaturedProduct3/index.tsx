import { Box } from '@chakra-ui/react';
import React from 'react';
import Product from './Product';

function FeaturedProduct3() {
  return (
    <Box width={{ base: '100%', lg: '922px' }} ml="auto" mr="auto" mb="148px">
      <Product
        width={{ base: '100%', lg: '922px' }}
        src="/images/featured-product3.jpg"
        text="COLLECTION 01"
        imgWidth={1844}
        imgHeight={896}
      />

      <Box
        d="flex"
        justifyContent="space-between"
        mt="63px"
        gap="33px"
        flexWrap="wrap"
      >
        <Product
          width={{ base: '100%', md: '365px', lg: '428px' }}
          src="/images/featured-product4.jpg"
          text="COLLECTION 02"
          imgWidth={874}
          imgHeight={857}
        />
        <Product
          width={{ base: '100%', md: '365px', lg: '428px' }}
          src="/images/featured-product5.jpg"
          text="COLLECTION 03"
          imgWidth={874}
          imgHeight={857}
        />
      </Box>
    </Box>
  );
}

export default FeaturedProduct3;
