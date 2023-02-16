import React, { FC, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import styles from '../../styles/time.module.css'

import { data } from './popular-course.data'
import { CourseCardItem } from '../course'
import { StyledButton } from '../styled-button'
import Link from 'next/link'
import $ from 'jquery'
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
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
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

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomePopularCourse: FC = () => {
  const [time1, setTime1] = useState<Number>()
  const [time2, setTime2] = useState<Number>()

  const [time3, setTime3] = useState<Number>()
  useEffect(() => {
    $(window).scroll(function () {
      
      if ($(window).scrollTop() > 550) {
        setTime1(1)
      } else if ($(window).scrollTop() < 550) {
        setTime1(0)
      }
    })

    $(window).scroll(function () {
      
      if ($(window).scrollTop() > 800) {
        setTime2(1)
      } else if ($(window).scrollTop() < 800) {
        setTime2(0)
      }
    })

    $(window).scroll(function () {
      
      if ($(window).scrollTop() > 1000) {
        setTime3(1)
      } else if ($(window).scrollTop() < 1000) {
        setTime3(0)
      }
    })
  })

  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: '',
      }}
    >
      {/* <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                Most Popular Courses
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <CourseCardItem key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container> */}
      <div className={styles.header}>
        <Typography
          component="h2"
          sx={{
            position: 'relative',
            fontSize: { xs: 36, md: 46 },
            mt: { xs: 8, md: 9 },
            mb: 8,
            lineHeight: 1,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Our Services{' '}
        </Typography>
      </div>

      <div className={styles.verticalbox}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.maintimeline}>
                <div
                  id="timeline"
                  style={
                    time1 === 1
                      ? { opacity: 1, transition: 'max-width 0.5s ease-in', maxWidth: '100%' }
                      : { opacity: 0, transition: 'all 0.5s ease-in', maxWidth: 0 }
                  }
                  className={styles.timeline}
                >
                  <a href="#" className={styles.timelinecontent}>
                    <span className={styles.timelineyear}>
                      <img
                        width="100%"
                        src="https://rainbowclasseshisar.com/wp-content/uploads/2020/04/rainbow-classes-jee-preparation-after-class-10th.jpg"
                        alt=""
                        className={styles.timelineImg}
                      />
                    </span>
                    <div className={styles.timelineicon}></div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>Experential Learning</h3>
                      <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                      </p>
                      <Link href="/experential_Learning">
                        <button className={styles.serviceBtns}>Know More</button>
                      </Link>
                    </div>
                  </a>
                </div>
                <div
                  style={
                    time2 === 1
                      ? { opacity: 1, transition: 'max-width 0.5s ease-out', maxWidth: '100%' }
                      : { opacity: 0, transition: 'all 0.5s ease-out', maxWidth: 0 }
                  }
                  className={styles.timeline}
                >
                  <a href="#" className={styles.timelinecontent}>
                    <span className={styles.timelineyear}>
                      <img
                        width="100%"
                        src="https://rainbowclasseshisar.com/wp-content/uploads/2020/04/rainbow-classes-jee-preparation-after-class-10th.jpg"
                        alt=""
                        className={styles.timelineImg}
                      />
                    </span>
                    <div className={styles.timelineicon}></div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>Virtual Experience</h3>
                      <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                      </p>
                      <Link href="/experential_Learning">
                        <button className={styles.serviceBtns}>Know More</button>
                      </Link>
                    </div>
                  </a>
                </div>
                <div
                  style={
                    time3 === 1
                      ? { opacity: 1, transition: 'max-width 0.5s ease-out', maxWidth: '100%' }
                      : { opacity: 0, transition: 'all 0.5s ease-out', maxWidth: 0 }
                  }
                  className={styles.timeline}
                >
                  <a href="#" className={styles.timelinecontent}>
                    <span className={styles.timelineyear}>
                      <img
                        width="100%"
                        src="https://rainbowclasseshisar.com/wp-content/uploads/2020/04/rainbow-classes-jee-preparation-after-class-10th.jpg"
                        alt=""
                        className={styles.timelineImg}
                      />
                    </span>
                    <div className={styles.timelineicon}></div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>Psychometric Test</h3>
                      <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                      </p>
                      <Link href="/experential_Learning">
                        <button className={styles.serviceBtns}>Know More</button>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default HomePopularCourse
