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
        setIsAsideOpen(false); // Función para cerrar el sidebar
    };

    return (
        <>
            <Header toggleAside={toggleAside} />
            <div className="d-flex">
                <Aside isOpen={isAsideOpen} onClose={closeAside} /> {/* Pasa onClose aquí */}
                <div className={`content ${isAsideOpen ? "aside-open" : ""}`}>
                    <Portada backgroundImage="path/to/image.jpg" height="600px" />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/disease/:name" element={<DiseasePage />} />
                            <Route path="Nosotros" element={<Nosotros />} />
                            <Route path="Consulta" element={<InfoSection />} />
                            <Route path="#" element={<p>#</p>} />
                            <Route path="Consulta" element={<p />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default App;
