import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import styles from '../styles/explearn.module.css'

import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { StyledButton } from '../components/styled-button'
import Link from 'next/link'
import { Header } from '../components/header'
export default function experential_Learning() {
  interface User {
    id: number | string
    name: string
    photo: string
    description: string
  }
  const data: Array<User> = [
    {
      id: 1,
      photo: 'https://education.maharashtra.gov.in/images/school-icon.png',
      name: 'NAME',

      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      photo:
        'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      name: 'Name',

      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      photo:
        'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      name: 'Name',

      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      photo:
        'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      name: 'Name',

      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      photo:
        'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      name: 'Name',

      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]

  return (
    <>
  {/* <Header/> */}
    
    <div>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'rgba(255, 255, 255, 0.08);' }}>
        <Container>
          <Grid className={styles.descpBody} container spacing={5}>
            <Grid  item xs={12} md={6}>
              <Typography
                sx={{
                  position: 'relative',
                  mt: { xs: 7, md: 7 },
                  mb: 4,
                  color:'white',
                  lineHeight: 1,
                  fontWeight: 'bold',
                }}
                className={styles.text}
              >
                Experential Learning{' '}
              </Typography>
              <Typography style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
              {/* <StyledButton color="primary" size="large" variant="contained">
                <Link href="/experential-learning">Visit</Link>
              </StyledButton> */}
            </Grid>
            <Grid  item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box className={styles.descpBody} sx={{ width: { xs: '100%', md: '90%' } }}>
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
      <div className={styles.cardBody}>
        <div className={styles.cardRow}>
          {data.map((data) => (
            <Box
              sx={{
                my: 5,
                px:1.5
              }}
              className={styles.cardBox}
            >
              <Box
                sx={{
                  p: 2,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  border: '1px solid #fff',

                  transition: (theme) => theme.transitions.create(['box-shadow']),
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    lineHeight: 0,
                    overflow: 'hidden',
                    borderRadius: 3,
                    height: 200,
                    mb: 2,
                  }}
                >
                  <img style={{ width: '100%', height: '100%' }} src={data.photo} alt={'Img '} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography className={styles.title} sx={{  color: 'black' }}>
                    {data.name}
                  </Typography>

                  <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
                    {data.description}
                  </Typography>
                  <Box sx={{ '& img': { height: 26 } }}>
                    {/* eslint-disable-next-line */}
                    {/* <img src={item.company?.logo} alt={item.company?.name + ' logo'} /> */}
                    {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}> */}
                    <StyledButton color="primary" size="large" variant="outlined">
                      <Link
                        href={{
                          pathname: '/experential_Learning_details',
                          query: {
                            id: data.id,
                            photo: data.photo,
                            name: data.name,

                            description: data.description,
                          },
                        }}
                        as={data.name}
                      >
                        View More
                      </Link>
                    </StyledButton>
                    {/* </ScrollLink> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
