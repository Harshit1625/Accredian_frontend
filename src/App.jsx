import { useContext, useEffect } from "react";
import BenefitsSection from "./components/BenefitsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import HowDoISection from "./components/HowDoISection";
import ModalComponent from "./components/ModalComponent";
import Navbar from "./components/Navbar";
import axios from 'axios';
import { Context } from "./context/ModalContext";

const App = () => {
  const context = useContext(Context);
  
  axios.defaults.baseURL = "http://localhost:4000/";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (context.open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [context.open]);


  return (
    <div className="relative">
      {context.open && (
        <>
          <div className="absolute z-20">
            <ModalComponent />
          </div>
          <div className="fixed h-[100vh] w-[100vw] z-10 bg-black opacity-60"></div>
        </>
      )}
      <div className="app">
        <Navbar />
        <HeroSection />
        <HowDoISection />
        <BenefitsSection />
        <FAQSection />
      </div>
      <ContactSection />
    </div>
  );
};

export default App;
