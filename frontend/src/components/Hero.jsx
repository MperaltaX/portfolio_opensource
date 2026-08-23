import React from 'react';
import { ChevronRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section className="hero-section mt-8 mb-4 animate-fade-in-up">
      <div className="system-status animate-pulse-glow" style={{ padding: '4px 12px', border: '1px solid var(--accent-green)', borderRadius: '20px' }}>
        <div className="status-dot"></div>
        <span>STATUS: LISTENING</span>
      </div>
      
      <h1 className="glitch-text animate-fade-in-up delay-100" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }} data-text={data.headline}>
        {data.headline}
      </h1>
      
      <p className="subtitle animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-mono)' }}>
        {data.role}
      </p>
      
      <div className="flex gap-2 mt-4 flex-wrap animate-fade-in-up delay-300">
        <a href="#proyectos" className="btn flex items-center gap-1">
          Ver Proyectos Clave <ChevronRight size={16} />
        </a>
        <a href="#contacto" className="btn btn-secondary">
          Contactar
        </a>
        {data.cv && (
          <a href={data.cv} download target="_blank" rel="noreferrer" className="btn btn-secondary flex items-center gap-2" style={{ borderColor: 'var(--accent-green)', color: 'var(--text-primary)' }}>
            <Download size={16} color="var(--accent-green)" /> Descargar CV
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
