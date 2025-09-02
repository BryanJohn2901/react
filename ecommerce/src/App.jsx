import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Subscribe from './components/Subscribe'
import Testimoniaus from './components/Testimoniaus'
import Footer from './components/Footer'

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, []) // ✅ executa apenas uma vez

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Products />
      <Subscribe />
      <Testimoniaus />
      <Footer />
    </div>
  )
}

export default App
