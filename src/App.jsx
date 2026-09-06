import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Pricing from "./pages/Pricing/Pricing";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

function App() {
  return (
    <BrowserRouter>
      {/* Fixed Header */}
      <Navbar />

      {/* Space reserved for the fixed header */}
      <div className="pt-[78px]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/faq" element={<FAQ />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/book-appointment"
            element={<BookAppointment />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;