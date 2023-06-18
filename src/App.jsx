import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Legal from "./pages/Legal"
import Jyotish from "./pages/Jyotish"
import Natural from "./pages/Natural"
import Panel from "./pages/Panel"
import Services from "./pages/Services"
import Vastu from "./pages/Vastu"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from "./pages/Appointment"
import Success from "./pages/Success"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import Loader from "./components/Loader"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="font-roboto w-full h-screen">
      <Router>
      <nav>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
        <motion.ul initial={{opacity: 0}} animate={isOpen ? "open" : "closed"} variants={variants} className="absolute lg:hidden text-white font-semibold text-2xl flex flex-col items-center text-center gap-5 p-5 right-0 h-[calc(100vh-70px)] bg-gradient-to-b from-navColor via-mainColor to-contentColor w-[20rem] z-[99]">
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/about">About Us</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/jyotish">Bhartiya Jyotish</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/legal">Sahaya Bhartiye Vidhik</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/natural">Natural Life Care</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/panel">Panellist</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/services">Services</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/vastu">Vastu Consultancy</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.05}}>
            <Link to="/contact">Contact Us</Link>
          </motion.li>
        </motion.ul>
      </nav>
      <main>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/jyotish" element={<Jyotish />} />
        <Route exact path="/legal" element={<Legal />} />
        <Route exact path="/natural" element={<Natural />} />
        <Route exact path="/panel" element={<Panel />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/vastu" element={<Vastu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      </Router>
    </div>
  )
}

export default App