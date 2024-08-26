import React, { useState } from "react";
import Header from "./components/Header";
import InfoSection from "./components/infoSection";
import Footer from "./components/Footer";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Portada from "./components/Portada";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home/Home";
import DiseasePage from "./components/DiseasePage/DiseasePage";

const App: React.FC = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    
    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    const closeAside = () => {
        setIsAsideOpen(false); 
    };

    return (
        <>
            <Header toggleAside={toggleAside}  />
            
            <div className="d-flex">
                <Aside isOpen={isAsideOpen} onClose={closeAside} /> 
                <div className={`content ${isAsideOpen ? "aside-open" : ""}`}>
                    <Portada backgroundImage="path/to/image.jpg" height="600px" />
                    <main>
                    <div className="overlay"></div>
                        <Routes>
                            <Route path="/UML_Project" element={<Home />} />
                            <Route path="/disease/:name" element={<DiseasePage />} />
                            <Route path="Nosotros" element={<Nosotros />} />
                            <Route path="Consulta" element={<InfoSection />} />
                       

                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default App;
