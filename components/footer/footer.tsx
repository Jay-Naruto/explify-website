import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '../footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(277.69deg, #AAD9D9 -9.79%, #7D7DDC 84.42%, #9090DC 84.42%)',
        py: { xs: 6, md: 10 },
        color: 'primary.contrastText',
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <img src="./images/explify.png" alt="" />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2, mt: 2, color: 'black' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
