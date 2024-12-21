import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#BFE9DB',
        color: '#313131',
        py: 3,
        mt: 8,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, // Stack columns in mobile view, row in larger views
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side - About Us */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant='h6' gutterBottom>
            About Us
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }}>
            A resume builder is an easy-to-use software that helps to design
            professional resumes with simple templates, <br /> formatting
            options, and clear instructions for adding skills, experiences, and
            achievements.
          </Typography>
        </Grid>

        {/* Right Side - Quick Links and Contact Us */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Column in mobile view, row in larger views
            gap: 4,
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'space-around',
          }}
        >
          {/* Quick Links */}
          <Box
            sx={{
              width: { xs: '100%', sm: 'auto' },
              textAlign: { xs: 'center', sm: 'left', md: 'left' },
            }}
          >
            <Typography variant='h6' gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ mt: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Link
                href='./detailsfillingpage'
                underline='hover'
                color='inherit'
              >
                Resume Template
              </Link>
              <br />
              <Link href='./myresume' underline='hover' color='inherit'>
                My Resume
              </Link>
              <br />
              <Link href='./about' underline='hover' color='inherit'>
                About Us
              </Link>
            </Box>
          </Box>

          {/* Contact Us */}
          <Box
            sx={{
              width: { xs: '100%', sm: 'auto' },
              textAlign: { xs: 'center', sm: 'left', md: 'left' },
            }}
          >
            <Typography variant='h6' gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ mt: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant='body2'>
                Email: support@jobhub.world
              </Typography>
              <Typography variant='body2'>Phone: +91 9518035030</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          borderTop: '1px solid #7f8c8d',
          pt: 2,
        }}
      >
        <Typography variant='body2'>
          © {new Date().getFullYear()} Jobhub.World. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
