import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactForm from './components/Contact'
import Experiance from './components/Experiance'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Experiance/>
      <Projects />
      <ContactForm />
    </>
  )
}
