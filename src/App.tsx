import logo2 from '../logo2.png'
import headerBackground from '../bg-header-1.jpg'
import { MdOutlineMail, MdOutlinePlace } from 'react-icons/md'
import { LuPhone } from 'react-icons/lu'
import About from './about'
import Contact from './contact'
import Footer from './footer'

function App() {
  return (
    <>
      <header id="home">
        <div className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-20 h-auto md:h-12 text-sm md:text-base">
          <div className="flex items-center gap-2 py-2 md:py-0">
            <MdOutlinePlace className="h-5 w-5 text-white" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=2363+JAMES+ST+%23+595+SYRACUSE,+NY+13206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center hover:text-white transition"
            >
              2363 JAMES ST # 595 SYRACUSE, NY 13206
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 pb-2 md:pb-0">
            <div className="flex items-center gap-2">
              <LuPhone className="h-5 w-5 text-white" />
              <a href="tel:+13158701050">+1 (315) 870-1050</a>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="h-5 w-5 text-white" />
              <a href="mailto:hr@naexpressllc.com">hr@naexpressllc.com</a>
            </div>
          </div>
        </div>

        <nav>
          <div className="bg-gray-300 text-black px-4 md:px-20 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <a href="#home" className="flex items-center gap-5">
                <img src={logo2} alt="N&A Express logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold">N&A express</span>
              </a>
              <div className="flex space-x-4 mt-3 md:mt-0 font-bold">
                <a href="#home" className="hover:text-gray-500">Home</a>
                <a href="#about" className="hover:text-gray-500">About</a>
                <a href="#contact" className="hover:text-gray-500">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section
        className="bg-cover bg-center min-h-70 flex items-center"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-white mb-4">Welcome to N&A Express</h1>
          <p className="text-center text-white">Your trusted logistics partner in USA.</p>
        </div>
      </section>

      <main>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  )
}

export default App
