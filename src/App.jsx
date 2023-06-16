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


const App = () => {
  return (
    <div className="font-roboto w-full h-screen">
      <Router>
      <nav>
        <Navbar />
      </nav>
      <main>
        <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jyotish" element={<Jyotish />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/natural" element={<Natural />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vastu" element={<Vastu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/success" element={<Success />} />
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