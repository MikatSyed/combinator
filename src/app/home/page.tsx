import About from '@/components/UI/About';
import Companies from '@/components/UI/Companies';
import DemoSection from '@/components/UI/DemoSection';
import HeroSection from '@/components/UI/HeroSection';
import Navbar from '@/components/UI/Navbar'
import Success from '@/components/UI/Success';
import Blog from '@/components/UI/Blog';
import React from 'react'
import Demo from '@/components/UI/Demo';
import Equity from '@/components/UI/Equity';
import Testimonial from '@/components/UI/Testimonial';
import Learn from '@/components/UI/Learn';
import Footer from '@/components/UI/Footer';
import Overview from '@/components/UI/Ovewview';

const HomePage = ()=> {
  return (
    <div className="main">
        <Navbar/>
        <HeroSection/>
        <DemoSection/>
        <Companies/>
        <About/>
        <Success/>
        <Blog/>
        <Demo/>
        <Equity/>
        <Testimonial/>
        <Overview/>
        <Learn/>
        <Footer/>
    </div>
  )
}

export default HomePage;
