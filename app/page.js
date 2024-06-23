import About from './components/About'
import ContactForm from './components/Contact'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


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
