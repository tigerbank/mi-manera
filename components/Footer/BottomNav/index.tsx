import {
  Box,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function BottomNav() {
  const nav1 = ['Women', 'Colletions', 'Editorial', 'Stories'];
  const nav2 = ['Payment Notification', 'Customer Service', 'FAQ'];
  const nav3 = ['Instagram', 'Facebook'];
  const nav4 = ['Term & Conditions', 'Privacy Policy', 'Cookies Policy'];

  return (
    <Box d="flex" justifyContent="space-between" flexWrap="wrap">
      <Box w="175px" mb="70px">
        <Heading
          as="h4"
          mb="30px"
          fontSize="12px"
          fontWeight="normal"
          letterSpacing="1px"
        >
          ABOUT
        </Heading>
        <UnorderedList m="0px" p="0px">
          {nav1.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                mb="20px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px" mb="70px">
        <Heading
          as="h4"
          mb="30px"
          fontSize="12px"
          fontWeight="normal"
          letterSpacing="1px"
        >
          HELP
        </Heading>
        <UnorderedList m="0px" p="0px">
          {nav2.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                mb="20px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px" mb="70px">
        <Heading
          as="h4"
          mb="30px"
          fontSize="12px"
          fontWeight="normal"
          letterSpacing="1px"
        >
          SOCIAL
        </Heading>
        <UnorderedList m="0px" p="0px">
          {nav3.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                mb="20px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>
      <Box w="175px" mb="70px">
        <Heading
          as="h4"
          mb="30px"
          fontSize="12px"
          fontWeight="normal"
          letterSpacing="1px"
        >
          LEGAL
        </Heading>
        <UnorderedList m="0px" p="0px">
          {nav4.map((item) => (
            <Link passHref key={item} href="#">
              <ListItem
                cursor="pointer"
                listStyleType="none"
                mb="20px"
                color="#666666"
                _hover={{ color: '#acacac' }}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Box>

      <Box w="362px" mt={{ base: '30px', lg: '0px' }} mb="70px">
        <Heading
          as="h4"
          mb="30px"
          fontSize="12px"
          fontWeight="normal"
          letterSpacing="1px"
        >
          NEWSLETTER
        </Heading>
        <Box d="flex">
          <Box w="277px" mr="10px">
            <Input
              variant="flushed"
              size="lg"
              placeholder="Email"
              borderBottomColor="#999999"
              _placeholder={{ color: '#666666' }}
            />
            <Button mt="22px" isFullWidth bg="#e0e0e0" borderRadius="none">
              SUBSCRIBE
            </Button>
          </Box>
          <Box w="80px" height="80px" mt="8px">
            <Image
              src="/images/qr.png"
              width={160}
              height={160}
              layout="responsive"
              alt="Line"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomNav;
