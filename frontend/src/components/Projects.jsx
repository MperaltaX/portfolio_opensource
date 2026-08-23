import React from 'react';
import { Code, Activity, Server } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="proyectos" className="projects-section mt-8 animate-fade-in-up">
      <h2 className="flex items-center gap-2 mb-4 animate-glow-text" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> PROTOCOLOS: PROYECTOS_DESTACADOS
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {data.map((project, idx) => (
          <div key={project.id} className="panel animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 200}ms`, borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-green)'}` }}>
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>
                {project.title}
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>ID: {project.id.toUpperCase()}</span>
            </div>
            
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
              <div>
                <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  <Server size={14} /> <span>ENFOQUE</span>
                </div>
                <p style={{ fontSize: '0.9rem' }}>{project.focus}</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  <Activity size={14} /> <span>RESULTADO</span>
                </div>
                <p style={{ fontSize: '0.9rem' }}>{project.metrics}</p>
              </div>
            </div>
            
            {project.stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-pill" style={{ 
                    border: '1px solid var(--text-secondary)', 
                    padding: '2px 8px', 
                    fontSize: '0.7rem', 
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
