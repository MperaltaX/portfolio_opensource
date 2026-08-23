import React from 'react';
import { Code, Briefcase, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer id="contacto" style={{ 
      borderTop: '1px solid var(--border-subtle)', 
      padding: '4rem 2rem 2rem 2rem', 
      marginTop: '4rem',
      backgroundColor: 'rgba(5, 11, 20, 0.9)' 
    }}>
      <div className="sci-fi-container grid grid-cols-2 gap-4">
        
        <div style={{ gridColumn: '1 / -1' }}>
          <h2 className="glitch-text" data-text="INITIATE_CONTACT" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            INITIATE_CONTACT
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Disponible para transmisión directa. Establezca conexión a través de los canales seguros a continuación.
          </p>
          
          <a href={`mailto:${data?.email || 'contact@nexus.sys'}`} className="btn flex items-center justify-center gap-2" style={{ display: 'inline-flex', width: 'auto' }}>
            <Mail size={18} /> {data?.email || 'contact@nexus.sys'}
          </a>
        </div>
        
        <div className="flex flex-col items-start justify-center" style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <div className="panel" style={{ width: '100%', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              EXTERNAL_NETWORKS
            </h3>
            
            <div className="flex flex-col gap-2">
              <a href={data?.github || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                <Code size={16} /> GITHUB // NEXUS_REPO
              </a>
              <a href={data?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                <Briefcase size={16} /> LINKEDIN // PRO_DATA
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="sci-fi-container flex justify-between mobile-col-center gap-4" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
        <span>© 2026 NEXUS ARCHITECT_DEPT. ALL RIGHTS RESERVED.</span>
        <span>[STATUS: OPTIMAL]</span>
      </div>
    </footer>
  );
};

export default Footer;
