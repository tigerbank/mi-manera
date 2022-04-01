import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Nav() {
  const navItems = ['WOMEN', 'COLLECTIONS', 'EDITORIAL', 'NEWS', 'STORIES'];
  const MotionListItem = motion(ListItem);

  return (
    <Box>
      <UnorderedList d="flex" gap="44px">
        {navItems.map((item) => (
          <MotionListItem
            fontSize="12px"
            key={item}
            listStyleType="none"
            whileHover={{
              scale: 1.8,
              fontWeight: 'bold',
              paddingLeft: '25px',
              paddingRight: '25px',
            }}
          >
            <Link href="#">{item}</Link>
          </MotionListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Nav;
