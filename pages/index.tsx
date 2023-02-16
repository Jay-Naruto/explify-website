import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '../interfaces/layout'
import { MainLayout } from '../components/layout'
import Loading from './Loading'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
    <DynamicHomeHero />
      <DynamicHomePopularCourse />
      {/* <DynamicHomeFeature /> */}
      <DynamicHomeOurMentors />

      <DynamicHomeTestimonial />
     
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
