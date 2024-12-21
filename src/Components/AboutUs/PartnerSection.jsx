import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';

import PartnersBg from '../AboutUs/Images/PartnersBg.png';
import aeroPlazaLogo from '../AboutUs/Images/aeroPlazaLogo.png';
import floranceLogo from '../AboutUs/Images/floranceEstateLogo.png';
import rajputLogo from '../AboutUs/Images/rajputGroupLogo.png';
import westHighLogo from '../AboutUs/Images/westHighlanderLogo.png';
import whiteRayLogo from '../AboutUs/Images/whiteRayLogo.png';
import aadiSoftLogo from '../AboutUs/Images/AadiSoftLogo.jpg';
import aboardLogo from '../AboutUs/Images/AbroadFliersLogo.png';
import aeboLogo from '../AboutUs/Images/AebocodeLogo.png';
import AmCareLogo from '../AboutUs/Images/AmCareLogo.jpeg';
import farlexLogo from '../AboutUs/Images/FarlexLogo.jpg';
import IvsLogo from '../AboutUs/Images/IvsLogo.jpg'; 
import JDevelopersLogo from '../AboutUs/Images/JDevelopers.png';
import eventLogo from '../AboutUs/Images/eventHolidaysLogo.png';
// import futureITLogo from '../AboutUs/Images/futureITLogo.png';
import jungleWorksLogo from '../AboutUs/Images/JungleworksLogo.png';
import RBLLogo from '../AboutUs/Images/RBLLogo.png';
import CompanySwiper from './GlobalSwiper';
// import RGLogo from '../AboutUs/Images/RGLogo.png';


const PartnerSection = () => {
  const companyItems = [
    { image: aeroPlazaLogo },
    { image: floranceLogo },
    { image: rajputLogo },
    { image: westHighLogo },
    { image: whiteRayLogo },
    { image: aadiSoftLogo },
    { image: aboardLogo },
    { image: aeboLogo },
    { image: AmCareLogo },
    { image: farlexLogo },
    { image: IvsLogo },
    { image: JDevelopersLogo },
    { image: eventLogo },
    // { image: futureITLogo },
    { image: jungleWorksLogo },
    { image: RBLLogo },
    //{ image: RGLogo },
  ];

  return (
    <>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid2
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 8, md: 3 },
            pb: { xs: 5, md: 3 },
            backgroundImage: { xs: 'none', md: `url(${PartnersBg})` },
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <Grid2 item xs={12}>
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
          </Grid2>
        </Grid2>
        {/* <CompanySwiper companyItems={companyItems} /> */}
        <CompanySwiper companyItems={companyItems} />
      </Box>
    </>
  );
};

export default PartnerSection;
