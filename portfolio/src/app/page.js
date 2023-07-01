import Image from 'next/image'
import NavBar from './components/navBar'
import Design from './components/design'
import Projects from './components/projects'
import FloatingNavbar from './components/float'
import AboutMe from './components/aboutMe'
import Technologies from './components/tech'
import ContactMe from './components/contact'
import YouTubeVideo from './components/video'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className='min-h-screen dark:bg-primaryDark'>
      <NavBar></NavBar>
      <Design className=' flex-grow'></Design>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Projects ></Projects>
      <YouTubeVideo></YouTubeVideo>
      <ContactMe></ContactMe>
      <FloatingNavbar></FloatingNavbar>
      <Footer></Footer>
    </main>
    )
}
