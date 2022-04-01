import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function BottomNav() {
  const nav1 = ['Women', 'Colletions', 'Editorial', 'Stories'];
  const nav2 = ['Payment Notification', 'Customer Service', 'FAQ'];
  const nav3 = ['Instagram', 'Facebook'];
  const nav4 = ['Term & Conditions', 'Privacy Policy', 'Cookies Policy'];

  return (
    <Box d="flex" justifyContent="space-between" mb="70px">
      <Box w="175px">
        <Heading as="h4">ABOUT</Heading>
        <UnorderedList m="0px" p="0px">
          {nav1.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                lineHeight="25px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px">
        <Heading as="h4">HELP</Heading>
        <UnorderedList m="0px" p="0px">
          {nav2.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                lineHeight="25px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px">
        <Heading as="h4">SOCIAL</Heading>
        <UnorderedList m="0px" p="0px">
          {nav3.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                lineHeight="25px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px">
        <Heading as="h4">LEGAL</Heading>
        <UnorderedList m="0px" p="0px">
          {nav4.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                lineHeight="25px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>

      <Box w="362px">
        <Heading as="h4">NEWSLETTER</Heading>
      </Box>
    </Box>
  );
}

export default BottomNav;
