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