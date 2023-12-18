import React from 'react'
import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import OfferSection from './components/OfferSection'

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
    </RootLayout>
  )
}