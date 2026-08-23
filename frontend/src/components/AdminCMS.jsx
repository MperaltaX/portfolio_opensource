import React, { useState } from 'react';
import { Save, Plus, Trash2, Home, Info } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const AdminCMS = () => {
  const [data, setData] = useState(portfolioData);
  const [status, setStatus] = useState('');

  // --- Handlers para Hero ---
  const handleHeroChange = (field, value) => {
    setData({ ...data, hero: { ...data.hero, [field]: value } });
  };

  // --- Handlers para Footer ---
  const handleFooterChange = (field, value) => {
    setData({ ...data, footer: { ...data.footer, [field]: value } });
  };

  // --- Handlers para Tech Stack ---
  const handleTechStackChange = (field, value) => {
    // Convierte el string separado por comas de vuelta a un array, limpiando espacios
    const arr = value.split(',').map(item => item.trim()).filter(Boolean);
    setData({ ...data, techStack: { ...data.techStack, [field]: arr } });
  };

  // --- Handlers para Proyectos ---
  const handleProjectChange = (index, field, value) => {
    const newData = { ...data };
    newData.projects[index][field] = value;
    setData(newData);
  };

  const handleAddProject = () => {
    const newData = { ...data };
    newData.projects.push({
      id: `p${Date.now()}`,
      title: 'Nuevo Proyecto',
      description: 'Descripción corta aquí',
      focus: 'Enfoque técnico',
      metrics: 'Resultados obtenidos',
      image: ''
    });
    setData(newData);
  };

  const handleDeleteProject = (index) => {
    const newData = { ...data };
    newData.projects.splice(index, 1);
    setData(newData);
  };

  // --- Handlers para Experiencia ---
  const handleExperienceChange = (index, field, value) => {
    const newData = { ...data };
    newData.experience[index][field] = value;
    setData(newData);
  };

  const handleAddExperience = () => {
    const newData = { ...data };
    newData.experience.push({
      id: `e${Date.now()}`,
      role: 'Nuevo Rol',
      period: 'Año - Año',
      description: 'Descripción del rol'
    });
    setData(newData);
  };

  const handleDeleteExperience = (index) => {
    const newData = { ...data };
    newData.experience.splice(index, 1);
    setData(newData);
  };

  // --- Guardar ---
  const handleSave = async () => {
    setStatus('Guardando...');
    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('¡Guardado exitosamente!');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Error al guardar');
      }
    } catch (err) {
      setStatus('Error de conexión');
    }
  };

  const inputStyle = { background: 'var(--bg-primary)', border: '1px solid var(--text-secondary)', color: 'white', padding: '0.5rem', width: '100%' };

  return (
    <div className="sci-fi-container" style={{ paddingTop: '2rem' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="glitch-text" data-text="CMS_ADMIN_PANEL" style={{ fontSize: '2rem' }}>
          CMS_ADMIN_PANEL
        </h1>
        <div className="flex gap-4">
          <button onClick={() => window.location.hash = ''} className="btn btn-secondary flex items-center gap-2">
            <Home size={16} /> Volver a Web
          </button>
          <button onClick={handleSave} className="btn flex items-center gap-2">
            <Save size={16} /> GUARDAR CAMBIOS
          </button>
        </div>
      </div>

      {status && (
        <div style={{ background: status.includes('Error') ? 'rgba(255,0,0,0.2)' : 'rgba(0,255,102,0.2)', padding: '1rem', marginBottom: '2rem', border: '1px solid', borderColor: status.includes('Error') ? 'red' : 'var(--accent-green)', color: 'white', position: 'sticky', top: '20px', zIndex: 100 }}>
          {status}
        </div>
      )}

      {/* --- GUÍA DE AYUDA --- */}
      <div className="panel mb-8" style={{ borderLeft: '4px solid var(--accent-green)', background: 'rgba(0, 255, 102, 0.05)' }}>
        <h2 className="flex items-center gap-2" style={{ fontSize: '1.2rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>
          <Info size={20} /> // PROTOCOLO DE INICIACIÓN: GUÍA DEL SISTEMA
        </h2>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
          <p className="mb-2"><strong>Bienvenido al Panel de Control Local.</strong> Este sistema te permite editar la web visualmente sin necesidad de código ni bases de datos.</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--accent-green)' }}>[1]</span>
              <span><strong>Edita los datos:</strong> Modifica cualquier campo en los paneles inferiores (Hero, Tech Stack, Trayectoria, etc.).</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--accent-green)' }}>[2]</span>
              <span><strong>Guarda los cambios:</strong> Haz clic en "GUARDAR CAMBIOS". Esto sobrescribirá automáticamente el archivo local <code>src/data/portfolio.json</code> en tu computadora.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--accent-green)' }}>[3]</span>
              <span><strong>Verifica en la web:</strong> Puedes hacer clic en "Volver a Web" para ver cómo los cambios se reflejan inmediatamente gracias al servidor de desarrollo (Vite).</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--accent-green)' }}>[4]</span>
              <span><strong>Publica (Importante):</strong> Dado que este CMS es 100% local, para que el resto del mundo vea tus cambios, debes hacer un <code>git commit</code> y <code>git push</code> de los archivos modificados a tu repositorio. Tu plataforma de hosting (ej. Vercel o Netlify) reconstruirá la página con los nuevos datos.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- SECCIÓN HERO --- */}
      <div className="panel mb-8">
        <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>// GESTIÓN: HERO (INICIO)</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>TITULAR PRINCIPAL</label>
            <textarea
              value={data.hero.headline}
              onChange={(e) => handleHeroChange('headline', e.target.value)}
              style={{ ...inputStyle, minHeight: '60px' }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>SUBTÍTULO / ROL</label>
              <input
                type="text"
                value={data.hero.role}
                onChange={(e) => handleHeroChange('role', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>RUTA DEL CV (PDF)</label>
              <input 
                type="text" 
                value={data.hero.cv || ''} 
                onChange={(e) => handleHeroChange('cv', e.target.value)}
                placeholder="/cv.pdf o URL completa"
                style={inputStyle}
              />
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>* Si usas una ruta local como <code>/cv.pdf</code>, el archivo físico debe estar guardado en la carpeta <code>frontend/public/</code> del proyecto antes de compilar.</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN TECH STACK --- */}
      <div className="panel mb-8">
        <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>// GESTIÓN: TECH STACK (Separado por comas)</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>INGENIERÍA & BACKEND</label>
            <textarea
              value={data.techStack.engineering.join(', ')}
              onChange={(e) => handleTechStackChange('engineering', e.target.value)}
              style={{ ...inputStyle, minHeight: '80px' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>BASES DE DATOS</label>
            <textarea
              value={data.techStack.databases.join(', ')}
              onChange={(e) => handleTechStackChange('databases', e.target.value)}
              style={{ ...inputStyle, minHeight: '80px' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>IA & AUTOMATIZACIÓN</label>
            <textarea
              value={data.techStack.ai.join(', ')}
              onChange={(e) => handleTechStackChange('ai', e.target.value)}
              style={{ ...inputStyle, minHeight: '80px' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>GESTIÓN DE PROYECTOS</label>
            <textarea
              value={data.techStack.leadership.join(', ')}
              onChange={(e) => handleTechStackChange('leadership', e.target.value)}
              style={{ ...inputStyle, minHeight: '80px' }}
            />
          </div>
        </div>
      </div>

      {/* --- SECCIÓN EXPERIENCIA --- */}
      <div className="panel mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>// GESTIÓN: TRAYECTORIA (TIMELINE)</h2>
          <button onClick={handleAddExperience} className="btn flex items-center gap-1" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
            <Plus size={14} /> Añadir
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {data.experience.map((exp, index) => (
            <div key={index} style={{ border: '1px solid var(--border-subtle)', padding: '1rem', background: 'rgba(0,0,0,0.3)' }}>
              <div className="flex justify-between mb-4">
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>NODO EXPERIENCIA: {index}</span>
                <button onClick={() => handleDeleteExperience(index)} style={{ color: '#ff4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>ROL</label>
                  <input type="text" value={exp.role} onChange={(e) => handleExperienceChange(index, 'role', e.target.value)} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>PERÍODO</label>
                  <input type="text" value={exp.period} onChange={(e) => handleExperienceChange(index, 'period', e.target.value)} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2" style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>DESCRIPCIÓN</label>
                  <textarea value={exp.description} onChange={(e) => handleExperienceChange(index, 'description', e.target.value)} style={{ ...inputStyle, minHeight: '60px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN PROYECTOS --- */}
      <div className="panel mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>// GESTIÓN: PROYECTOS DESTACADOS</h2>
          <button onClick={handleAddProject} className="btn flex items-center gap-1" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
            <Plus size={14} /> Añadir
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {data.projects.map((project, index) => (
            <div key={index} style={{ border: '1px solid var(--border-subtle)', padding: '1rem', background: 'rgba(0,0,0,0.3)' }}>
              <div className="flex justify-between mb-4">
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>NODO PROYECTO: {index}</span>
                <button onClick={() => handleDeleteProject(index)} style={{ color: '#ff4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>TÍTULO</label>
                  <input type="text" value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>IMAGEN (Ruta o URL)</label>
                  <input type="text" value={project.image || ''} onChange={(e) => handleProjectChange(index, 'image', e.target.value)} style={inputStyle} />
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>* Si usas una ruta local como <code>/images/foto.png</code>, el archivo físico debe estar guardado en <code>frontend/public/images/</code>.</span>
                </div>
                <div className="flex flex-col gap-2" style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>DESCRIPCIÓN</label>
                  <textarea value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} style={{ ...inputStyle, minHeight: '60px' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>ENFOQUE</label>
                  <input type="text" value={project.focus} onChange={(e) => handleProjectChange(index, 'focus', e.target.value)} style={inputStyle} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>MÉTRICAS / RESULTADO</label>
                  <input type="text" value={project.metrics} onChange={(e) => handleProjectChange(index, 'metrics', e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN FOOTER --- */}
      <div className="panel mb-8">
        <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>// GESTIÓN: CONTACTO Y REDES SOCIALES</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>CORREO ELECTRÓNICO</label>
            <input
              type="email"
              value={data.footer?.email || ''}
              onChange={(e) => handleFooterChange('email', e.target.value)}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>URL DE GITHUB</label>
            <input
              type="url"
              value={data.footer?.github || ''}
              onChange={(e) => handleFooterChange('github', e.target.value)}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>URL DE LINKEDIN</label>
            <input
              type="url"
              value={data.footer?.linkedin || ''}
              onChange={(e) => handleFooterChange('linkedin', e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-8 mt-4">
        <button onClick={handleSave} className="btn flex items-center gap-2" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
          <Save size={18} /> GUARDAR CAMBIOS
        </button>
      </div>

    </div>
  );
};

export default AdminCMS;
