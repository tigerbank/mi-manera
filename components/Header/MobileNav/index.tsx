import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  UnorderedList,
  useDisclosure,
  DrawerFooter,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Icon,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

const navItems = ['WOMEN', 'COLLECTIONS', 'EDITORIAL', 'NEWS', 'STORIES'];
const subNavItems = [
  'A.S.C.',
  'BAZAAR',
  'ELLE',
  'GQ',
  'L OFFICIEL THAILAND',
  'L OFFICIEL USA',
  'NUMERO',
  'VOGUE',
];

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const renderNav = (item: any) => {
    if (item !== 'EDITORIAL') {
      return (
        <ListItem
          key={item}
          borderBottom="solid 1px #e6e6e6"
          listStyleType="none"
          py="15px"
          onClick={onClose}
        >
          <Link href="#" passHref>
            <Text px="10px">{item}</Text>
          </Link>
        </ListItem>
      );
    } else {
      return (
        <Accordion allowToggle key={item}>
          <AccordionItem
            isFocusable={false}
            borderTop="none"
            borderBottom="none"
          >
            <AccordionButton py="15px" borderBottom="solid 1px #e6e6e6">
              <Box flex="1" textAlign="left">
                {item}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel bg="#f9f9f9" px="0px" pb="0px">
              <UnorderedList py="10px">
                {subNavItems.map((subNavItem: any) => (
                  <ListItem
                    as="li"
                    color="black"
                    key={subNavItem}
                    onClick={onClose}
                    listStyleType="none"
                    mb="15px"
                  >
                    <Link href="#">
                      <a>{subNavItem}</a>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      );
    }
  };

  return (
    <Box d={{ base: 'block', lg: 'none' }}>
      <Icon mr="20px" fontSize="20px" as={HamburgerIcon} onClick={onOpen} />
      <Drawer size="full" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="60px">
          <DrawerCloseButton top="50px" />

          <DrawerBody>
            <Box>
              <UnorderedList>
                {navItems.map((item: any) => {
                  return renderNav(item);
                })}
              </UnorderedList>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
