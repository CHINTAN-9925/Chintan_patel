import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import ContactForm from './components/Contact'
import About from './components/About'


export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About/>
      <Projects />
      <ContactForm />
    </>
  )
}
