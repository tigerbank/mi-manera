import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Nav() {
  const navItems = ['WOMEN', 'COLLECTIONS', 'EDITORIAL', 'NEWS', 'STORIES'];
  const MotionListItem = motion(ListItem);

  return (
    <Box d={{ base: 'none', md: 'block' }}>
      <UnorderedList d="flex" gap="44px">
        {navItems.map((item) => (
          <MotionListItem
            fontSize="12px"
            key={item}
            listStyleType="none"
            whileHover={{
              scale: 2.5,
              fontWeight: 'bold',
              marginLeft: '44px',
              marginRight: '44px',
            }}
            transition={{ type: 'tween' }}
          >
            <Link href="#">{item}</Link>
          </MotionListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Nav;
