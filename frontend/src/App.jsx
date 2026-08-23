import React, { useState, useEffect } from 'react'
import { Terminal } from 'lucide-react'
import './App.css'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import AdminCMS from './components/AdminCMS'
import portfolioData from './data/portfolio.json'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Usamos el JSON importado directamente
    setTimeout(() => {
      setData(portfolioData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="app-container flex items-center justify-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="system-status mb-4">
            <div className="status-dot"></div>
            <span>INICIANDO SISTEMA_</span>
          </div>
          <h2 className="glitch-text" data-text="CARGANDO MÓDULOS">CARGANDO MÓDULOS</h2>
        </div>
      </div>
    );
  }

  if (currentRoute === '#admin') {
    return (
      <div className="app-container">
        <div className="scanline-effect"></div>
        <AdminCMS />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="scanline-effect"></div>
      
      <header className="flex items-center justify-between">
        <div className="logo flex items-center gap-1">
          <Terminal size={24} color="var(--accent-cyan)" />
          <span>NEXUS_SYS</span>
        </div>
        <nav className="nav-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Trayectoria</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="sci-fi-container">
        <Hero data={data.hero} />
        <TechStack data={data.techStack} />
        <Projects data={data.projects} />
        <Timeline data={data.experience} />
      </main>
      
      <Footer data={data.footer} />
    </div>
  )
}

export default App
