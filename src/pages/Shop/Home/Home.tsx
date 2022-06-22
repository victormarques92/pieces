import React from 'react';
import { FeaturedProducts, Hero } from '../../../sections';
import Layout from '../../Layout';
import dataList from './dataList';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />

      <FeaturedProducts data={dataList} />
    </Layout>
  );
};

export default Home;
