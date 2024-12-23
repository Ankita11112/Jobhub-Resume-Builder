import { Box, Card } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './GlobalSwiper.css';

const GlobalSwiper = ({ content, sx, addImg, Box: showBox }) => {
  return (
    <Grid2 container sx={{ height: 'auto' }}>
      <Grid2 item className='swiper-container' xs={12}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          preventClicks={false}
          preventClicksPropagation={false}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          style={{
            margin: '8%',
          }}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <Card sx={sx}>
                {item.element ||
                  (addImg && (
                    <Box
                      component='img'
                      src={item.image}
                      alt={`swiper-slide-${index}`}
                      sx={{ width: '100%', height: '100%' }}
                    />
                  ))}
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination and Navigation Buttons */}
        <Box
          className='swiper-pagination'
          sx={{ margin: 2, display: { xs: 'none', md: 'block' } }}
        ></Box>
        <Box className='swiper-button-prev'></Box>
        <Box className='swiper-button-next'></Box>
      </Grid2>
    </Grid2>
  );
};

export default GlobalSwiper;
