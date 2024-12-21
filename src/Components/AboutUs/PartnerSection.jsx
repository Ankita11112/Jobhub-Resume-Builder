import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

import partnersBg from '../AboutUs/Images/PartnersBg.png';
import aeroPlazaLogo from '../AboutUs/Images/aeroPlazaLogo.png';
import floranceLogo from '../AboutUs/Images/floranceEstateLogo.png';
import aadiSoftLogo from '../AboutUs/Images/AadiSoftLogo.png';
import rajputLogo from '../AboutUs/Images/rajputGroupLogo.png';
import westHighLogo from '../AboutUs/Images/westHighlanderLogo.png';
import whiteRayLogo from '../AboutUs/Images/whiteRayLogo.png';
import aboardLogo from '../AboutUs/Images/AbroadFliersLogo.png';
import aeboLogo from '../AboutUs/Images/AebocodeLogo.png';
import amCareLogo from '../AboutUs/Images/AmCareLogo.png';
import farlexLogo from '../AboutUs/Images/FarlexLogo.png';
import ivsLogo from '../AboutUs/Images/IvsLogo.png';
import eventLogo from '../AboutUs/Images/eventHolidaysLogo.png';
import jungleWorksLogo from '../AboutUs/Images/JungleworksLogo.png';
import jdevelopersLogo from '../AboutUs/Images/jdevelopers.png';
import rblLogo from '../AboutUs/Images/RBLLogo.png';
import GlobalSwiper from './GlobalSwiper';

const PartnerSection = () => {
  const GlobalItems = [
    { image: aeroPlazaLogo },
    { image: floranceLogo },
    { image: rajputLogo },
    { image: whiteRayLogo },
    { image: amCareLogo },
    { image: aadiSoftLogo },
    { image: aboardLogo },
    { image: aeboLogo },
    { image: farlexLogo },
    { image: westHighLogo },
    { image: ivsLogo },
    { image: jdevelopersLogo },
    { image: eventLogo },
    { image: jungleWorksLogo },
    { image: rblLogo },
  ];

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 8, md: 3 },
          pb: { xs: 5, md: 3 },
          backgroundImage: { xs: 'none', md: `url(${partnersBg})` },
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <Grid item xs={12}>
          <Typography
            data-aos='fade-up'
            variant='h3'
            component='h2'
            sx={{
              textAlign: 'center',
              pt: { xs: 0, md: 8 },
              fontSize: { xs: '35px', md: '45px' },
            }}
          >
            Our{' '}
            <span
              style={{
                color: 'green',
              }}
            >
              Partners
            </span>
          </Typography>
        </Grid>
      </Grid>
      <GlobalSwiper GlobalItems={GlobalItems} />
    </Box>
  );
};

export default PartnerSection;
