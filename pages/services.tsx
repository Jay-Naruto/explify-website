import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from '../styles/service.module.css'
import { StyledButton } from '../components/styled-button'
import Link from 'next/link'
import { Header } from '../components/header';
export default function services() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const matches2 = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
  <Header/>

      <div className={styles.header}>
        <Typography
          component="h2"
          sx={{
            position: 'relative',
            fontSize: { xs: 36, md: 46 },
            mt: { xs: 7, md: 7 },
            mb: 4,
            lineHeight: 1,
            fontWeight: 'bold',
          }}
        >
          Services{' '}
        </Typography>
      </div>
 <div className={styles.boxR}>
 <Box
        id="services"
        sx={{
          pb: { xs: 6, md: 10 },
          background: '',
        }}
      >
        <Container>
          <Grid container className={styles.boxRow2} spacing={ !matches2 ? 0 : 2}>
            <Grid
              sx={{
                pb: { xs: 6, md: 10 },
                p:{xs: 1},
                textAlign:{xs:'center'},
                background: 'rgb(255,255,255,0.1)',
                border: '3px solid #E0C781',
                borderRadius: '39px',
                width: '100%',
                textAlignLast:'center'
              }}
              item
              xs={12}
              md={6}
            >
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 36, md: 46 },
                  mt: { xs: 7, md: 7 },
                  mb: 4,
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Experential Learning{' '}
              </Typography>
              <Typography sx={{ mb: 2, color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
              <StyledButton color="primary" size="large" variant="outlined">
                <Link href="/experential_Learning">Visit</Link>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <img
                    className={styles.video}
                    src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"
                    alt=""
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
        <Container>
          <Grid className={styles.boxRow2} container spacing={ !matches2 ? 0:2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                pb: { xs: 6, md: 10 },
                p:{xs: 1},
                textAlign:{xs:'center'},
                background: 'rgb(255,255,255,0.1)',
                border: '3px solid #E0C781',
                borderRadius: '39px',
                width: '100%',
              }}
            >
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 36, md: 46 },
                  mt: { xs: 7, md: 7 },
                  mb: 4,
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Virtual Experience{' '}
              </Typography>
              <Typography sx={{ mb: 2, color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
              <StyledButton color="primary" size="large" variant="outlined">
                <Link href="/experential_Learning">Visit</Link>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <img
                    className={styles.video}
                    src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"
                    alt=""
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
        <Container>
          <Grid container className={styles.boxRow2} spacing={ !matches2 ? 0:2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                pb: { xs: 6, md: 10 },
                p:{xs: 1},
                textAlign:{xs:'center'},
                background: 'rgb(255,255,255,0.1)',
                border: '3px solid #E0C781',
                borderRadius: '39px',
                width: '100%',
              }}
            >
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 36, md: 46 },
                  mt: { xs: 7, md: 7 },
                  mb: 4,
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Psychometric Tests{' '}
              </Typography>
              <Typography sx={{ mb: 2, color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
              <StyledButton color="primary" size="large" variant="outlined">
                <Link href="/psychometric_test">Visit</Link>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <img
                    className={styles.video}
                    src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"
                    alt=""
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
 </div>
     
    </div>
  )
}
