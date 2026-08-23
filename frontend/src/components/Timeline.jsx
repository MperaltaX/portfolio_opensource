import React from 'react';
import { GitCommit } from 'lucide-react';

const Timeline = ({ data }) => {
  return (
    <section id="experiencia" className="timeline-section mt-8 mb-8">
      <h2 className="flex items-center gap-2 mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> EXECUTION_LOG: TIMELINE
      </h2>
      
      <div className="panel" style={{ padding: '3rem 2rem' }}>
        <div style={{ position: 'relative', borderLeft: '2px solid var(--border-subtle)', marginLeft: '1rem' }}>
          
          {data.map((item, idx) => (
            <div key={item.id} style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: idx === data.length - 1 ? '0' : '3rem' }}>
              
              {/* Timeline dot */}
              <div style={{ 
                position: 'absolute', 
                left: '-9px', 
                top: '0', 
                backgroundColor: 'var(--bg-panel)',
                borderRadius: '50%',
                padding: '2px'
              }}>
                <GitCommit size={14} color={idx === 0 ? 'var(--accent-green)' : 'var(--accent-cyan)'} />
              </div>
              
              <div style={{
                border: '1px solid var(--border-subtle)',
                padding: '1.5rem',
                backgroundColor: 'rgba(0,0,0,0.2)',
                position: 'relative'
              }}>
                {idx === 0 && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    right: '10px', 
                    background: 'var(--accent-green)', 
                    color: 'var(--bg-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    padding: '2px 6px',
                    fontWeight: 'bold'
                  }}>CURRENT_NODE</span>
                )}
                
                <div className="flex justify-between items-center mb-2">
                  <h3 style={{ margin: 0, color: idx === 0 ? 'var(--accent-green)' : 'white' }}>{item.role}</h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.period}</span>
                </div>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Timeline;
