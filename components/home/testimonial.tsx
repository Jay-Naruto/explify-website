import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TestimonialItem } from '../testimonial'
import { data } from './testimonial.data'
import styles from '../../styles/faq.module.css'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    <Box id="about-us" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
      <Container>
        <Grid sx={{}} container spacing={5}>
          <Grid sx={{ width: '100%' }} item xs={12} md={6} sm={12}>
            <img style={{ width: '100%' }} src="./images/Other 18.png" alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: '100%', md: '100%' },
              display: { xs: 'flex', md: 'flex' },
              justifyContent: { xs: 'center', md: 'center' },
              alignItems: { xs: 'center', md: 'center' },
              flexDirection: { xs: 'column', md: 'column' },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '100%' },
                display: { xs: 'flex', md: 'flex' },
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: { xs: 'center', md: 'flex-start' },
                flexDirection: { xs: 'column', md: 'column' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}

              <Typography sx={{ color: 'white', mt: { xs: 0, md: 0 } }}>About Us</Typography>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                
                  mt: { xs: 1, md: 1 },
                  mb: 4,
                  lineHeight: 1,
               
                  color: 'white',
                }}
                className={styles.text}
              >
                Who We Are?{' '}
              </Typography>
              <Typography className={styles.descp} sx={{ color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonial
