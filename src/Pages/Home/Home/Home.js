import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import BlogContact from '../Blog_Contact/Blog_Contact';
import { Box } from '@mui/system';

const Home = () => {
    return (
        <Box>
            <Banner></Banner>
            <Products></Products>
            <BlogContact></BlogContact>
            <Reviews></Reviews>
        </Box>
    );
};

export default Home;