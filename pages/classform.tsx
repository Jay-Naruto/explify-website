import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import styles from '../styles/form.module.css'
import { Grid, Typography, Box, Container } from '@mui/material'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

type UserSubmitForm = {
  name: string
  board: string
  strength: string
  location: string
  contact: string
  details: string
}
export default function schoolform() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    board: Yup.string().required('Board is required'),

    // strength: Yup.string().required('Email is required').email('Email is invalid'),
    strength: Yup.string().required('Strength is required'),

    location: Yup.string().required('Location is required'),
    contact: Yup.string().required('Contact is required'),
    details: Yup.string().required('Details is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2))
  }
  return (
    <>
       <div>
        <img className={styles.formBody} src='./images/Ellipse 6.png' alt=''/>
      </div> 
      <Header />
      <div className={styles.form}>
        <div className={styles.header}></div>
        <Box
          id="form1"
          sx={{
            pb: { xs: 6, md: 10 },

            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: ' 2px solid #E0C781',
            borderRadius: '20px',
          }}
        >
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12} sm={12} sx={{ display: { md: 'block' } }}>
                <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                  {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                  <div>
                    <div>
                      <div>
                        <div className="register-form">
                          <form className={styles.formBodyFlex} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                              <label style={{ color: 'white' }}>Full Name</label>
                              <input
                                type="text"
                                {...register('name')}
                                style={{
                                  background: 'rgba(99, 88, 189, 0.19)',
                                  opacity: 0.73,
                                  border: '1px solid rgba(255, 255, 255, 0.92)',
                                  borderRadius: '11px',

                                  color: 'white',
                                }}
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              />
                              <div className="invalid-feedback">{errors.name?.message}</div>
                            </div>

                            {/* <div className="form-group">
                            <label>Board</label>
                            <input
                              type="text"
                              {...register('board')}
                              className={`form-control ${errors.board ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.board?.message}</div>
                          </div> */}

                            <div className="form-group">
                              <label style={{ color: 'white' }}>Strength</label>
                              <input
                                type="text"
                                {...register('strength')}
                                style={{
                                  background: 'rgba(99, 88, 189, 0.19)',
                                  opacity: 0.73,
                                  border: '1px solid rgba(255, 255, 255, 0.92)',
                                  borderRadius: '11px',

                                  color: 'white',
                                }}
                                className={`form-control ${errors.strength ? 'is-invalid' : ''}`}
                              />
                              <div className="invalid-feedback">{errors.strength?.message}</div>
                            </div>

                            <div className="form-group">
                              <label style={{ color: 'white' }}>Location</label>
                              <input
                                type="text"
                                {...register('location')}
                                style={{
                                  background: 'rgba(99, 88, 189, 0.19)',
                                  opacity: 0.73,
                                  border: '1px solid rgba(255, 255, 255, 0.92)',
                                  borderRadius: '11px',

                                  color: 'white',
                                }}
                                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                              />
                              <div className="invalid-feedback">{errors.location?.message}</div>
                            </div>
                            <div className="form-group">
                              <label style={{ color: 'white' }}>Details</label>
                              <input
                                type="text"
                                {...register('details')}
                                style={{
                                  background: 'rgba(99, 88, 189, 0.19)',
                                  opacity: 0.73,
                                  border: '1px solid rgba(255, 255, 255, 0.92)',
                                  borderRadius: '11px',

                                  color: 'white',
                                }}
                                className={`form-control ${errors.details ? 'is-invalid' : ''}`}
                              />
                              <div className="invalid-feedback">{errors.details?.message}</div>
                            </div>

                            <div className={styles.formgroup}>
                              <button type="submit" className="btn btn-primary">
                                Register
                              </button>
                              <button type="button" onClick={() => reset()} className="btn btn-warning float-right">
                                Reset
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Footer />
    </>
  )
}
