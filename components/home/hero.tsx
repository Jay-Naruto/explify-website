import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import styles from '../../styles/hero.module.css'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'transparent', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'white', lineHeight: 1,  fontWeight: 700 }} className={styles.text}>
                  {'Discover Best School & Uni for you'}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {
                    'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <div className={styles.buttonRow}>
                  <div>
                  <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <button className={styles.heroBtn1}>Button</button>
                </ScrollLink>
                  </div>
                  <div>
                  <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <button className={styles.heroBtn2}>Button</button>
                </ScrollLink>
                  </div>
                </div>
       
             
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}

            <Box sx={{ lineHeight: 0 }}>
              <img src="/images/heroImg2.png" className={styles.heroImg} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
      </Container>
      <Container>
        <img  className={styles.options} src="./images/options.png" alt="" />
      </Container>
    </Box>
  )
}

export default HomeHero
