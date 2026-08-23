import React from 'react';
import { Database, Cpu, Network, Users } from 'lucide-react';

const TechStack = ({ data }) => {
  return (
    <section className="tech-stack-section mt-8">
      <h2 className="flex items-center gap-2 mb-4 animate-glow-text" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> MODULES: SYSTEM_ARCHITECTURE
      </h2>

      <div className="grid grid-cols-2 gap-2">
        {/* Engineering & Backend */}
        <div className="panel flex-col animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 m-0" style={{ fontSize: '1rem' }}>
              <Cpu size={18} color="var(--accent-green)" />
              01. Ingeniería & Backend
            </h3>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>CORE_SYS</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-4">
            {data.engineering.map((tech, i) => (
              <span key={i} className="tech-pill animate-fade-in-up" style={{
                animationDelay: `${(i + 1) * 100}ms`,
                border: '1px solid var(--border-subtle)',
                padding: '0.3rem 0.8rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: 'rgba(0,0,0,0.3)'
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="panel flex-col animate-fade-in-up delay-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 m-0" style={{ fontSize: '1rem' }}>
              <Database size={18} color="var(--accent-green)" />
              02. Bases de Datos
            </h3>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>DATA_STR</span>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            {data.databases.map((tech, i) => (
              <div key={i} className="flex justify-between items-center tech-row animate-fade-in-up" style={{
                animationDelay: `${(i + 1) * 100 + 200}ms`,
                borderBottom: '1px solid var(--border-subtle)',
                padding: '0.5rem',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span>{tech}</span>
                <span style={{ color: 'var(--accent-cyan)' }}>[OK]</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Automation */}
        <div className="panel flex-col animate-fade-in-up delay-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 m-0" style={{ fontSize: '1rem' }}>
              <Network size={18} color="var(--accent-green)" />
              03. IA & Automatización
            </h3>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', background: 'rgba(0, 255, 102, 0.1)', padding: '2px 6px' }}>■ ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-4">
            {data.ai.map((tech, i) => (
              <span key={i} className="tech-pill animate-fade-in-up" style={{
                animationDelay: `${(i + 1) * 100 + 300}ms`,
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center'
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="panel flex-col animate-fade-in-up delay-400">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 m-0" style={{ fontSize: '1rem' }}>
              <Users size={18} color="var(--accent-green)" />
              04. Gestión de proyectos
            </h3>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>LEAD_OPS</span>
          </div>
          <div className="flex flex-col gap-2 mt-4" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1rem' }}>
            {data.leadership.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 tech-row animate-fade-in-up" style={{ animationDelay: `${(i + 1) * 100 + 400}ms`, padding: '4px' }}>
                <div className="animate-pulse-glow" style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
