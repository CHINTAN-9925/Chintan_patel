import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactForm from './components/Contact'
import Experiance from './components/About'
import Footer from './components/Footer'
import About from './components/About'


export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      {/* <About/> */}
      <About/>
      <Projects />
      <ContactForm />
      {/* <Footer/> */}
    </>
  )
}
