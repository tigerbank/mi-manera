import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function BuyStrips() {
  return (
    <Box d="flex" className="container" mb="25px" flexWrap="wrap">
      <Box w={{ base: '100%', md: '50%', lg: '33%' }} mb="50px">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
          mb="27px"
        >
          WORLDWIDE SHIPPING & RETURNS
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="24px">
          Express or Free standard shipping
          <br /> Free returns within 14 days <br />
          Customs tax included
        </Text>
      </Box>

      <Box w={{ base: '100%', md: '50%', lg: '33%' }} mb="50px">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
          mb="27px"
        >
          CUSTOMER SERVICE
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="24px">
          <u>info@mimanera.com</u> <br />
          +66 96 3722 3462 <br />
          Monday to Friday, 10 am to 5 pm GMT time
        </Text>
      </Box>

      <Box w={{ base: '100%', md: '50%', lg: '33%' }} mb="50px">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
          mb="27px"
        >
          SECURED PAYMENTS
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="24px">
          Visa, Mastercard, Amex Paypal
        </Text>
      </Box>
    </Box>
  );
}

export default BuyStrips;
