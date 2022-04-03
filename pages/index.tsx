import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturedProduct1 from '../components/FeaturedProduct1';
import FeaturedProduct2 from '../components/FeaturedProduct2';
import FeaturedProduct3 from '../components/FeaturedProduct3';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>MI MANERA</title>
      </Head>
      <Header />
      <Box as="main" pt="48px">
        <Hero />
        <FeaturedProduct1 />
        <FeaturedProduct2 />
        <FeaturedProduct3 />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
