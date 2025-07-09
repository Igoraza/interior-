import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WhatsAppChat from "./Components/WhatsappChat"; // 👈 import the new component

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Service from "./Pages/Services/Services";

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
      <WhatsAppChat /> {/* 👈 Add here so it appears on all pages */}
    </main>
  );
}
