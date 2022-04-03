import { Box, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Nav() {
  const navItems = ['WOMEN', 'COLLECTIONS', 'EDITORIAL', 'NEWS', 'STORIES'];
  const subNavItems = [
    'A.S.C.',
    'BAZAAR',
    'ELLE',
    'GQ',
    "L'OFFICIEL THAILAND",
    "L'OFFICIEL USA",
    'NUMERO',
    'VOGUE',
  ];
  const MotionListItem = motion(ListItem);
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  const [isOpen, setIsOpen] = useState(false);

  const renderNav = (item: any) => {
    return (
      <MotionListItem
        fontSize="12px"
        key={item}
        listStyleType="none"
        whileHover={{
          fontSize: '30px',
          fontFamily: 'AkzidenzGrotesk-Medium',
        }}
        transition={{ type: 'tween' }}
      >
        <Link href="#">{item}</Link>
      </MotionListItem>
    );
  };

  const renderNavWithSubItem = (item: any) => {
    return (
      <Box key={item} textAlign="center">
        <Box position="relative">
          <Text
            onMouseEnter={() => {
              setIsOpen(true);
            }}
          >
            {item}
          </Text>
          {isOpen && (
            <MotionBox
              onClick={() => setIsOpen(false)}
              d="block"
              w="100vw"
              h="100vh"
              position="fixed"
              left="0px"
              top="0px"
              bg="black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              zIndex={9999}
            >
              <Box w="200px" ml="auto" mr="auto">
                <MotionText
                  fontFamily="AkzidenzGrotesk-Medium"
                  fontSize="12px"
                  color="#828282"
                  mt="22px"
                  mb="22px"
                  textAlign="left"
                  initial={{ fontSize: '12px' }}
                  animate={{ fontSize: '30px' }}
                  transition={{ type: 'tween' }}
                >
                  {item}
                </MotionText>
                <UnorderedList m="0" p="0">
                  {subNavItems.map((item) => {
                    return (
                      <Link key={item} passHref href="#">
                        <MotionListItem
                          cursor="pointer"
                          color="#deddde"
                          listStyleType="none"
                          textAlign="left"
                          mt="20px"
                          fontSize="14px"
                          _hover={{ color: '#fff' }}
                          whileHover={{
                            fontSize: '18px',
                            fontFamily: 'AkzidenzGrotesk-Medium',
                          }}
                        >
                          {item}
                        </MotionListItem>
                      </Link>
                    );
                  })}
                </UnorderedList>
              </Box>
            </MotionBox>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <UnorderedList
      d={{ base: 'none', lg: 'flex' }}
      gap="44px"
      alignItems="center"
      ml="auto"
      mr="auto"
    >
      {navItems.map((item) =>
        item === 'EDITORIAL' ? renderNavWithSubItem(item) : renderNav(item),
      )}
    </UnorderedList>
  );
}

export default Nav;
