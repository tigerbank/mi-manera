import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function BuyStrips() {
  return (
    <Box d="flex" className="container" mb="75px">
      <Box w="33%">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
        >
          WORLDWIDE SHIPPING & RETURNS
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="20px">
          Express or Free standard shipping
          <br /> Free returns within 14 days <br />
          Customs tax included
        </Text>
      </Box>

      <Box w="33%">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
        >
          CUSTOMER SERVICE
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="20px">
          info@mimanera.com <br />
          +66 96 3722 3462 <br />
          Monday to Friday, 10 am to 5 pm GMT time
        </Text>
      </Box>

      <Box w="33%">
        <Heading
          as="h3"
          fontSize="14px"
          fontWeight="normal"
          color="#282728"
          letterSpacing="1px"
        >
          SECURED PAYMENTS
        </Heading>
        <Text fontSize="14px" color="#666666" lineHeight="20px">
          Visa, Mastercard, Amex Paypal
        </Text>
      </Box>
    </Box>
  );
}

export default BuyStrips;
