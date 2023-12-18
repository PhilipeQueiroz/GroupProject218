import React from 'react'
import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import OfferSection from './components/OfferSection'
import ProductSection from './components/ProductSection'
import AboutSection from './components/AboutSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (  
    <RootLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavigationBar />
      <div>
        <HeroSection/>
      </div>
      <div>
        <OfferSection />
      </div>

      <div>
        <ProductSection />
      </div>

      <div>
        <AboutSection />
      </div>
      
      <div>
        <Testimonials />
      </div>

      <div>
        <Footer />
      </div>

      
    </RootLayout>
  )
}
