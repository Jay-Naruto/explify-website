import { StyledButton } from '../components/styled-button'
import { Typography, Box, Container } from '@mui/material'
import { Header } from '../components/header'
import {useRouter as router} from 'next/navigation'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '../styles/experential_Learning_details.module.css'
export default function experential_Learning_details() {
  const location = useRouter()
  const nav = router()

  const data = location.query
  return (<>
  <Header/>
    <div className={styles.component}>
      {data && (
        <>
          <div className={styles.dataImg}>
            <img width="60%" src={data.photo} alt="" />
          </div>
          <div className={styles.header}>
            <div>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  mt: { xs: 7, md: 7 },
                  mb: 4,
                  lineHeight: 1,
                  color: 'white',
                }}
                className={styles.text}
              >
                Description{' '}
              </Typography>
              <div className={styles.descriptionBody}>
                <p className={styles.description}>{data.description}</p>
              </div>
            </div>
          </div>
          <Box id="contact-us" sx={{ backgroundColor: '', py: { xs: 8, md: 10 }, width:{xs:'100%'} }}>
            <Container>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  py: { xs: 4, md: 10 },
                  px: { xs: 4, md: 8 },
                  textAlign: 'center',
                  border: '1px solid #00c6ff',
                }}
              >
                <Typography 
                className={styles.title}
                
                sx={{ mb: 1 }}>
                  College Name
                </Typography>
                {/* <Typography sx={{ mb: 6 }}>Email us</Typography> */}
                <div className={styles.descriptionBody}>
                  <p className={styles.description}>Address</p>
                  <p className={styles.price}>$ ---</p>
                </div>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-around',
                    width: { xs: '100%', md: 560 },
                    mx: 'auto',
                  }}
                >
                  {/* <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            /> */}
                  <Box>
                    <StyledButton color="secondary" disableHoverEffect size="large">
                      Apply
                    </StyledButton>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </div>
    </>
  )
}
